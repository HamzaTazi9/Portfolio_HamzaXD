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
      "life.intro":
        "Who I am when I'm not designing or coding — although I always end up back there.",
      "life.statement":
        "<span>Discipline</span> isn't a choice for me —<br />it's a must.",
      "life.i1.t": "Sport & fitness",
      "life.i1.d":
        "Training keeps my mind sharp. The gym teaches me what I apply to my work too: a little better every day.",
      "life.i2.t": "Challenges & experimenting",
      "life.i2.d":
        "I like to seek out challenges and would rather try new things than think about them forever.",
      "life.i3.t": "Series & films",
      "life.i3.d":
        "Strong stories and beautiful visuals: that's often where my inspiration comes from.",
      "life.i4.t": "Humour",
      "life.i4.d":
        "Serious work, but not too serious. A good joke makes every team better.",
      "meta.home.title": "Hamza — UX designer & front-end developer",
      "meta.home.desc":
        "Portfolio of Hamza, UX designer and front-end developer, looking for an internship and new collaborations. From research and design to a working website.",
      "nav.cta": "Let's talk",
      "nav.contact": "Contact",
      "hero.think": "Think it.",
      "hero.design": "Design it.",
      "hero.build": "Build it.",
      "hero.aria": "Think it. Design it. Build it.",
      "hero.sub":
        "I'm Hamza — <strong>designer and developer</strong>. I design digital products and then build them myself, from first research to a working website.",
      "hero.cta": "View my work →",
      "hero.contact": "Get in touch",
      "hero.status": "Looking for an internship and new collaborations",
      "work.intro.featured":
        "A selection of my work: three projects that show my approach, research and visual choices.",
      "work.all":
        "View all projects →",
      "work.all.eyebrow":
        "All projects",
      "work.all.title":
        "All my projects",
      "nav.home":
        "← Home",
      "meta.projects.title":
        "Projects — Hamza",
      "meta.projects.desc":
        "All projects by Hamza, UX designer and front-end developer: from first idea to working website.",
      "work.eyebrow": "Selected work",
      "work.title": "Featured projects",
      "work.intro":
        "Five projects that show my approach, research and visual choices — from first idea to working website.",
      "work.next.desc":
        "Website for a day programme for young people who are (temporarily) stuck at school — warm, calm and clear for young people, parents and professionals.",
      "status.live": "Live",
      "work.next.alt": "NEXT website homepage",
      "work.sitr.desc": "Website and visual identity for clothing brand SITR.",
      "work.s4y.desc": "Interface and user experience for the S4Y platform.",
      "status.soon": "Coming soon",
      "tag.platform": "Platform",
      "work.more.title": "More projects on the way",
      "work.more.desc":
        "I'm working on new projects. More work will appear here soon.",
      "status.progress": "In progress",
      "skills.title": "From idea to<br />working website",
      "skills.intro":
        "My skills follow the same process as my work: first understand, then design, then build.",
      "skills.think.label": "01 — UX Research",
      "skills.design.label": "02 — UI / UX Design",
      "skills.build.label": "03 — Development",
      "skills.think.word": "Think.",
      "skills.design.word": "Design.",
      "skills.build.word": "Build.",
      "skills.think.desc":
        "Understanding who I design for and why — before a single pixel exists.",
      "skills.design.desc":
        "Turning ideas into clear flows, wireframes and polished interfaces.",
      "skills.build.desc":
        "Hand-coding the design into a fast, working website.",
      "about.lead": "I'm a",
      "about.w1": "UX designer",
      "about.w2": "front-end developer",
      "about.w3": "problem solver",
      "about.w4": "detail fanatic",
      "about.p1":
        "I'm <strong>Hamza Tazi</strong>, a third-year <strong>Digital Experience Design</strong> student at Thomas More in Mechelen. I design digital products and then build them myself.",
      "about.p2":
        "In secondary school I studied <strong>Human Sciences</strong>. That's where I learned to look at how people think and behave — and I bring that into every design. Because a good idea only counts <strong>when it actually works</strong> for the people who use it.",
      "about.now":
        "Now",
      "about.now.t":
        "3rd year Digital Experience Design",
      "about.now.school":
        "Thomas More, Mechelen",
      "about.now.d":
        "Looking for an internship",
      "about.before":
        "Secondary school",
      "about.before.t":
        "Human Sciences (general secondary)",
      "about.before.d":
        "Psychology, sociology and cultural studies",
      "contact.status": "Open to internships",
      "contact.title": "Let's work<br />together",
      "contact.intro":
        "I'm looking for an <strong>internship</strong> and I'm open to <strong>collaborations</strong> with people who want to make something. Got a position, a project or an idea? Feel free to send me a message.",
      "contact.email": "Email",
      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.skills": "Skills",
      "footer.top": "Back to top",
      "meta.next.title": "NEXT — Hamza",
      "meta.next.desc":
        "Case study: website for NEXT, a day programme for young people aged 13 to 19. Designed and built by Hamza.",
      "nav.back": "← All projects",
      "case.eyebrow": "Case study",
      "case.discipline": "Discipline",
      "case.back": "Back to portfolio",
      "case.next": "Next",
      "case.storage":
        "Storage",
      "case.type":
        "Type",
      "case.focus":
        "Focus",
      "case.allprojects":
        "All projects",
      "case.allprojects.d":
        "Take a look at the other projects in my portfolio.",
      "case.backlabel":
        "Back",
      "ht.lead1":
        "A habit tracker for students who want more rhythm and overview in their daily habits.",
      "ht.lead2":
        "The challenge: turning a familiar everyday problem into a <strong>calm interface</strong> you can use straight away — no explanation, no pressure.",
      "ht.open":
        "Open the habit tracker →",
      "ht.disc":
        "Web design, interaction",
      "ht.cap1":
        "Habits: check off, streaks and daily progress",
      "ht.cap2":
        "Schedule: classes and activities per day",
      "ht.alt1":
        "Habit Tracker: habit overview with checked tasks, streaks and a progress bar",
      "ht.alt2":
        "Habit Tracker: daily schedule with classes and activities",
      "ht.ch1":
        "The idea",
      "ht.ch2":
        "Design choices",
      "ht.ch3":
        "What I built",
      "ht.ch4":
        "What I learned",
      "ht.ch1.p":
        "Habits should be simple: <strong>add, check off and instantly see how you're doing</strong>. Nothing more.",
      "ht.ch2.p":
        "I chose a <strong>soft colour palette</strong> and one clear action per habit: checking it off. Streaks and a 7-day history give <strong>motivation without pressure</strong>, and the progress bar shows at a glance how your day is going.",
      "ht.ch3.p":
        "Habits with streaks, daily progress, search and inline editing, plus a <strong>weekly schedule</strong> for classes and activities. Everything is saved in LocalStorage, even after a refresh.",
      "ht.ch4.p":
        "Because I made both the design and the code, I could test ideas right away. I learned how much <strong>small interactions</strong> matter: clear feedback, good empty states and data that stays put.",
      "mt.eyebrow":
        "Figma project",
      "mt.lead1":
        "A movie list for a cinema, designed in Figma during my first year.",
      "mt.lead2":
        "My first design project: this is where I practised <strong>screen layout, typography and colour</strong>, and tested how animations and a prototype bring an interface to life.",
      "mt.open":
        "View the Figma project →",
      "mt.type":
        "School project, 1st year",
      "mt.focus":
        "Movie list, visual design",
      "mt.status":
        "Figma file",
      "mt.ch1":
        "The brief",
      "mt.ch2":
        "Design choices",
      "mt.ch3":
        "What I learned",
      "mt.ch1.p":
        "Design a simple list of films for a cinema, with <strong>clear information</strong> and a strong first impression.",
      "mt.ch2.p":
        "A <strong>dark interface</strong> so the film posters do the work, one featured film per screen with a red glow, and a fixed bottom navigation within thumb reach.",
      "mt.ch3.p":
        "I learned to work with frames, components and prototypes in Figma, and saw how <strong>small choices in spacing, typography and colour</strong> make an interface clearer.",
      "next.lead1":
        "NEXT is a practical day programme for young people aged 13 to 19 who are (temporarily) stuck at school or at home. They help young people rebuild rhythm, structure and self-confidence, so they can take the step back to school, work or training.",
      "next.lead2":
        "For NEXT, <strong>I designed and built the entire website</strong>. The site explains in plain language what NEXT does and how to sign up — for young people themselves, for their parents and for professionals who want to refer a young person.",
      "next.live": "View the live website →",
      "case.role": "Role",
      "case.built": "Built with",
      "case.website": "Website",
      "status.dev": "In development",
      "next.alt": "Homepage of the NEXT website",
      "next.ch1":
        "The brief",
      "next.ch1.body":
        "NEXT needed a website that speaks to <strong>three audiences</strong> at once and builds trust straight away. The biggest challenge: young people who are stuck should feel welcome, not watched.",
      "next.aud1":
        "Young people",
      "next.aud1.d":
        "Feel welcome straight away, without long texts.",
      "next.aud2":
        "Parents",
      "next.aud2.d":
        "Quickly understand what NEXT does.",
      "next.aud3":
        "Professionals",
      "next.aud3.d":
        "Clear information on how it works and how to sign up.",
      "next.look":
        "Look &amp; feel",
      "next.look.p1":
        "I started with a <strong>moodboard</strong> and a board full of reference websites. The feeling we were after: being outside, being together and daring to be yourself.",
      "next.look.p2":
        "The key idea: a <strong>looping yellow line</strong> that runs through the site like a route, with deliberately <strong>unaligned sections</strong>. Because life doesn't always run smoothly — it's a path you travel step by step.",
      "next.look.p3":
        "The brand sheet set the basics: <strong>golden yellow, green, cream and black</strong>, with Oswald for headings and Inter for text.",
      "next.mood.cap":
        "Moodboard",
      "next.insp.cap":
        "Inspiration &amp; references",
      "next.brand.cap":
        "Brand sheet",
      "next.mood.alt":
        "NEXT moodboard: young people outdoors, yellow handwritten accents and shades of green",
      "next.insp.alt":
        "Inspiration board with reference websites and notes on the yellow line, loose sections and handwritten quotes",
      "next.brand.alt":
        "NEXT brand sheet: yellow handwritten logo, Oswald and Inter, and the colours golden yellow, green, cream and black",
      "next.lowfi":
        "Wireframes",
      "next.lowfi.p":
        "For each page we sketched <strong>several low-fi variants</strong>, put them side by side and combined the strongest choices. That fixed the structure before we moved on to colour and detail.",
      "next.lowfi.alt":
        "NEXT low-fi wireframes with several variants per page: Home, About NEXT, For schools and CLB, Sign up, News and Contact",
      "next.hifi":
        "Prototype",
      "next.hifi.p":
        "The finished design in <strong>Figma</strong>. Click through the prototype yourself.",
      "next.ut":
        "User tests",
      "next.ut.p":
        "We tested the prototype with <strong>five users</strong>. The mood, the navigation and signing up worked well, and the team photos built trust. Still, four clear improvements came up:",
      "next.ut.seen":
        "What we saw",
      "next.ut.done":
        "What we changed",
      "next.ut.s1":
        "The core of NEXT wasn't clear right away: the images pulled attention away from the text.",
      "next.ut.c1":
        "A short, clear line at the top of the homepage: what NEXT does and for whom.",
      "next.ut.s2":
        "The word “programme” was too vague.",
      "next.ut.c2":
        "Page titles that say what you can do there.",
      "next.ut.s3":
        "Signing up was a small text link.",
      "next.ut.c3":
        "A permanent sign-up button in the navigation, and larger text.",
      "next.ut.s4":
        "The team, the strongest trust element, was hidden away.",
      "next.ut.c4":
        "The team more prominent on the homepage.",
      "next.ch3":
        "What I built",
      "next.ch3.p1":
        "I built the final design myself, <strong>hand-coded in HTML, CSS and JavaScript</strong> — no page builder or framework.",
      "next.ch3.p2":
        "I also built a <strong>custom admin area</strong>, so the NEXT team can update content themselves without a developer.",
      "case.soon": "Coming soon",
      "next.nextdesc": "Branding and web design — case study coming soon.",
      "meta.sitr.title": "SITR — Hamza",
      "meta.sitr.desc":
        "Case study in progress: website and visual identity for clothing brand SITR.",
      "sitr.lead":
        "I'm currently working on the case study for SITR, a clothing brand for which I'm creating the <strong>website and visual identity</strong>. Soon you'll be able to read the full story here: from first ideas and moodboards to the final design and the built website.",
      "case.status": "Status",
      "sitr.nextdesc": "UX/UI for a platform — case study coming soon.",
      "meta.s4y.title": "S4Y — Hamza",
      "meta.s4y.desc":
        "Case study in progress: interface and user experience for the S4Y platform.",
      "s4y.lead":
        "I'm currently working on the case study for S4Y, a platform for which I'm designing the <strong>interface and user experience</strong>. Soon you'll be able to read the full process here: from research and structure to the finished screens.",
      "s4y.discipline": "UX/UI, platform",
      "s4y.nextdesc": "Website for a day programme for young people — live.",
    },
    fr: {
      "life.eyebrow": "Hors de l'écran",
      "life.title": "Ce qui<br />me motive",
      "life.intro":
        "Qui je suis quand je ne conçois pas et ne code pas — même si j'y reviens toujours.",
      "life.statement":
        "La <span>discipline</span> n'est pas un choix pour moi —<br />c'est une nécessité.",
      "life.i1.t": "Sport & fitness",
      "life.i1.d":
        "L'entraînement garde mon esprit affûté. À la salle, j'apprends ce que j'applique aussi à mon travail : un peu mieux chaque jour.",
      "life.i2.t": "Défis & expérimentation",
      "life.i2.d":
        "J'aime relever des défis et je préfère essayer de nouvelles choses plutôt que d'y réfléchir sans fin.",
      "life.i3.t": "Séries & films",
      "life.i3.d":
        "De belles histoires et des images fortes : c'est souvent là que je trouve l'inspiration.",
      "life.i4.t": "Humour",
      "life.i4.d":
        "Un travail sérieux, mais pas trop. Une bonne blague rend chaque équipe meilleure.",
      "hero.role.dev": "Développeur",
      "meta.home.title": "Hamza — designer UX & développeur front-end",
      "meta.home.desc":
        "Portfolio de Hamza, designer UX et développeur front-end, à la recherche d'un stage et de nouvelles collaborations. De la recherche et du design jusqu'à un site web fonctionnel.",
      "nav.cta": "Parlons-en",
      "nav.contact": "Contact",
      "hero.think": "Pense-le.",
      "hero.design": "Conçois-le.",
      "hero.build": "Construis-le.",
      "hero.aria": "Pense-le. Conçois-le. Construis-le.",
      "hero.sub":
        "Je suis Hamza — <strong>designer et développeur</strong>. Je conçois des produits numériques puis je les développe moi-même, de la première recherche jusqu'à un site web fonctionnel.",
      "hero.cta": "Voir mes projets →",
      "hero.contact": "Me contacter",
      "hero.status": "À la recherche d'un stage et de nouvelles collaborations",
      "work.intro.featured":
        "Une sélection de mon travail : trois projets qui montrent mon approche, ma recherche et mes choix visuels.",
      "work.all":
        "Voir tous les projets →",
      "work.all.eyebrow":
        "Tous les projets",
      "work.all.title":
        "Tous mes projets",
      "nav.home":
        "← Accueil",
      "meta.projects.title":
        "Projets — Hamza",
      "meta.projects.desc":
        "Tous les projets de Hamza, UX designer et développeur front-end : de la première idée au site fonctionnel.",
      "work.eyebrow": "Projets choisis",
      "work.title": "Projets à la une",
      "work.intro":
        "Cinq projets qui montrent mon approche, ma recherche et mes choix visuels — de la première idée au site fonctionnel.",
      "work.next.desc":
        "Site web pour un accueil de jour destiné aux jeunes qui décrochent (temporairement) de l'école — chaleureux, calme et clair pour les jeunes, les parents et les professionnels.",
      "status.live": "En ligne",
      "work.next.alt": "Page d'accueil du site NEXT",
      "work.sitr.desc":
        "Site web et identité visuelle pour la marque de vêtements SITR.",
      "work.s4y.desc":
        "Interface et expérience utilisateur pour la plateforme S4Y.",
      "status.soon": "Bientôt",
      "tag.platform": "Plateforme",
      "work.more.title": "D'autres projets arrivent",
      "work.more.desc":
        "Je travaille sur de nouveaux projets. D'autres réalisations arriveront bientôt ici.",
      "status.progress": "En cours",
      "skills.title": "De l'idée au<br />site fonctionnel",
      "skills.intro":
        "Mes compétences suivent le même processus que mon travail : d'abord comprendre, puis concevoir, puis construire.",
      "skills.think.label": "01 — Recherche UX",
      "skills.design.label": "02 — Design UI / UX",
      "skills.build.label": "03 — Développement",
      "skills.think.word": "Pense.",
      "skills.design.word": "Conçois.",
      "skills.build.word": "Construis.",
      "skills.think.desc":
        "Comprendre pour qui je conçois et pourquoi — avant le moindre pixel.",
      "skills.design.desc":
        "Traduire des idées en parcours clairs, wireframes et interfaces abouties.",
      "skills.build.desc":
        "Transformer le design, codé à la main, en un site rapide et fonctionnel.",
      "about.lead": "Je suis un",
      "about.w1": "designer UX",
      "about.w2": "développeur front-end",
      "about.w3": "résolveur de problèmes",
      "about.w4": "perfectionniste",
      "about.p1":
        "Je suis <strong>Hamza Tazi</strong>, étudiant en troisième année de <strong>Digital Experience Design</strong> à Thomas More, à Malines. Je conçois des produits numériques, puis je les développe moi-même.",
      "about.p2":
        "Au secondaire, j'ai suivi l'option <strong>Sciences humaines</strong>. J'y ai appris à observer comment les gens pensent et agissent — et je l'intègre dans chaque design. Car une bonne idée ne compte <strong>que si elle fonctionne vraiment</strong> pour ceux qui l'utilisent.",
      "about.now":
        "Aujourd'hui",
      "about.now.t":
        "3e année Digital Experience Design",
      "about.now.school":
        "Thomas More, Malines",
      "about.now.d":
        "À la recherche d'un stage",
      "about.before":
        "Secondaire",
      "about.before.t":
        "Sciences humaines (enseignement général)",
      "about.before.d":
        "Psychologie, sociologie et sciences culturelles",
      "contact.status": "Ouvert aux stages",
      "contact.title": "Travaillons<br />ensemble",
      "contact.intro":
        "Je suis à la recherche d'un <strong>stage</strong> et ouvert aux <strong>collaborations</strong> avec des personnes qui veulent créer quelque chose. Vous avez une place, un projet ou une idée ? N'hésitez pas à m'écrire.",
      "contact.email": "E-mail",
      "nav.projects": "Projets",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "footer.top": "Retour en haut",
      "meta.next.title": "NEXT — Hamza",
      "meta.next.desc":
        "Étude de cas : site web pour NEXT, un accueil de jour pour les jeunes de 13 à 19 ans. Conçu et développé par Hamza.",
      "nav.back": "← Tous les projets",
      "case.eyebrow": "Étude de cas",
      "case.discipline": "Discipline",
      "case.back": "Retour au portfolio",
      "case.next": "Suivant",
      "case.storage":
        "Stockage",
      "case.type":
        "Type",
      "case.focus":
        "Focus",
      "case.allprojects":
        "Tous les projets",
      "case.allprojects.d":
        "Découvrez aussi les autres projets de mon portfolio.",
      "case.backlabel":
        "Retour",
      "ht.lead1":
        "Un suivi d'habitudes pour les étudiants qui veulent plus de rythme et de clarté au quotidien.",
      "ht.lead2":
        "Le défi : transformer un problème quotidien familier en une <strong>interface apaisante</strong> que l'on peut utiliser tout de suite — sans explication, sans pression.",
      "ht.open":
        "Ouvrir le suivi d'habitudes →",
      "ht.disc":
        "Web design, interaction",
      "ht.cap1":
        "Habitudes : cocher, séries et progression du jour",
      "ht.cap2":
        "Planning : cours et activités par jour",
      "ht.alt1":
        "Suivi d'habitudes : aperçu avec tâches cochées, séries et barre de progression",
      "ht.alt2":
        "Suivi d'habitudes : planning du jour avec cours et activités",
      "ht.ch1":
        "L'idée",
      "ht.ch2":
        "Choix de design",
      "ht.ch3":
        "Ce que j'ai développé",
      "ht.ch4":
        "Ce que j'ai appris",
      "ht.ch1.p":
        "Les habitudes doivent rester simples : <strong>ajouter, cocher et voir tout de suite où l'on en est</strong>. Rien de plus.",
      "ht.ch2.p":
        "J'ai choisi une <strong>palette douce</strong> et une seule action claire par habitude : la cocher. Les séries et l'historique sur 7 jours apportent de la <strong>motivation sans pression</strong>, et la barre de progression montre d'un coup d'œil comment se passe la journée.",
      "ht.ch3.p":
        "Des habitudes avec séries, progression du jour, recherche et modification en ligne, plus un <strong>planning hebdomadaire</strong> pour les cours et activités. Tout est conservé dans le LocalStorage, même après un rafraîchissement.",
      "ht.ch4.p":
        "Comme j'ai réalisé à la fois le design et le code, j'ai pu tester mes idées immédiatement. J'ai appris l'importance des <strong>petites interactions</strong> : un retour clair, de bons états vides et des données qui restent.",
      "mt.eyebrow":
        "Projet Figma",
      "mt.lead1":
        "Une liste de films pour un cinéma, conçue dans Figma pendant ma première année.",
      "mt.lead2":
        "Mon premier projet de design : j'y ai travaillé la <strong>mise en page, la typographie et la couleur</strong>, et testé comment les animations et un prototype donnent vie à une interface.",
      "mt.open":
        "Voir le projet Figma →",
      "mt.type":
        "Projet scolaire, 1re année",
      "mt.focus":
        "Liste de films, design visuel",
      "mt.status":
        "Fichier Figma",
      "mt.ch1":
        "La mission",
      "mt.ch2":
        "Choix de design",
      "mt.ch3":
        "Ce que j'ai appris",
      "mt.ch1.p":
        "Concevoir une liste de films simple pour un cinéma, avec des <strong>informations claires</strong> et une première impression forte.",
      "mt.ch2.p":
        "Une <strong>interface sombre</strong> pour laisser parler les affiches, un film mis en avant par écran avec un halo rouge, et une navigation fixe en bas, à portée de pouce.",
      "mt.ch3.p":
        "J'ai appris à travailler avec les frames, composants et prototypes dans Figma, et vu comment de <strong>petits choix d'espacement, de typographie et de couleur</strong> rendent une interface plus claire.",
      "next.lead1":
        "NEXT est un accueil de jour pratique pour les jeunes de 13 à 19 ans qui décrochent (temporairement) à l'école ou à la maison. L'équipe les aide à retrouver un rythme, une structure et la confiance en eux, afin qu'ils puissent reprendre l'école, un travail ou une formation.",
      "next.lead2":
        "Pour NEXT, <strong>j'ai conçu et développé l'intégralité du site</strong>. Le site explique dans un langage clair ce que fait NEXT et comment s'inscrire — pour les jeunes eux-mêmes, pour leurs parents et pour les professionnels qui souhaitent orienter un jeune.",
      "next.live": "Voir le site en ligne →",
      "case.role": "Rôle",
      "case.built": "Développé avec",
      "case.website": "Site web",
      "status.dev": "En développement",
      "next.alt": "Page d'accueil du site NEXT",
      "next.ch1":
        "La mission",
      "next.ch1.body":
        "NEXT cherchait un site qui s'adresse à <strong>trois publics</strong> à la fois et inspire confiance tout de suite. Le plus grand défi : les jeunes en difficulté doivent se sentir les bienvenus, pas observés.",
      "next.aud1":
        "Les jeunes",
      "next.aud1.d":
        "Se sentir bienvenus tout de suite, sans longs textes.",
      "next.aud2":
        "Les parents",
      "next.aud2.d":
        "Comprendre rapidement ce que fait NEXT.",
      "next.aud3":
        "Les professionnels",
      "next.aud3.d":
        "Des infos claires sur le fonctionnement et l'inscription.",
      "next.look":
        "Identité visuelle",
      "next.look.p1":
        "J'ai commencé par un <strong>moodboard</strong> et un tableau de sites de référence. Le sentiment recherché : être dehors, être ensemble et oser être soi-même.",
      "next.look.p2":
        "L'idée clé : une <strong>ligne jaune avec des boucles</strong> qui traverse le site comme un parcours, avec des <strong>sections volontairement non alignées</strong>. Car la vie ne se déroule pas toujours sans accroc — c'est un chemin que l'on parcourt pas à pas.",
      "next.look.p3":
        "La charte graphique a fixé les bases : <strong>jaune doré, vert, crème et noir</strong>, avec Oswald pour les titres et Inter pour le texte.",
      "next.mood.cap":
        "Moodboard",
      "next.insp.cap":
        "Inspiration &amp; références",
      "next.brand.cap":
        "Charte graphique",
      "next.mood.alt":
        "Moodboard de NEXT : jeunes en pleine nature, accents jaunes manuscrits et nuances de vert",
      "next.insp.alt":
        "Tableau d'inspiration avec des sites de référence et des notes sur la ligne jaune, les sections libres et les citations manuscrites",
      "next.brand.alt":
        "Charte graphique de NEXT : logo jaune manuscrit, Oswald et Inter, et les couleurs jaune doré, vert, crème et noir",
      "next.lowfi":
        "Wireframes",
      "next.lowfi.p":
        "Pour chaque page, nous avons esquissé <strong>plusieurs variantes basse fidélité</strong>, les avons comparées et avons combiné les meilleurs choix. La structure était ainsi fixée avant de passer à la couleur et aux détails.",
      "next.lowfi.alt":
        "Wireframes basse fidélité de NEXT avec plusieurs variantes par page : Accueil, À propos, Écoles et CLB, Inscription, Actualités et Contact",
      "next.hifi":
        "Prototype",
      "next.hifi.p":
        "Le design final dans <strong>Figma</strong>. Parcourez le prototype vous-même.",
      "next.ut":
        "Tests utilisateurs",
      "next.ut.p":
        "Nous avons testé le prototype avec <strong>cinq utilisateurs</strong>. L'ambiance, la navigation et l'inscription fonctionnaient bien, et les photos de l'équipe inspiraient confiance. Quatre points d'amélioration clairs sont pourtant ressortis :",
      "next.ut.seen":
        "Ce que nous avons vu",
      "next.ut.done":
        "Ce que nous avons changé",
      "next.ut.s1":
        "L'essence de NEXT n'était pas claire tout de suite : les images détournaient l'attention du texte.",
      "next.ut.c1":
        "Une phrase courte et claire en haut de l'accueil : ce que fait NEXT et pour qui.",
      "next.ut.s2":
        "Le mot « parcours » était trop vague.",
      "next.ut.c2":
        "Des titres de pages qui disent ce qu'on peut y faire.",
      "next.ut.s3":
        "L'inscription passait par un petit lien texte.",
      "next.ut.c3":
        "Un bouton d'inscription permanent dans la navigation, et un texte plus grand.",
      "next.ut.s4":
        "L'équipe, l'élément de confiance le plus fort, était cachée.",
      "next.ut.c4":
        "L'équipe plus visible sur la page d'accueil.",
      "next.ch3":
        "Ce que j'ai développé",
      "next.ch3.p1":
        "J'ai développé le design final moi-même, <strong>codé à la main en HTML, CSS et JavaScript</strong> — sans page builder ni framework.",
      "next.ch3.p2":
        "J'ai aussi créé un <strong>espace d'administration sur mesure</strong>, pour que l'équipe de NEXT puisse modifier le contenu elle-même, sans développeur.",
      "case.soon": "Bientôt disponible",
      "next.nextdesc":
        "Branding et web design — étude de cas bientôt disponible.",
      "meta.sitr.title": "SITR — Hamza",
      "meta.sitr.desc":
        "Étude de cas en cours : site web et identité visuelle pour la marque de vêtements SITR.",
      "sitr.lead":
        "Je travaille actuellement sur l'étude de cas de SITR, une marque de vêtements pour laquelle je crée le <strong>site web et l'identité visuelle</strong>. Vous pourrez bientôt lire ici toute l'histoire : des premières idées et moodboards jusqu'au design final et au site développé.",
      "case.status": "Statut",
      "sitr.nextdesc":
        "UX/UI pour une plateforme — étude de cas bientôt disponible.",
      "meta.s4y.title": "S4Y — Hamza",
      "meta.s4y.desc":
        "Étude de cas en cours : interface et expérience utilisateur pour la plateforme S4Y.",
      "s4y.lead":
        "Je travaille actuellement sur l'étude de cas de S4Y, une plateforme dont je conçois l'<strong>interface et l'expérience utilisateur</strong>. Vous pourrez bientôt découvrir ici tout le processus : de la recherche et de la structure jusqu'aux écrans finalisés.",
      "s4y.discipline": "UX/UI, plateforme",
      "s4y.nextdesc":
        "Site web pour un accueil de jour pour jeunes — en ligne.",
    },
  };

  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const attrNodes = Array.from(document.querySelectorAll("[data-i18n-attr]"));
  const buttons = Array.from(
    document.querySelectorAll(".lang-switch [data-lang]"),
  );

  // keep the Dutch originals so switching back needs no dictionary
  const originalText = new Map(textNodes.map((el) => [el, el.innerHTML]));
  const originalAttrs = new Map(
    attrNodes.map((el) => [
      el,
      el.dataset.i18nAttr
        .split(";")
        .filter(Boolean)
        .map((pair) => {
          const [name, key] = pair.split(":");
          return { name, key, value: el.getAttribute(name) };
        }),
    ]),
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
      document.dispatchEvent(
        new CustomEvent("languagechange", { detail: { lang } }),
      );
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
