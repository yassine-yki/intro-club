export const links = {
  form: 'https://docs.google.com/forms/d/e/1FAIpQLSdiGPLdgRGeQ-QyixGO6MR13K00yGENVtQSuu6LRbC3FUNJJA/viewform',
  whatsapp: 'https://wa.me/212636811433',
  instagram: 'https://www.instagram.com/hestimitclub/',
  main: 'https://www.it-clubhestim.site/'
};

// Keep both languages in sync. Short copy keeps the tour comfortable on phones.
export const screens = ['welcome', 'club', 'explore', 'join'];
export const copy = {
  fr: {
    title: 'BIT · Club IT — HESTIM', description: 'Des idées. Des potes. Des projets. BIT te fait découvrir le Club IT — HESTIM.',
    navigation: 'Navigation principale', nav: ['Accueil', 'Le club', 'Explorer', 'Rejoindre'],
    step: 'ÉTAPE', of: 'SUR', mainSite: 'Site principal', footer: 'Club IT — HESTIM',
    languageLabel: 'Choisis ta langue', mascotAlt: 'BIT, la mascotte en cubes du Club IT — HESTIM',
    welcome: {
      eyebrow: 'BIENVENUE AU CLUB', heading: ['Des idées.', 'Des potes.', 'Des projets.'],
      speech: 'Moi, c’est BIT. Je te fais visiter ?', tour: 'C’est parti !', join: 'Rejoindre le club', free: 'Explorer librement'
    },
    club: {
      eyebrow: 'L’ESPRIT DU CLUB', heading: 'La tech entre potes.', speech: 'Viens comme tu es. La curiosité suffit !',
      values: [
        { icon: 'people', title: 'Rencontrer', text: 'Des gens avec qui partager tes idées.' },
        { icon: 'spark', title: 'Tester', text: 'Des défis, des essais, des projets à plusieurs.' },
        { icon: 'heart', title: 'Partager', text: 'Un coup de main, une découverte, un bon moment.' }
      ], next: 'Trouver mon univers'
    },
    explore: {
      eyebrow: 'SUIS TA CURIOSITÉ', heading: 'Qu’est-ce qui te tente ?', speech: 'Choisis un univers. On essaie ?',
      back: 'Tous les univers', choose: 'Choisis une idée', ideas: 'UNE PISTE À EXPLORER', next: 'Ça me tente !',
      subjects: [
        { id: 'code', icon: 'code', name: 'Programmation', teaser: 'Crée ton truc.', options: [
          { title: 'Un site', heading: 'Un site à ton image', text: 'Un portfolio ou une page sur ta passion : fais vivre ton idée sur le web.' },
          { title: 'Un jeu', heading: 'Tes règles, ton jeu', text: 'Un personnage, un objectif, un défi : imagine un petit jeu à partager.' },
          { title: 'Un outil', heading: 'Moins de clics', text: 'Une tâche répétitive ? Crée un outil qui la fait pour toi.' }
        ] },
        { id: 'ai', icon: 'brain', name: 'Intelligence artificielle', teaser: 'Imagine et teste.', options: [
          { title: 'Images', heading: 'Qu’est-ce que l’IA voit ?', text: 'Teste la reconnaissance d’images et découvre pourquoi elle peut se tromper.' },
          { title: 'Assistant', heading: 'Un assistant pour ton idée', text: 'Imagine un assistant utile, puis mets ses réponses à l’épreuve.' },
          { title: 'Création', heading: 'Et si on créait autrement ?', text: 'Expérimente avec du texte ou des images. Ton imagination donne la direction.' }
        ] },
        { id: 'cyber', icon: 'shield', name: 'Cybersécurité', teaser: 'Joue au détective.', options: [
          { title: 'Pièges', heading: 'Repère l’arnaque', text: 'Cherche les indices suspects dans des messages et sites fictifs.' },
          { title: 'Comptes', heading: 'Protège ton terrain', text: 'Découvre les bons réflexes pour mieux protéger tes comptes.' },
          { title: 'Défis', heading: 'À toi de résoudre l’énigme', text: 'Relève des défis dans des environnements autorisés, conçus pour s’entraîner.' }
        ] },
        { id: 'robot', icon: 'robot', name: 'Robotique & IoT', teaser: 'Fais bouger tes idées.', options: [
          { title: 'Réactions', heading: 'Du code au mouvement', text: 'Un bouton, une lumière, un moteur : donne une réaction à ton objet.' },
          { title: 'Capteurs', heading: 'Un objet à l’écoute', text: 'Lumière, distance, température : imagine un objet qui réagit à son environnement.' },
          { title: 'Robot', heading: 'Une mission pour ton robot', text: 'Suivre une ligne ou éviter un obstacle : commence par une petite mission.' }
        ] }
      ]
    },
    join: {
      eyebrow: 'ON CONTINUE ENSEMBLE ?', heading: 'Viens dans l’équipe.', speech: 'Une idée ou juste de la curiosité ? Bienvenue !',
      formAction: 'Rejoindre le club', formNote: 'Formulaire d’adhésion · Google Forms',
      whatsapp: 'Une question ?', whatsappText: 'WhatsApp', instagram: 'La vie du club', instagramText: '@hestimitclub', restart: 'Revoir la visite'
    }
  },
  en: {
    title: 'BIT · Club IT — HESTIM', description: 'Ideas. Friends. Projects. Discover Club IT — HESTIM with BIT.',
    navigation: 'Main navigation', nav: ['Home', 'The club', 'Explore', 'Join'],
    step: 'STEP', of: 'OF', mainSite: 'Main website', footer: 'Club IT — HESTIM',
    languageLabel: 'Choose your language', mascotAlt: 'BIT, the floating cube mascot of Club IT — HESTIM',
    welcome: {
      eyebrow: 'WELCOME TO THE CLUB', heading: ['Ideas.', 'Friends.', 'Projects.'],
      speech: 'I’m BIT. Want a quick tour?', tour: 'Let’s go!', join: 'Join the club', free: 'Explore on my own'
    },
    club: {
      eyebrow: 'THE CLUB SPIRIT', heading: 'Tech with friends.', speech: 'Come as you are. Just bring your curiosity!',
      values: [
        { icon: 'people', title: 'Connect', text: 'Find people to share your ideas with.' },
        { icon: 'spark', title: 'Experiment', text: 'Challenges, experiments and projects together.' },
        { icon: 'heart', title: 'Share', text: 'A helping hand, a discovery, a good time.' }
      ], next: 'Find my universe'
    },
    explore: {
      eyebrow: 'FOLLOW YOUR CURIOSITY', heading: 'What sparks your interest?', speech: 'Pick a universe. Let’s give it a go!',
      back: 'All universes', choose: 'Choose an idea', ideas: 'SOMETHING TO TRY', next: 'Count me in!',
      subjects: [
        { id: 'code', icon: 'code', name: 'Programming', teaser: 'Make it yours.', options: [
          { title: 'Website', heading: 'A website that feels like you', text: 'A portfolio or a page about your passion: bring your idea to the web.' },
          { title: 'Game', heading: 'Your rules, your game', text: 'A character, a goal, a challenge: imagine a little game to share.' },
          { title: 'Tool', heading: 'Fewer clicks', text: 'Got a repetitive task? Build a tool that handles it for you.' }
        ] },
        { id: 'ai', icon: 'brain', name: 'Artificial intelligence', teaser: 'Imagine and test.', options: [
          { title: 'Images', heading: 'What does AI see?', text: 'Try image recognition and discover why it sometimes gets things wrong.' },
          { title: 'Assistant', heading: 'An assistant for your idea', text: 'Imagine a useful assistant, then put its answers to the test.' },
          { title: 'Create', heading: 'Create another way', text: 'Experiment with text or images. Your imagination sets the direction.' }
        ] },
        { id: 'cyber', icon: 'shield', name: 'Cybersecurity', teaser: 'Play detective.', options: [
          { title: 'Traps', heading: 'Spot the scam', text: 'Look for suspicious clues in fictional messages and websites.' },
          { title: 'Accounts', heading: 'Protect your space', text: 'Discover simple habits that help keep your accounts safer.' },
          { title: 'Challenges', heading: 'Crack the puzzle', text: 'Take on challenges in authorised environments designed for practice.' }
        ] },
        { id: 'robot', icon: 'robot', name: 'Robotics & IoT', teaser: 'Make ideas move.', options: [
          { title: 'Reactions', heading: 'From code to motion', text: 'A button, a light, a motor: make an object react.' },
          { title: 'Sensors', heading: 'An object that listens', text: 'Light, distance, temperature: imagine an object that reacts to its surroundings.' },
          { title: 'Robot', heading: 'Give your robot a mission', text: 'Follow a line or avoid an obstacle: start with one little mission.' }
        ] }
      ]
    },
    join: {
      eyebrow: 'WHAT’S NEXT? YOU.', heading: 'Come join the crew.', speech: 'An idea or just curiosity? You’re welcome here!',
      formAction: 'Join the club', formNote: 'Membership form · Google Forms, in French',
      whatsapp: 'Got a question?', whatsappText: 'WhatsApp', instagram: 'Life at the club', instagramText: '@hestimitclub', restart: 'Take the tour again'
    }
  }
};
