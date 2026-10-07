export const links = {
  form: 'https://docs.google.com/forms/d/e/1FAIpQLSdiGPLdgRGeQ-QyixGO6MR13K00yGENVtQSuu6LRbC3FUNJJA/viewform',
  whatsapp: 'https://wa.me/212636811433',
  instagram: 'https://www.instagram.com/hestimitclub/',
  main: 'https://www.it-clubhestim.site/'
};

// Add new screens or subjects here; keep each language's content together.
export const screens = ['welcome', 'club', 'explore', 'join'];
export const copy = {
  fr: {
    title: 'Orbit · Club IT — HESTIM', description: 'Des idées. Des potes. Des projets. Découvre le Club IT — HESTIM avec Orbit et trouve ton univers.',
    navigation: 'Navigation principale', nav: ['Accueil', 'Le club', 'Explorer', 'Rejoindre'],
    step: 'ÉTAPE', of: 'SUR', next: 'Continuer', mainSite: 'Notre site principal', footer: 'Club IT — HESTIM · Fiat Lux',
    languageLabel: 'Choisis ta langue', mascotAlt: 'Orbit, la mascotte du Club IT — HESTIM',
    welcome: {
      eyebrow: 'BIENVENUE DANS LE CLUB', heading: ['Des idées.', 'Des potes.', 'Des projets.'],
      intro: 'La tech, c’est encore mieux ensemble.',
      speech: 'Salut, moi c’est Orbit ! Je te fais visiter ?',
      tour: 'Fais-moi visiter', join: 'Je veux rejoindre le club', free: 'Explorer librement',
      note: 'Un peu de curiosité. Beaucoup de possibilités.'
    },
    club: {
      eyebrow: 'L’ESPRIT DU CLUB', heading: 'Les bonnes idées commencent par une rencontre.',
      intro: 'Au Club IT — HESTIM, la tech nous réunit. On échange, on expérimente et on fait avancer nos idées ensemble.',
      speech: 'Ton point de départ ? Une envie, une idée, une question.',
      values: [
        { icon: 'people', title: 'Des rencontres', text: 'Trouve des personnes avec qui parler tech, échanger et imaginer la suite.' },
        { icon: 'spark', title: 'Le plaisir d’essayer', text: 'Une idée un peu folle ? On peut commencer petit, tester et voir où elle nous mène.' },
        { icon: 'heart', title: 'L’envie de partager', text: 'Un coup de main, une découverte, un point de vue : chacun a quelque chose à apporter.' }
      ], next: 'Trouver mon univers'
    },
    explore: {
      eyebrow: 'À TOI D’EXPLORER', heading: 'Qu’est-ce qui te tente ?',
      intro: 'Choisis un univers. Suis ta curiosité.', speech: 'Un site, une idée d’IA, un robot… on commence où ?',
      back: 'Tous les univers', choose: 'Tu aimerais explorer quoi ?', ideas: 'UNE IDÉE POUR COMMENCER',
      next: 'Ça me tente, je rejoins le club', other: 'Voir un autre univers',
      subjects: [
        { id: 'code', icon: 'code', name: 'Programmation', teaser: 'Donne vie à tes idées.', speech: 'Qu’est-ce que tu aimerais créer ?', options: [
          { title: 'Un site web', heading: 'Un site à ton image', text: 'Un portfolio, une page pour une passion ou une idée à partager. Assemble du texte, des images et des interactions pour lui donner vie.', orbit: 'Une page toute simple peut déjà raconter beaucoup !' },
          { title: 'Un petit jeu', heading: 'Tes règles, ton univers', text: 'Imagine un personnage, un objectif et une première mécanique. Un jeu de mémoire ou une petite aventure peuvent être un point de départ.', orbit: 'Et si on commençait par un personnage qui bouge ?' },
          { title: 'Un outil utile', heading: 'Une petite idée qui simplifie la vie', text: 'Organiser une liste, convertir des fichiers ou automatiser une tâche répétitive : le code peut aussi t’épargner quelques clics.', orbit: 'Il y a sûrement une tâche que tu aimerais ne plus refaire.' }
        ] },
        { id: 'ai', icon: 'brain', name: 'Intelligence artificielle', teaser: 'Teste, imagine, expérimente.', speech: 'Curieux de ce qu’une IA peut faire… et de ses limites ?', options: [
          { title: 'Reconnaître des images', heading: 'Apprendre à distinguer', text: 'Explore comment un modèle utilise des exemples pour repérer des motifs dans des images, et pourquoi il peut se tromper.', orbit: 'Les exemples qu’on lui donne font toute la différence.' },
          { title: 'Un assistant pour une idée', heading: 'Donner un rôle à l’IA', text: 'Imagine un assistant qui aide à organiser des idées ou retrouver des informations. L’occasion de tester ses réponses et de garder son esprit critique.', orbit: 'Une réponse convaincante n’est pas toujours une réponse juste !' },
          { title: 'Créer et expérimenter', heading: 'Et si on essayait autrement ?', text: 'Explore la génération de texte ou d’images, compare les résultats et vois comment les intégrer à une création personnelle.', orbit: 'Ton imagination donne la direction.' }
        ] },
        { id: 'cyber', icon: 'shield', name: 'Cybersécurité', teaser: 'Un autre regard sur le numérique.', speech: 'Prêt à regarder derrière les apparences ?', options: [
          { title: 'Repérer les pièges', heading: 'L’œil du détective', text: 'Examine des exemples fictifs de messages et de sites pour repérer les indices d’une arnaque : adresse inhabituelle, urgence ou demande inattendue.', orbit: 'Parfois, le détail le plus discret est le plus important.' },
          { title: 'Protéger ses comptes', heading: 'De meilleures habitudes', text: 'Découvre à quoi servent les mots de passe uniques, un gestionnaire de mots de passe et la double authentification.', orbit: 'Quelques bons réflexes, ça change beaucoup.' },
          { title: 'Résoudre un défi', heading: 'Chercher, tester, comprendre', text: 'Explore des énigmes et des environnements conçus pour s’entraîner, avec l’autorisation nécessaire. La curiosité a aussi ses terrains de jeu.', orbit: 'On expérimente dans un cadre fait pour ça.' }
        ] },
        { id: 'robot', icon: 'robot', name: 'Robotique & IoT', teaser: 'Connecte tes idées au monde réel.', speech: 'Et si ton code faisait bouger quelque chose ?', options: [
          { title: 'Un objet qui réagit', heading: 'Du code au mouvement', text: 'Imagine une lumière qui change, un petit moteur qui tourne ou un objet qui répond à un bouton. Une action simple peut lancer un projet.', orbit: 'Un bouton, une réaction… et voilà une première idée !' },
          { title: 'Explorer les capteurs', heading: 'Sentir ce qui nous entoure', text: 'Lumière, distance, température : les capteurs permettent à un objet de réagir à son environnement.', orbit: 'Comment ton objet pourrait-il comprendre ce qui l’entoure ?' },
          { title: 'Un petit robot', heading: 'Une mission à imaginer', text: 'Un robot qui suit une ligne ou évite un obstacle : commence avec un objectif clair et découvre comment ses différentes pièces coopèrent.', orbit: 'Chaque petit mouvement commence par une idée.' }
        ] }
      ]
    },
    join: {
      eyebrow: 'LA SUITE, C’EST AVEC TOI', heading: 'Ta place est avec nous.',
      intro: 'Une idée, une question, l’envie de participer ? Fais le premier pas.',
      speech: 'Alors, on fait un bout de chemin ensemble ?',
      formTitle: 'Envie de rejoindre le club ?', formText: 'Présente-toi et partage tes centres d’intérêt dans notre formulaire d’adhésion.',
      formAction: 'Remplir le formulaire', formNote: 'Le formulaire s’ouvre dans Google Forms.',
      whatsapp: 'Une question ?', whatsappText: 'Discuter sur WhatsApp', instagram: 'Garder le contact', instagramText: 'Nous suivre sur Instagram',
      more: 'Envie d’aller plus loin ?', mainText: 'Retrouve le site principal du club, ses articles et ses ressources.', mainAction: 'Visiter le site principal', restart: 'Reprendre la visite'
    }
  },
  en: {
    title: 'Orbit · Club IT — HESTIM', description: 'Ideas. Friends. Projects. Meet Club IT — HESTIM with Orbit and find what sparks your curiosity.',
    navigation: 'Main navigation', nav: ['Home', 'The club', 'Explore', 'Join'],
    step: 'STEP', of: 'OF', next: 'Continue', mainSite: 'Our main website', footer: 'Club IT — HESTIM · Fiat Lux',
    languageLabel: 'Choose your language', mascotAlt: 'Orbit, the Club IT — HESTIM mascot',
    welcome: {
      eyebrow: 'WELCOME TO THE CLUB', heading: ['Ideas.', 'Friends.', 'Projects.'], intro: 'Tech is even better together.',
      speech: 'Hey, I’m Orbit! Want me to show you around?', tour: 'Show me around', join: 'I want to join the club', free: 'Explore on my own', note: 'A little curiosity. A world of possibilities.'
    },
    club: {
      eyebrow: 'THE CLUB SPIRIT', heading: 'Good ideas start with a connection.', intro: 'At Club IT — HESTIM, tech brings us together. We share, experiment and help each other bring ideas to life.',
      speech: 'Your starting point? An interest, an idea, a question.',
      values: [
        { icon: 'people', title: 'Find your people', text: 'Meet people to talk tech, swap ideas and imagine what comes next.' },
        { icon: 'spark', title: 'Enjoy experimenting', text: 'A slightly wild idea? Start small, try it out and see where it takes you.' },
        { icon: 'heart', title: 'Share what you know', text: 'A helping hand, a discovery, a different perspective: everyone has something to bring.' }
      ], next: 'Find my universe'
    },
    explore: {
      eyebrow: 'FOLLOW YOUR CURIOSITY', heading: 'What sparks your interest?', intro: 'Pick a universe. See where it takes you.', speech: 'A website, an AI idea, a robot… where shall we start?',
      back: 'All universes', choose: 'What would you like to explore?', ideas: 'AN IDEA TO GET YOU STARTED', next: 'Count me in — I want to join', other: 'Explore another universe',
      subjects: [
        { id: 'code', icon: 'code', name: 'Programming', teaser: 'Bring your ideas to life.', speech: 'What would you love to create?', options: [
          { title: 'A website', heading: 'A website that feels like you', text: 'A portfolio, a page about a passion, or an idea to share. Bring it to life with words, images and interactions.', orbit: 'Even a simple page can tell a great story!' },
          { title: 'A little game', heading: 'Your rules, your world', text: 'Imagine a character, a goal and one simple mechanic. A memory game or a tiny adventure could be a place to start.', orbit: 'What if we started with a character that moves?' },
          { title: 'A useful tool', heading: 'A small idea that makes life easier', text: 'Organise a list, convert files or automate a repetitive task. Code can save you a few clicks, too.', orbit: 'There’s probably a task you wish you didn’t have to repeat.' }
        ] },
        { id: 'ai', icon: 'brain', name: 'Artificial intelligence', teaser: 'Try, imagine, experiment.', speech: 'Curious about what AI can do… and where it falls short?', options: [
          { title: 'Recognise images', heading: 'Learning to tell things apart', text: 'Explore how a model uses examples to spot patterns in images, and why it sometimes gets things wrong.', orbit: 'The examples we give it make all the difference.' },
          { title: 'An assistant for an idea', heading: 'Give AI a role', text: 'Imagine an assistant that helps organise ideas or find information. A chance to test its answers and think critically.', orbit: 'A convincing answer isn’t always a correct one!' },
          { title: 'Create and experiment', heading: 'What if we tried another way?', text: 'Explore text or image generation, compare results and see how they could become part of your own creation.', orbit: 'Your imagination sets the direction.' }
        ] },
        { id: 'cyber', icon: 'shield', name: 'Cybersecurity', teaser: 'See the digital world differently.', speech: 'Ready to look beneath the surface?', options: [
          { title: 'Spot the traps', heading: 'Think like a detective', text: 'Look at fictional messages and websites for signs of a scam: an unusual address, urgency or an unexpected request.', orbit: 'Sometimes the smallest detail matters most.' },
          { title: 'Protect your accounts', heading: 'Build better habits', text: 'Discover why unique passwords, a password manager and two-factor authentication are useful.', orbit: 'A few good habits can make a big difference.' },
          { title: 'Solve a challenge', heading: 'Investigate, test, understand', text: 'Explore puzzles and practice environments designed for learning, with the right permission. Curiosity has its own playgrounds.', orbit: 'We experiment in a space made for it.' }
        ] },
        { id: 'robot', icon: 'robot', name: 'Robotics & IoT', teaser: 'Connect your ideas to the real world.', speech: 'What if your code could make something move?', options: [
          { title: 'An object that reacts', heading: 'From code to motion', text: 'Imagine a light changing, a small motor turning or an object responding to a button. One simple action can start a project.', orbit: 'A button, a reaction… there’s your first idea!' },
          { title: 'Explore sensors', heading: 'Sense the world around you', text: 'Light, distance, temperature: sensors help objects respond to their surroundings.', orbit: 'How could your object understand what’s around it?' },
          { title: 'A little robot', heading: 'Imagine a mission', text: 'A robot that follows a line or avoids an obstacle: start with a clear goal and discover how its parts work together.', orbit: 'Every little movement starts with an idea.' }
        ] }
      ]
    },
    join: {
      eyebrow: 'THE NEXT CHAPTER INCLUDES YOU', heading: 'You belong here.', intro: 'An idea, a question, a wish to get involved? Take the first step.', speech: 'So, shall we make something happen together?',
      formTitle: 'Want to join the club?', formText: 'Introduce yourself and tell us what interests you in our membership form.', formAction: 'Open the membership form', formNote: 'Opens in Google Forms. The form is in French.',
      whatsapp: 'Have a question?', whatsappText: 'Chat on WhatsApp', instagram: 'Stay in touch', instagramText: 'Follow us on Instagram',
      more: 'Want to go further?', mainText: 'Visit the club’s main website for articles and resources.', mainAction: 'Visit the main website', restart: 'Explore again'
    }
  }
};
