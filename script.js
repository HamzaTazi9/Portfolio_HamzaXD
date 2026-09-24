const progressBar = document.getElementById("progressBar");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
    }

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 100);
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const target = document.querySelector(href);
        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Cursor-reactive spotlight behind the hero statement
const heroSpotlight = document.getElementById("heroSpotlight");
const heroSection = document.getElementById("hero");

if (heroSpotlight && heroSection) {
    heroSection.addEventListener("pointermove", (event) => {
        const rect = heroSection.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        heroSection.style.setProperty("--spot-x", `${x}%`);
        heroSection.style.setProperty("--spot-y", `${y}%`);
    });
}

// Logo selection frame: animated on a fresh visit or a refresh, shown still
// when moving between pages of the site
const logoFrame = document.querySelector("#navbar .logo-frame");

if (logoFrame) {
    const navigation = performance.getEntriesByType("navigation")[0];
    let fromThisSite = false;
    try {
        fromThisSite = Boolean(document.referrer) && new URL(document.referrer).origin === window.location.origin;
    } catch (error) {
        fromThisSite = false;
    }
    const isRefresh = navigation && navigation.type === "reload";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    logoFrame.classList.add(!reduce && (isRefresh || !fromThisSite) ? "is-animating" : "is-static");
}

// Section header lines draw in (orange → black) the first time they scroll
// into view
const headLines = document.querySelectorAll(".work-head-top");

if (headLines.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const headLineObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-drawn");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -15% 0px" }
    );

    headLines.forEach((line) => {
        line.classList.add("will-draw");
        // selection handles at both ends of the line
        ["start", "end"].forEach((side) => {
            const handle = document.createElement("i");
            handle.className = `head-handle head-handle-${side}`;
            handle.setAttribute("aria-hidden", "true");
            line.append(handle);
        });
        headLineObserver.observe(line);
    });
}

// Hero intro: "Denk het." is sketched as an outline, "Ontwerp het." gets a
// Figma-style selection frame with its size, "Bouw het." is typed out
const introHero = document.getElementById("hero");
const reduceIntroMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (introHero && !reduceIntroMotion) {
    const designLine = introHero.querySelector('[data-stage="design"] .line-inner');
    const buildLine = introHero.querySelector('[data-stage="build"] .line-inner');
    const frameLabel = introHero.querySelector(".design-frame b");

    if (designLine && buildLine) {
        // type into the translatable span so the language switch keeps working
        const buildTarget = buildLine.querySelector("[data-i18n]") || buildLine;
        const buildText = buildTarget.textContent;
        const caret = document.createElement("span");
        caret.className = "type-caret";
        caret.setAttribute("aria-hidden", "true");
        buildTarget.textContent = "";
        buildLine.append(caret);

        introHero.classList.add("is-animating");

        const timers = [];
        const at = (ms, fn) => timers.push(setTimeout(fn, ms));
        const step = (name) => introHero.classList.add(name);
        const typeSpeed = 70;
        const allSteps = ["role-in", "think-sketch", "think-fill", "design-select", "design-fill", "design-done", "intro-in", "build-done"];

        at(50, () => step("role-in"));
        at(150, () => step("think-sketch"));
        at(1000, () => step("think-fill"));
        at(1300, () => {
            if (frameLabel) {
                const { width, height } = designLine.getBoundingClientRect();
                frameLabel.textContent = `${Math.round(width)} × ${Math.round(height)}`;
            }
            step("design-select");
        });
        at(2000, () => step("design-fill"));
        at(2400, () => {
            step("design-done");
            [...buildText].forEach((char, i) => {
                at(i * typeSpeed, () => {
                    buildTarget.textContent += char;
                });
            });
            at(buildText.length * typeSpeed + 100, () => step("intro-in"));
            at(buildText.length * typeSpeed + 600, () => step("build-done"));
        });

        // switching language mid-intro: jump straight to the end state
        document.addEventListener("languagechange", () => {
            timers.forEach(clearTimeout);
            allSteps.forEach(step);
        });
    }
}

// Hero "design canvas": the grid cell under the cursor gets a selection
// outline with handles, leaves a fading trail of orange squares and shows
// its coordinates in a Figma-style label
const heroCanvas = document.getElementById("heroCanvas");
const heroCursorLabel = document.getElementById("heroCursorLabel");

if (heroCanvas && heroSection && window.matchMedia("(hover: hover)").matches) {
    const ctx = heroCanvas.getContext("2d");
    const CELL = 64;
    const FADE_MS = 900;
    const HANDLE = 5;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const trail = new Map();
    let current = null;
    let frame = null;

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        const { width, height } = heroSection.getBoundingClientRect();
        heroCanvas.width = Math.round(width * dpr);
        heroCanvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        requestDraw();
    };

    const draw = () => {
        frame = null;
        const now = performance.now();
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

        trail.forEach((time, key) => {
            const alpha = 1 - (now - time) / FADE_MS;
            if (alpha <= 0) {
                trail.delete(key);
                return;
            }
            const [col, row] = key.split(",").map(Number);
            ctx.fillStyle = `rgba(255, 107, 0, ${alpha * 0.12})`;
            ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 1, CELL - 1);
        });

        if (current) {
            const x = current.col * CELL + 0.5;
            const y = current.row * CELL + 0.5;
            ctx.strokeStyle = "#ff6b00";
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, CELL, CELL);

            ctx.fillStyle = "#ffffff";
            [
                [x, y],
                [x + CELL, y],
                [x, y + CELL],
                [x + CELL, y + CELL],
            ].forEach(([hx, hy]) => {
                ctx.fillRect(hx - HANDLE / 2, hy - HANDLE / 2, HANDLE, HANDLE);
                ctx.strokeRect(hx - HANDLE / 2, hy - HANDLE / 2, HANDLE, HANDLE);
            });
        }

        if (trail.size) {
            requestDraw();
        }
    };

    function requestDraw() {
        if (!frame) {
            frame = requestAnimationFrame(draw);
        }
    }

    heroSection.addEventListener("pointermove", (event) => {
        const rect = heroSection.getBoundingClientRect();
        const col = Math.floor((event.clientX - rect.left) / CELL);
        const row = Math.floor((event.clientY - rect.top) / CELL);

        if (current && current.col === col && current.row === row) {
            return;
        }

        if (current && !reduceMotion) {
            trail.set(`${current.col},${current.row}`, performance.now());
        }
        current = { col, row };

        if (heroCursorLabel) {
            heroCursorLabel.textContent = `X ${col * CELL}  Y ${row * CELL}`;
            heroCursorLabel.style.transform = `translate(${col * CELL}px, ${(row + 1) * CELL + 8}px)`;
            heroCursorLabel.classList.add("is-visible");
        }

        requestDraw();
    });

    heroSection.addEventListener("pointerleave", () => {
        if (current && !reduceMotion) {
            trail.set(`${current.col},${current.row}`, performance.now());
        }
        current = null;
        heroCursorLabel?.classList.remove("is-visible");
        requestDraw();
    });

    new ResizeObserver(resize).observe(heroSection);
}

// "Ik ben een ..." rotating word carousel in the About section
const wordRotator = document.getElementById("wordRotator");

if (wordRotator) {
    const words = Array.from(wordRotator.querySelectorAll(".word"));
    let activeIndex = words.findIndex((word) => word.classList.contains("is-active"));
    if (activeIndex === -1) activeIndex = 0;

    if (words.length > 1) {
        setInterval(() => {
            const current = words[activeIndex];
            const nextIndex = (activeIndex + 1) % words.length;
            const next = words[nextIndex];

            current.classList.add("is-leaving");
            current.classList.remove("is-active");

            next.classList.add("is-active");

            setTimeout(() => {
                current.classList.remove("is-leaving");
            }, 500);

            activeIndex = nextIndex;
        }, 2400);
    }
}

// Count-up animation for the About stats, triggered once on scroll
const statNumbers = document.querySelectorAll(".stat-number[data-count]");

if (statNumbers.length) {
    const animateCount = (element) => {
        const target = parseInt(element.dataset.count, 10);
        const suffix = element.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.6 }
    );

    statNumbers.forEach((el) => statsObserver.observe(el));
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
