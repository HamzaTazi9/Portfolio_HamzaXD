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
      "case.designed": "Designed in",
      "s4y.l3.d": "Copy differs in length between French and Dutch. A layout has to absorb that without breaking.",
      "s4y.l3": "Thinking in two languages",
      "s4y.l2.d": "One question at a time, a progress bar and personal details only at the end: that's how a long form feels light.",
      "s4y.l2": "Forms in steps",
      "s4y.l1.d": "Everything on the site leads to the same action. That focus makes design and copy decisions much easier.",
      "s4y.l1": "One goal per page",
      "s4y.ch5": "What I learned",
      "s4y.ch4.p": "I built the site <strong>by hand in HTML, CSS and JavaScript</strong>. The form, the branching steps, the language switch and the animations are all my own code. The site runs on <strong>Vercel</strong>.",
      "s4y.ch4": "What I built",
      "s4y.ch3.p": "On top of that: four services (cameras, alarms, fire detection, and access control &amp; intercoms), each with its own button to the form, an FAQ and the necessary legal pages.",
      "s4y.f3.d": "Phone and email at the top of every page, and on mobile a fixed bar to call right away or request a quote.",
      "s4y.f3": "Always reachable",
      "s4y.f2.d": "Figures on experience and installations, partners and certifications, and a clear step-by-step plan: from request to installation.",
      "s4y.f2": "Trust",
      "s4y.f1.d": "The whole site works in French and Dutch, with a language switch in the navigation.",
      "s4y.f1": "Bilingual",
      "s4y.ch3": "Features",
      "s4y.ch2.p2": "A progress bar shows where you are. On sending, a <strong>pre-filled email</strong> opens with all the answers. If your mail app doesn't open, you immediately get the phone number and email address as an alternative.",
      "s4y.form.w4": "Only at the end, once the visitor has already invested. Only what's essential is required.",
      "s4y.form.s4": "Contact details",
      "s4y.form.w3": "Gives the team enough information to prepare a quote, without long open questions.",
      "s4y.form.s3": "Situation, size and timing",
      "s4y.form.w2": "Several choices allowed, plus “I don't know yet”: nobody gets stuck on a technical question.",
      "s4y.form.s2": "What do you want to secure, and with which system?",
      "s4y.form.w1": "Decides which questions follow: a home needs different questions than a building site or a warehouse.",
      "s4y.form.s1": "Private individual or business?",
      "s4y.form.head2": "Why",
      "s4y.form.head1": "Step",
      "s4y.ch2.p": "The heart of the site is a <strong>step-by-step quote form</strong>, visible right at the top of the homepage. Instead of one long form it asks one question at a time, in about a minute, and it <strong>adapts</strong> to who you are.",
      "s4y.ch2": "The quote form",
      "s4y.aud2.d": "Offices, warehouses, shops and building sites. They're looking for a reliable partner and a tailored solution.",
      "s4y.aud2": "Businesses",
      "s4y.aud1.d": "Securing a house or flat without technical knowledge. They want to know what's possible and what it costs.",
      "s4y.aud1": "Private individuals",
      "s4y.ch1.p": "Security4You works for private individuals and businesses all over Belgium. The website had to <strong>build trust</strong> with people who want to secure their home or business, and lead them straight to a quote request. Two audiences, each with different questions:",
      "s4y.ch1": "The brief",
      "case.languages": "Languages",
      "s4y.lang": "French & Dutch",
      "s4y.role": "UX/UI design & front-end",
      "s4y.alt": "Homepage of the S4Y website",
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
      "work.s4y.desc": "Bilingual website for a Belgian security installer, built around a step-by-step quote form.",
      "status.soon": "Coming soon",
      "tag.platform": "Platform",
      "work.more.title": "More projects on the way",
      "work.more.desc":
        "I'm working on new projects. More work will appear here soon.",
      "status.progress": "In progress",
      "skills.title": "Three hats,<br />one head",
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
      "s4y.lead": "S4Y (Security4You) is a Belgian installer of cameras, alarms, fire detection and access control, with more than 20 years of experience. For them I designed and built a <strong>bilingual website</strong> with one clear goal: making it as easy as possible for visitors to request a <strong>free quote</strong>.",
      "s4y.discipline": "Web design, UX/UI",
      "s4y.nextdesc": "Accessible website for visually impaired users — prototype.",
      "work.lel.desc":
        "Accessible website for an organisation that supports people with a visual impairment.",
      "meta.lel.title": "Licht &amp; Liefde — Hamza",
      "meta.lel.desc":
        "Case study: accessible website for Licht & Liefde, an organisation for people with a visual impairment. Designed by Hamza.",
      "lel.lead1":
        "Licht &amp; Liefde supports people with a visual impairment in their daily lives, so they can live independently.",
      "lel.lead2":
        "With a team of three, <strong>we reworked the structure and design of the website</strong> for visually impaired visitors: from an analysis of the current site and card sorting to a new navigation and a clickable prototype.",
      "lel.proto.cta": "View the prototype →",
      "lel.discipline": "UX/UI, accessibility",
      "lel.alt": "Hero of the Licht & Liefde homepage",
      "case.team": "Team",
      "lel.asis": "The current website",
      "lel.asis.p": "We started with a <strong>sitemap of the existing website</strong>. It turned out to be deep and organised by audience instead of by topic. Donating had no place of its own in the menu, and contact details were spread across several pages.",
      "lel.cs": "Card sorting",
      "lel.cs.p": "With an <strong>open card sort</strong> — 33 cards, three testers — we looked at how visitors would group the content themselves.",
      "lel.cs1": "What matched",
      "lel.cs1.d": "About the organisation, help &amp; services, activities and support each formed their own group.",
      "lel.cs2": "What confused",
      "lel.cs2.d": "Terms like “Access to expertise”, “Empathy experience” and “Educational kits” were unfamiliar and hard to place.",
      "lel.cs3": "What stood out",
      "lel.cs3.d": "“A search bar would be handy on every page.”",
      "lel.nav": "Navigation structure",
      "lel.nav.p": "Based on the card sort we built a new structure with <strong>six main sections</strong>: Home, About us, Help &amp; Services, Activities, Support and Contact — with a search bar on every page.",
      "lel.nav.before": "Current website",
      "lel.nav.after": "New structure",
      "lel.nav.s1": "Menu organised by audience.",
      "lel.nav.c1": "Menu organised by topic, so everyone follows the same path.",
      "lel.nav.s2": "A deep structure with many layers.",
      "lel.nav.c2": "Six main items with clear subpages.",
      "lel.nav.s3": "Donating was hidden.",
      "lel.nav.c3": "A main item of its own, Support: donating, giving, sponsorship and volunteering.",
      "lel.nav.s4": "Contact details on several pages.",
      "lel.nav.c4": "One Contact page with a form, FAQ and map.",
      "lel.test": "User tests",
      "lel.test.p1": "Our hypothesis: visitors understand without explanation what Licht &amp; Liefde offers, and find their way to help, activities, donating or contact <strong>within one to two minutes</strong>.",
      "lel.test.p2": "We tested the prototype with <strong>five participants</strong>, one-on-one and thinking aloud, across six tasks: first impression, finding help, signing up for an activity, donating, getting in touch and returning home. We took turns as moderator and observer, and gathered every observation and quote per task on one note board.",
      "lel.cs.alt": "Card sort in FigJam: 33 cards grouped into About the organisation, Services and support, Activities, Support, General information, News and stories, and Legal",
      "lel.cs.cap": "My card sort in FigJam",
      "lel.test.alt": "Note board from the user tests: a row per tester and a column per task with observations and quotes",
      "lel.test.cap": "Note board: observations per tester and per task",
    },
    fr: {
      "case.designed": "Conçu dans",
      "s4y.l3.d": "Les textes n'ont pas la même longueur en français et en néerlandais. La mise en page doit l'absorber sans casser.",
      "s4y.l3": "Penser en deux langues",
      "s4y.l2.d": "Une question à la fois, une barre de progression et les données personnelles seulement à la fin : ainsi, un long formulaire paraît léger.",
      "s4y.l2": "Formulaires par étapes",
      "s4y.l1.d": "Tout le site mène à la même action. Ce focus rend les choix de design et de texte beaucoup plus simples.",
      "s4y.l1": "Un objectif par page",
      "s4y.ch5": "Ce que j'ai appris",
      "s4y.ch4.p": "J'ai développé le site <strong>à la main en HTML, CSS et JavaScript</strong>. Le formulaire, les étapes conditionnelles, le changement de langue et les animations sont entièrement codés par moi. Le site est hébergé sur <strong>Vercel</strong>.",
      "s4y.ch4": "Ce que j'ai développé",
      "s4y.ch3.p": "En plus : quatre services (caméras, alarmes, détection d'incendie, et contrôle d'accès &amp; parlophonie), chacun avec son propre bouton vers le formulaire, une FAQ et les pages légales nécessaires.",
      "s4y.f3.d": "Téléphone et e-mail en haut de chaque page, et sur mobile une barre fixe pour appeler directement ou demander un devis.",
      "s4y.f3": "Toujours joignable",
      "s4y.f2.d": "Des chiffres sur l'expérience et les installations, des partenaires et certifications, et un parcours clair : de la demande à l'installation.",
      "s4y.f2": "Confiance",
      "s4y.f1.d": "Tout le site fonctionne en français et en néerlandais, avec un sélecteur de langue dans la navigation.",
      "s4y.f1": "Bilingue",
      "s4y.ch3": "Fonctionnalités",
      "s4y.ch2.p2": "Une barre de progression indique où vous en êtes. À l'envoi, un <strong>e-mail pré-rempli</strong> s'ouvre avec toutes les réponses. Si votre messagerie ne s'ouvre pas, le numéro de téléphone et l'adresse e-mail s'affichent aussitôt en alternative.",
      "s4y.form.w4": "Seulement à la fin, quand le visiteur s'est déjà investi. Seul l'essentiel est obligatoire.",
      "s4y.form.s4": "Coordonnées",
      "s4y.form.w3": "Donne à l'équipe assez d'informations pour préparer un devis, sans longues questions ouvertes.",
      "s4y.form.s3": "Situation, ampleur et délai",
      "s4y.form.w2": "Plusieurs choix possibles, plus « je ne sais pas encore » : personne ne bloque sur une question technique.",
      "s4y.form.s2": "Que souhaitez-vous sécuriser, et avec quelle installation ?",
      "s4y.form.w1": "Détermine les questions suivantes : une habitation ne demande pas la même chose qu'un chantier ou un entrepôt.",
      "s4y.form.s1": "Particulier ou entreprise ?",
      "s4y.form.head2": "Pourquoi",
      "s4y.form.head1": "Étape",
      "s4y.ch2.p": "Le cœur du site est un <strong>formulaire de devis par étapes</strong>, visible dès le haut de la page d'accueil. Au lieu d'un long formulaire, il pose une question à la fois, en une minute environ, et il <strong>s'adapte</strong> à votre profil.",
      "s4y.ch2": "Le formulaire de devis",
      "s4y.aud2.d": "Bureaux, entrepôts, commerces et chantiers. Ils cherchent un partenaire fiable et une solution sur mesure.",
      "s4y.aud2": "Entreprises",
      "s4y.aud1.d": "Sécuriser une maison ou un appartement, sans connaissances techniques. Ils veulent savoir ce qui est possible et combien cela coûte.",
      "s4y.aud1": "Particuliers",
      "s4y.ch1.p": "Security4You travaille pour les particuliers comme pour les entreprises, partout en Belgique. Le site devait <strong>inspirer confiance</strong> aux personnes qui veulent sécuriser leur maison ou leur entreprise, et les mener directement à une demande de devis. Deux publics, avec chacun leurs questions :",
      "s4y.ch1": "La mission",
      "case.languages": "Langues",
      "s4y.lang": "Français & néerlandais",
      "s4y.role": "Design UX/UI & front-end",
      "s4y.alt": "Page d'accueil du site S4Y",
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
      "work.s4y.desc": "Site bilingue pour un installateur de sécurité belge, construit autour d'un formulaire de devis par étapes.",
      "status.soon": "Bientôt",
      "tag.platform": "Plateforme",
      "work.more.title": "D'autres projets arrivent",
      "work.more.desc":
        "Je travaille sur de nouveaux projets. D'autres réalisations arriveront bientôt ici.",
      "status.progress": "En cours",
      "skills.title": "Trois casquettes,<br />une seule tête",
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
      "s4y.lead": "S4Y (Security4You) est un installateur belge de caméras, d'alarmes, de détection d'incendie et de contrôle d'accès, fort de plus de 20 ans d'expérience. Pour eux, j'ai conçu et développé un <strong>site bilingue</strong> avec un objectif clair : permettre aux visiteurs de demander un <strong>devis gratuit</strong> le plus simplement possible.",
      "s4y.discipline": "Web design, UX/UI",
      "s4y.nextdesc":
        "Site web accessible pour les personnes malvoyantes — prototype.",
      "work.lel.desc":
        "Site web accessible pour une organisation qui accompagne les personnes avec une déficience visuelle.",
      "meta.lel.title": "Licht &amp; Liefde — Hamza",
      "meta.lel.desc":
        "Étude de cas : site web accessible pour Licht & Liefde, une organisation pour les personnes avec une déficience visuelle. Conçu par Hamza.",
      "lel.lead1":
        "Licht &amp; Liefde accompagne les personnes avec une déficience visuelle dans leur vie quotidienne, pour qu'elles puissent vivre de manière autonome.",
      "lel.lead2":
        "En équipe de trois, <strong>nous avons repensé la structure et le design du site</strong> pour les visiteurs malvoyants : de l'analyse du site actuel et du tri par cartes à une nouvelle navigation et un prototype cliquable.",
      "lel.proto.cta": "Voir le prototype →",
      "lel.discipline": "UX/UI, accessibilité",
      "lel.alt": "Bannière de la page d'accueil de Licht & Liefde",
      "case.team": "Équipe",
      "lel.asis": "Le site actuel",
      "lel.asis.p": "Nous avons commencé par un <strong>plan du site existant</strong>. Il s'est révélé profond et organisé par public plutôt que par sujet. Le don n'avait pas sa propre place dans le menu et les coordonnées étaient dispersées sur plusieurs pages.",
      "lel.cs": "Tri par cartes",
      "lel.cs.p": "Avec un <strong>tri par cartes ouvert</strong> — 33 cartes, trois testeurs — nous avons regardé comment les visiteurs regrouperaient eux-mêmes le contenu.",
      "lel.cs1": "Ce qui concordait",
      "lel.cs1.d": "L'organisation, l'aide &amp; les services, les activités et le soutien formaient chaque fois un groupe à part.",
      "lel.cs2": "Ce qui déroutait",
      "lel.cs2.d": "Des termes comme « Accès à l'expertise », « Expérience immersive » et « Valises éducatives » étaient inconnus et difficiles à classer.",
      "lel.cs3": "Ce qui ressortait",
      "lel.cs3.d": "« Une barre de recherche serait pratique sur chaque page. »",
      "lel.nav": "Structure de navigation",
      "lel.nav.p": "Sur la base du tri par cartes, nous avons construit une nouvelle structure avec <strong>six rubriques principales</strong> : Accueil, À propos, Aide &amp; Services, Activités, Soutenir et Contact — avec une barre de recherche sur chaque page.",
      "lel.nav.before": "Site actuel",
      "lel.nav.after": "Nouvelle structure",
      "lel.nav.s1": "Menu organisé par public.",
      "lel.nav.c1": "Menu organisé par sujet, pour que tout le monde suive le même chemin.",
      "lel.nav.s2": "Une structure profonde avec beaucoup de niveaux.",
      "lel.nav.c2": "Six rubriques principales avec des sous-pages claires.",
      "lel.nav.s3": "Le don était caché.",
      "lel.nav.c3": "Une rubrique à part entière, Soutenir : dons, legs, sponsoring et bénévolat.",
      "lel.nav.s4": "Des coordonnées sur plusieurs pages.",
      "lel.nav.c4": "Une seule page Contact avec formulaire, FAQ et carte.",
      "lel.test": "Tests utilisateurs",
      "lel.test.p1": "Notre hypothèse : les visiteurs comprennent sans explication ce que propose Licht &amp; Liefde et trouvent <strong>en une à deux minutes</strong> le chemin vers l'aide, les activités, les dons ou le contact.",
      "lel.test.p2": "Nous avons testé le prototype avec <strong>cinq participants</strong>, en individuel et à voix haute, en six tâches : première impression, chercher de l'aide, s'inscrire à une activité, faire un don, prendre contact et revenir à l'accueil. Nous alternions les rôles de modérateur et d'observateur, et rassemblions toutes les observations et citations par tâche sur un seul tableau.",
      "lel.cs.alt": "Tri par cartes dans FigJam : 33 cartes regroupées en Organisation, Services et accompagnement, Activités, Soutenir, Informations générales, Actualités et témoignages, et Juridique",
      "lel.cs.cap": "Mon tri par cartes dans FigJam",
      "lel.test.alt": "Tableau de notes des tests utilisateurs : une ligne par testeur et une colonne par tâche avec observations et citations",
      "lel.test.cap": "Tableau de notes : observations par testeur et par tâche",
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
