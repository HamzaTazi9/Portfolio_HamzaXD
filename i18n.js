// Language switcher (NL / EN / FR)
//
// Dutch is the source text and lives in the HTML. Every translatable element
// has data-i18n="key" (its innerHTML is swapped) and/or
// data-i18n-attr="attribute:key;attribute:key". English and French are below.
// The choice is remembered per visitor; the first visit follows the browser
// language when it is English or French.
(function () {
    const LANGS = ["nl", "en", "fr"];
    const STORAGE_KEY = "portfolio-lang";

    const translations = {
        en: {
        "life.eyebrow": "Beyond the screen",
        "life.title": "What<br />drives me",
        "life.intro": "Who I am when I'm not designing or coding — although I always end up back there.",
        "life.statement": "<span>Discipline</span> isn't a choice for me —<br />it's a must.",
        "life.i1.t": "Experimenting",
        "life.i1.d": "New tools, new ideas: I'd rather try something out than think about it forever.",
        "life.i2.t": "Sport & fitness",
        "life.i2.d": "Training keeps my mind sharp. The gym teaches me what I apply to my work too: a little better every day.",
        "life.i3.t": "Challenges",
        "life.i3.d": "I like to seek out challenges, big or small. That's where I learn the most.",
        "life.i4.t": "Series & films",
        "life.i4.d": "Strong stories and beautiful visuals: that's often where my inspiration comes from.",
        "life.i5.t": "Designing & developing",
        "life.i5.d": "Outside of school too. Building minimal, interactive things doesn't feel like work to me — it's fun.",
        "life.i6.t": "Humour",
        "life.i6.d": "Serious work, but not too serious. A good joke makes every team better.",
        "meta.home.title": "Hamza — UX designer & front-end developer",
        "meta.home.desc": "Portfolio of Hamza, UX designer and front-end developer, looking for an internship and new collaborations. From research and design to a working website.",
        "nav.cta": "Let's talk",
        "nav.contact": "Contact",
        "hero.think": "Think it.",
        "hero.design": "Design it.",
        "hero.build": "Build it.",
        "hero.aria": "Think it. Design it. Build it.",
        "hero.sub": "I'm Hamza — <strong>designer and developer</strong>. I design digital products and then build them myself, from first research to a working website.",
        "hero.cta": "View my work →",
        "hero.contact": "Get in touch",
        "hero.status": "Looking for an internship and new collaborations",
        "work.eyebrow": "Selected work",
        "work.title": "Featured projects",
        "work.intro": "Three projects that show my approach, research and visual choices — from first idea to working website.",
        "work.next.desc": "Website for a day programme for young people who are (temporarily) stuck at school — warm, calm and clear for young people, parents and professionals.",
        "status.live": "Live",
        "work.next.alt": "NEXT website homepage",
        "work.sitr.desc": "Website and visual identity for clothing brand SITR. This case study is in progress.",
        "work.s4y.desc": "Interface and user experience for the S4Y platform. This case study is in progress.",
        "status.soon": "Coming soon",
        "tag.platform": "Platform",
        "work.more.title": "More projects on the way",
        "work.more.desc": "I'm working on new projects. More work will appear here soon.",
        "status.progress": "In progress",
        "skills.title": "From idea to<br />working website",
        "skills.intro": "My skills follow the same process as my work: first understand, then design, then build.",
        "skills.think.label": "01 — UX Research",
        "skills.design.label": "02 — UI / UX Design",
        "skills.build.label": "03 — Development",
        "skills.think.word": "Think.",
        "skills.design.word": "Design.",
        "skills.build.word": "Build.",
        "skills.think.desc": "Understanding who I design for and why — before a single pixel exists.",
        "skills.design.desc": "Turning ideas into clear flows, wireframes and polished interfaces.",
        "skills.build.desc": "Hand-coding the design into a fast, working website.",
        "about.lead": "I'm a",
        "about.w1": "UX designer",
        "about.w2": "front-end developer",
        "about.w3": "problem solver",
        "about.w4": "detail fanatic",
        "about.p1": "My journey started with a simple fascination: why do some apps and websites feel effortless, and others don't? That took me from research and wireframes to HTML, CSS and JavaScript — because a good idea only counts <strong>when it actually works</strong>.",
        "about.p2": "As a <strong>designer and developer</strong>, I combine user research and creative thinking with technical skills. I don't have to hand a design over to someone else: I build it myself, so what you see in Figma is exactly what goes online. I'm currently growing my studies and portfolio with sharp, well-considered case studies.",
        "stats.years": "Years of study",
        "stats.live": "Live website",
        "about.pr1.t": "User first",
        "about.pr1.d": "Every decision starts with who I'm designing for and what that person needs.",
        "about.pr2.t": "Design that works",
        "about.pr2.d": "A design is only finished when it's built, loads fast and works on every screen.",
        "about.pr3.t": "Details make it",
        "about.pr3.d": "Small things like white space, microcopy and animation shape how something feels.",
        "contact.status": "Open to internships",
        "contact.title": "Let's work<br />together",
        "contact.intro": "I'm looking for an <strong>internship</strong> and I'm open to <strong>collaborations</strong> with people who want to make something. Got a position, a project or an idea? Feel free to send me a message.",
        "contact.email": "Email",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.skills": "Skills",
        "footer.top": "Back to top",
        "meta.next.title": "NEXT — Hamza",
        "meta.next.desc": "Case study: website for NEXT, a day programme for young people aged 13 to 19. Designed and built by Hamza.",
        "nav.back": "← All projects",
        "case.eyebrow": "Case study",
        "case.discipline": "Discipline",
        "case.back": "Back to portfolio",
        "case.next": "Next",
        "next.lead1": "NEXT is a practical day programme for young people aged 13 to 19 who are (temporarily) stuck at school or at home. They help young people rebuild rhythm, structure and self-confidence, so they can take the step back to school, work or training.",
        "next.lead2": "For NEXT, <strong>I designed and built the entire website</strong>. The site explains in plain language what NEXT does and how to sign up — for young people themselves, for their parents and for professionals who want to refer a young person.",
        "next.live": "View the live website →",
        "case.role": "Role",
        "case.built": "Built with",
        "case.website": "Website",
        "status.dev": "In development",
        "next.alt": "Homepage of the NEXT website",
        "next.ch1": "The brief",
        "next.ch1.body": "NEXT needed a website that speaks to <strong>three audiences at once</strong>, with a calm, warm look that builds trust immediately. Young people who are stuck should feel welcome — not watched.",
        "next.ch2": "Who it's for",
        "next.aud1": "Young people",
        "next.aud1.d": "Need to feel welcome right away, without long texts or barriers.",
        "next.aud2": "Parents",
        "next.aud2.d": "Want to quickly understand what NEXT does and whether it suits their child.",
        "next.aud3": "Professionals",
        "next.aud3.d": "Look for clear information about how it works and how to sign up.",
        "next.ch3": "What I built",
        "next.ch3.p1": "The entire website is <strong>hand-coded in HTML, CSS and JavaScript</strong> — no page builder, no framework. HTML for a semantic structure, CSS for layout, animation and the visual design, JavaScript for interaction and navigation.",
        "next.ch3.p2": "Alongside the public site, I built a <strong>custom admin area</strong>, so the NEXT team can add and edit content and activities themselves — without needing a developer every time.",
        "next.ch4": "The process",
        "next.ch4.p": "I worked out the entire design process in <strong>Figma</strong>. I'm now turning that process into a full case study — this part is coming soon.",
        "case.soon": "Coming soon",
        "next.s1": "Research",
        "next.s1.d": "What I researched and why",
        "next.s2": "Personas",
        "next.s2.d": "Who I designed for",
        "next.s3": "User interviews",
        "next.s3.d": "What users told me",
        "next.s4": "Usability testing",
        "next.s4.d": "What I tested and changed",
        "next.s5": "Figma screens",
        "next.s5.d": "From wireframe to final design",
        "next.nextdesc": "Branding and web design — case study coming soon.",
        "meta.sitr.title": "SITR — Hamza",
        "meta.sitr.desc": "Case study in progress: website and visual identity for clothing brand SITR.",
        "sitr.lead": "I'm currently working on the case study for SITR, a clothing brand for which I'm creating the <strong>website and visual identity</strong>. Soon you'll be able to read the full story here: from first ideas and moodboards to the final design and the built website.",
        "case.status": "Status",
        "sitr.nextdesc": "UX/UI for a platform — case study coming soon.",
        "meta.s4y.title": "S4Y — Hamza",
        "meta.s4y.desc": "Case study in progress: interface and user experience for the S4Y platform.",
        "s4y.lead": "I'm currently working on the case study for S4Y, a platform for which I'm designing the <strong>interface and user experience</strong>. Soon you'll be able to read the full process here: from research and structure to the finished screens.",
        "s4y.discipline": "UX/UI, platform",
        "s4y.nextdesc": "Website for a day programme for young people — live.",
        },
        fr: {
        "life.eyebrow": "Hors de l'écran",
        "life.title": "Ce qui<br />me motive",
        "life.intro": "Qui je suis quand je ne conçois pas et ne code pas — même si j'y reviens toujours.",
        "life.statement": "La <span>discipline</span> n'est pas un choix pour moi —<br />c'est une nécessité.",
        "life.i1.t": "Expérimenter",
        "life.i1.d": "Nouveaux outils, nouvelles idées : je préfère essayer quelque chose plutôt que d'y réfléchir sans fin.",
        "life.i2.t": "Sport & fitness",
        "life.i2.d": "L'entraînement garde mon esprit affûté. À la salle, j'apprends ce que j'applique aussi à mon travail : un peu mieux chaque jour.",
        "life.i3.t": "Défis",
        "life.i3.d": "J'aime relever des défis, petits ou grands. C'est là que j'apprends le plus.",
        "life.i4.t": "Séries & films",
        "life.i4.d": "De belles histoires et des images fortes : c'est souvent là que je trouve l'inspiration.",
        "life.i5.t": "Design & développement",
        "life.i5.d": "Aussi en dehors de l'école. Créer du minimaliste et de l'interactif n'est pas un travail pour moi, c'est un plaisir.",
        "life.i6.t": "Humour",
        "life.i6.d": "Un travail sérieux, mais pas trop. Une bonne blague rend chaque équipe meilleure.",
        "hero.role.dev": "Développeur",
        "meta.home.title": "Hamza — designer UX & développeur front-end",
        "meta.home.desc": "Portfolio de Hamza, designer UX et développeur front-end, à la recherche d'un stage et de nouvelles collaborations. De la recherche et du design jusqu'à un site web fonctionnel.",
        "nav.cta": "Parlons-en",
        "nav.contact": "Contact",
        "hero.think": "Pense-le.",
        "hero.design": "Conçois-le.",
        "hero.build": "Construis-le.",
        "hero.aria": "Pense-le. Conçois-le. Construis-le.",
        "hero.sub": "Je suis Hamza — <strong>designer et développeur</strong>. Je conçois des produits numériques puis je les développe moi-même, de la première recherche jusqu'à un site web fonctionnel.",
        "hero.cta": "Voir mes projets →",
        "hero.contact": "Me contacter",
        "hero.status": "À la recherche d'un stage et de nouvelles collaborations",
        "work.eyebrow": "Projets choisis",
        "work.title": "Projets à la une",
        "work.intro": "Trois projets qui montrent mon approche, ma recherche et mes choix visuels — de la première idée au site fonctionnel.",
        "work.next.desc": "Site web pour un accueil de jour destiné aux jeunes qui décrochent (temporairement) de l'école — chaleureux, calme et clair pour les jeunes, les parents et les professionnels.",
        "status.live": "En ligne",
        "work.next.alt": "Page d'accueil du site NEXT",
        "work.sitr.desc": "Site web et identité visuelle pour la marque de vêtements SITR. Cette étude de cas est en cours.",
        "work.s4y.desc": "Interface et expérience utilisateur pour la plateforme S4Y. Cette étude de cas est en cours.",
        "status.soon": "Bientôt",
        "tag.platform": "Plateforme",
        "work.more.title": "D'autres projets arrivent",
        "work.more.desc": "Je travaille sur de nouveaux projets. D'autres réalisations arriveront bientôt ici.",
        "status.progress": "En cours",
        "skills.title": "De l'idée au<br />site fonctionnel",
        "skills.intro": "Mes compétences suivent le même processus que mon travail : d'abord comprendre, puis concevoir, puis construire.",
        "skills.think.label": "01 — Recherche UX",
        "skills.design.label": "02 — Design UI / UX",
        "skills.build.label": "03 — Développement",
        "skills.think.word": "Pense.",
        "skills.design.word": "Conçois.",
        "skills.build.word": "Construis.",
        "skills.think.desc": "Comprendre pour qui je conçois et pourquoi — avant le moindre pixel.",
        "skills.design.desc": "Traduire des idées en parcours clairs, wireframes et interfaces abouties.",
        "skills.build.desc": "Transformer le design, codé à la main, en un site rapide et fonctionnel.",
        "about.lead": "Je suis un",
        "about.w1": "designer UX",
        "about.w2": "développeur front-end",
        "about.w3": "résolveur de problèmes",
        "about.w4": "perfectionniste",
        "about.p1": "Mon parcours a commencé par une simple fascination : pourquoi certaines applications et certains sites semblent-ils si fluides, et d'autres non ? Cela m'a mené de la recherche et des wireframes au HTML, CSS et JavaScript — parce qu'une bonne idée ne compte <strong>que si elle fonctionne vraiment</strong>.",
        "about.p2": "En tant que <strong>designer et développeur</strong>, j'associe la recherche utilisateur et la pensée créative à des compétences techniques. Je n'ai pas besoin de confier un design à quelqu'un d'autre : je le développe moi-même, pour que ce que vous voyez dans Figma soit exactement ce qui est en ligne. Je poursuis actuellement mes études et enrichis mon portfolio avec des études de cas précises et réfléchies.",
        "stats.years": "Années d'études",
        "stats.live": "Site en ligne",
        "about.pr1.t": "L'utilisateur d'abord",
        "about.pr1.d": "Chaque choix commence par une question : pour qui je conçois et de quoi cette personne a besoin.",
        "about.pr2.t": "Un design qui fonctionne",
        "about.pr2.d": "Un design n'est terminé que lorsqu'il est développé, se charge vite et fonctionne sur tous les écrans.",
        "about.pr3.t": "Les détails font la différence",
        "about.pr3.d": "De petites choses comme l'espace blanc, le microcopy et l'animation définissent le ressenti.",
        "contact.status": "Ouvert aux stages",
        "contact.title": "Travaillons<br />ensemble",
        "contact.intro": "Je suis à la recherche d'un <strong>stage</strong> et ouvert aux <strong>collaborations</strong> avec des personnes qui veulent créer quelque chose. Vous avez une place, un projet ou une idée ? N'hésitez pas à m'écrire.",
        "contact.email": "E-mail",
        "nav.projects": "Projets",
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "footer.top": "Retour en haut",
        "meta.next.title": "NEXT — Hamza",
        "meta.next.desc": "Étude de cas : site web pour NEXT, un accueil de jour pour les jeunes de 13 à 19 ans. Conçu et développé par Hamza.",
        "nav.back": "← Tous les projets",
        "case.eyebrow": "Étude de cas",
        "case.discipline": "Discipline",
        "case.back": "Retour au portfolio",
        "case.next": "Suivant",
        "next.lead1": "NEXT est un accueil de jour pratique pour les jeunes de 13 à 19 ans qui décrochent (temporairement) à l'école ou à la maison. L'équipe les aide à retrouver un rythme, une structure et la confiance en eux, afin qu'ils puissent reprendre l'école, un travail ou une formation.",
        "next.lead2": "Pour NEXT, <strong>j'ai conçu et développé l'intégralité du site</strong>. Le site explique dans un langage clair ce que fait NEXT et comment s'inscrire — pour les jeunes eux-mêmes, pour leurs parents et pour les professionnels qui souhaitent orienter un jeune.",
        "next.live": "Voir le site en ligne →",
        "case.role": "Rôle",
        "case.built": "Développé avec",
        "case.website": "Site web",
        "status.dev": "En développement",
        "next.alt": "Page d'accueil du site NEXT",
        "next.ch1": "La mission",
        "next.ch1.body": "NEXT avait besoin d'un site qui s'adresse à <strong>trois publics à la fois</strong>, avec une ambiance calme et chaleureuse qui inspire immédiatement confiance. Les jeunes en difficulté doivent se sentir bienvenus — pas observés.",
        "next.ch2": "Pour qui",
        "next.aud1": "Les jeunes",
        "next.aud1.d": "Doivent se sentir bienvenus tout de suite, sans longs textes ni obstacles.",
        "next.aud2": "Les parents",
        "next.aud2.d": "Veulent comprendre rapidement ce que fait NEXT et si cela convient à leur enfant.",
        "next.aud3": "Les professionnels",
        "next.aud3.d": "Cherchent des informations claires sur le fonctionnement et l'inscription.",
        "next.ch3": "Ce que j'ai développé",
        "next.ch3.p1": "L'intégralité du site est <strong>codée à la main en HTML, CSS et JavaScript</strong> — sans page builder ni framework. Le HTML pour une structure sémantique, le CSS pour la mise en page, l'animation et le design visuel, le JavaScript pour l'interaction et la navigation.",
        "next.ch3.p2": "En plus du site public, j'ai développé un <strong>espace d'administration sur mesure</strong>, pour que l'équipe de NEXT puisse ajouter et modifier elle-même le contenu et l'offre — sans avoir besoin d'un développeur à chaque fois.",
        "next.ch4": "Le processus",
        "next.ch4.p": "J'ai réalisé tout le processus de design dans <strong>Figma</strong>. Je le transforme actuellement en une étude de cas complète — cette partie arrive bientôt.",
        "case.soon": "Bientôt disponible",
        "next.s1": "Recherche",
        "next.s1.d": "Ce que j'ai étudié et pourquoi",
        "next.s2": "Personas",
        "next.s2.d": "Pour qui j'ai conçu",
        "next.s3": "Entretiens utilisateurs",
        "next.s3.d": "Ce que les utilisateurs m'ont dit",
        "next.s4": "Tests d'utilisabilité",
        "next.s4.d": "Ce que j'ai testé et ajusté",
        "next.s5": "Écrans Figma",
        "next.s5.d": "Du wireframe au design final",
        "next.nextdesc": "Branding et web design — étude de cas bientôt disponible.",
        "meta.sitr.title": "SITR — Hamza",
        "meta.sitr.desc": "Étude de cas en cours : site web et identité visuelle pour la marque de vêtements SITR.",
        "sitr.lead": "Je travaille actuellement sur l'étude de cas de SITR, une marque de vêtements pour laquelle je crée le <strong>site web et l'identité visuelle</strong>. Vous pourrez bientôt lire ici toute l'histoire : des premières idées et moodboards jusqu'au design final et au site développé.",
        "case.status": "Statut",
        "sitr.nextdesc": "UX/UI pour une plateforme — étude de cas bientôt disponible.",
        "meta.s4y.title": "S4Y — Hamza",
        "meta.s4y.desc": "Étude de cas en cours : interface et expérience utilisateur pour la plateforme S4Y.",
        "s4y.lead": "Je travaille actuellement sur l'étude de cas de S4Y, une plateforme dont je conçois l'<strong>interface et l'expérience utilisateur</strong>. Vous pourrez bientôt découvrir ici tout le processus : de la recherche et de la structure jusqu'aux écrans finalisés.",
        "s4y.discipline": "UX/UI, plateforme",
        "s4y.nextdesc": "Site web pour un accueil de jour pour jeunes — en ligne.",
        },
    };

    const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
    const attrNodes = Array.from(document.querySelectorAll("[data-i18n-attr]"));
    const buttons = Array.from(document.querySelectorAll(".lang-switch [data-lang]"));

    // keep the Dutch originals so switching back needs no dictionary
    const originalText = new Map(textNodes.map((el) => [el, el.innerHTML]));
    const originalAttrs = new Map(
        attrNodes.map((el) => [
            el,
            el.dataset.i18nAttr.split(";").filter(Boolean).map((pair) => {
                const [name, key] = pair.split(":");
                return { name, key, value: el.getAttribute(name) };
            }),
        ])
    );

    let current = "nl";

    function apply(lang) {
        const dict = translations[lang] || {};

        textNodes.forEach((el) => {
            const value = lang === "nl" ? undefined : dict[el.dataset.i18n];
            el.innerHTML = value ?? originalText.get(el);
        });

        attrNodes.forEach((el) => {
            originalAttrs.get(el).forEach(({ name, key, value }) => {
                const translated = lang === "nl" ? undefined : dict[key];
                el.setAttribute(name, translated ?? value);
            });
        });

        document.documentElement.lang = lang;
        buttons.forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
        });

        const changed = lang !== current;
        current = lang;
        if (changed) {
            document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
        }
    }

    function save(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // storage can be unavailable (private mode); the switch still works
        }
    }

    function initialLanguage() {
        const fromUrl = new URLSearchParams(window.location.search).get("lang");
        if (LANGS.includes(fromUrl)) {
            return fromUrl;
        }

        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (LANGS.includes(saved)) {
                return saved;
            }
        } catch (error) {
            // ignore and fall back to the browser language
        }

        const browser = (navigator.language || "nl").slice(0, 2).toLowerCase();
        return browser === "en" || browser === "fr" ? browser : "nl";
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            apply(button.dataset.lang);
            save(button.dataset.lang);
        });
    });

    const start = initialLanguage();
    if (start !== "nl") {
        apply(start);
    }

    window.portfolioLanguage = () => current;
})();
