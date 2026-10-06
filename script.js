const progressBar = document.getElementById("progressBar");
const navbar = document.getElementById("navbar");
const heroSection = document.getElementById("hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;

    if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
    }

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 100);
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        if (href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Spotlight follows the cursor in the hero
if (heroSection) {
    heroSection.addEventListener("pointermove", (event) => {
        const rect = heroSection.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        heroSection.style.setProperty("--spot-x", `${x}%`);
        heroSection.style.setProperty("--spot-y", `${y}%`);
    });
}

// Logo frame: animate on a new visit or refresh, not when clicking
// between pages of the site
const logoFrame = document.querySelector("#navbar .logo-kader");

if (logoFrame) {
    const navigation = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigation && navigation.type === "reload";
    const fromThisSite = location.host !== "" && document.referrer.includes(location.host);

    if (!reduceMotion && (isRefresh || !fromThisSite)) {
        logoFrame.classList.add("is-animating");
    } else {
        logoFrame.classList.add("is-static");
    }
}

// Section header lines draw in when they scroll into view
const headLines = document.querySelectorAll(".sectie-kop-boven");

if (!reduceMotion) {
    const headLineObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("getekend");
                    headLineObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -15% 0px" }
    );

    headLines.forEach((line) => {
        line.classList.add("nog-tekenen");
        line.insertAdjacentHTML(
            "beforeend",
            '<i class="lijn-hoekje lijn-hoekje-begin" aria-hidden="true"></i>' +
                '<i class="lijn-hoekje lijn-hoekje-eind" aria-hidden="true"></i>'
        );
        headLineObserver.observe(line);
    });
}

// Hero intro: think -> design -> build, each step adds a class to #hero
// and the CSS does the animation
const designLine = document.querySelector('#hero [data-stage="design"] .regel-tekst');
const buildLine = document.querySelector('#hero [data-stage="build"] .regel-tekst');

if (designLine && buildLine && !reduceMotion) {
    const frameLabel = heroSection.querySelector(".ontwerp-kader b");
    // type into the span with data-i18n so the language switch still works
    const buildTarget = buildLine.querySelector("[data-i18n]") || buildLine;
    const buildText = buildTarget.textContent;
    buildTarget.textContent = "";
    buildLine.insertAdjacentHTML("beforeend", '<span class="typ-cursor" aria-hidden="true"></span>');

    heroSection.classList.add("is-animating");

    const steps = [
        [50, "role-in"],
        [150, "think-sketch"],
        [1000, "think-fill"],
        [1300, "design-select"],
        [2000, "design-fill"],
        [2400, "design-done"],
    ];
    const typeSpeed = 70;
    const typeEnd = 2400 + buildText.length * typeSpeed;
    steps.push([typeEnd + 100, "intro-in"], [typeEnd + 600, "build-done"]);

    // show the size of "Ontwerp het." in the selection frame, measured just
    // before the frame appears
    const timers = [
        setTimeout(() => {
            if (frameLabel) {
                const { width, height } = designLine.getBoundingClientRect();
                frameLabel.textContent = `${Math.round(width)} × ${Math.round(height)}`;
            }
        }, 1300),
    ];

    steps.forEach(([ms, name]) => {
        timers.push(setTimeout(() => heroSection.classList.add(name), ms));
    });

    // type "Bouw het." letter by letter
    [...buildText].forEach((char, i) => {
        timers.push(setTimeout(() => (buildTarget.textContent += char), 2400 + i * typeSpeed));
    });

    // switching language mid-intro: skip to the end
    document.addEventListener("languagechange", () => {
        timers.forEach(clearTimeout);
        steps.forEach(([, name]) => heroSection.classList.add(name));
    });
}

// Hero grid: the cell under the cursor gets an orange outline, the cells
// you leave fade out, and a label shows the X/Y position
const heroCanvas = document.getElementById("heroTekenvlak");
const heroCursorLabel = document.getElementById("heroPositie");

if (heroCanvas && heroSection && window.matchMedia("(hover: hover)").matches) {
    const ctx = heroCanvas.getContext("2d");
    const CELL = 64;
    const FADE_MS = 900;
    const HANDLE = 5;
    let trail = []; // cells you left: { col, row, time }
    let current = null; // cell under the cursor: { col, row }
    let frame = null;

    // only one draw per animation frame
    const requestDraw = () => {
        if (!frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        heroCanvas.width = heroSection.offsetWidth * dpr;
        heroCanvas.height = heroSection.offsetHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        requestDraw();
    };

    const draw = () => {
        frame = null;
        const now = performance.now();
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

        // fading trail
        trail = trail.filter((cell) => now - cell.time < FADE_MS);
        trail.forEach((cell) => {
            const alpha = 1 - (now - cell.time) / FADE_MS;
            ctx.fillStyle = `rgba(255, 107, 0, ${alpha * 0.12})`;
            ctx.fillRect(cell.col * CELL + 1, cell.row * CELL + 1, CELL - 1, CELL - 1);
        });

        // outline + four corner handles
        if (current) {
            const x = current.col * CELL + 0.5;
            const y = current.row * CELL + 0.5;
            ctx.strokeStyle = "#ff6b00";
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, CELL, CELL);

            ctx.fillStyle = "#ffffff";
            for (const hx of [x, x + CELL]) {
                for (const hy of [y, y + CELL]) {
                    ctx.fillRect(hx - HANDLE / 2, hy - HANDLE / 2, HANDLE, HANDLE);
                    ctx.strokeRect(hx - HANDLE / 2, hy - HANDLE / 2, HANDLE, HANDLE);
                }
            }
        }

        // keep drawing until the trail has faded
        if (trail.length) {
            requestDraw();
        }
    };

    const leaveCell = () => {
        if (current && !reduceMotion) {
            trail.push({ ...current, time: performance.now() });
        }
    };

    heroSection.addEventListener("pointermove", (event) => {
        const rect = heroSection.getBoundingClientRect();
        const col = Math.floor((event.clientX - rect.left) / CELL);
        const row = Math.floor((event.clientY - rect.top) / CELL);

        if (current && current.col === col && current.row === row) return;

        leaveCell();
        current = { col, row };

        if (heroCursorLabel) {
            heroCursorLabel.textContent = `X ${col * CELL}  Y ${row * CELL}`;
            heroCursorLabel.style.transform = `translate(${col * CELL}px, ${(row + 1) * CELL + 8}px)`;
            heroCursorLabel.classList.add("is-visible");
        }

        requestDraw();
    });

    heroSection.addEventListener("pointerleave", () => {
        leaveCell();
        current = null;
        if (heroCursorLabel) heroCursorLabel.classList.remove("is-visible");
        requestDraw();
    });

    new ResizeObserver(resize).observe(heroSection);
}

// "Ik ben een ..." rotating words in the About section
const words = document.querySelectorAll("#woordenWissel .woord");
let activeIndex = 0;

if (words.length > 1) {
    setInterval(() => {
        const current = words[activeIndex];
        activeIndex = (activeIndex + 1) % words.length;
        const next = words[activeIndex];

        current.classList.remove("is-active");
        current.classList.add("is-leaving");
        next.classList.add("is-active");

        setTimeout(() => current.classList.remove("is-leaving"), 500);
    }, 2400);
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
