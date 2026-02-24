// MENU AND SECTION TITLES

const sectionTitles = {
 about: "À propos",
 services: "Nos services",
 missions: "Nos missions",
 recommendations: "Recommendations",
 contact: "Contact"
}
const sectionTitlesAria ={
    about: "Section à propos",
    services: "Section Services",
    missions: "Section Missions",
    recommendations: "Section Recommendations",
    contact: "Section Contact"
}

// HERO

const hero = {
 title: "L'expérience et la qualité d'une grande société de consulting à votre portée.",
 first_paragraph: "<b>Consultant expert/b>, <b>développeur senior</b> et <b>tech lead</b> avec plus de 30 ans d’expérience, j’interviens surtout sur des applications web à enjeux.",
 second_paragraph: "Mon rôle principal : <b>réduire le risque technique</b>, fiabiliser les architectures et aider les équipes à livrer plus vite et plus sereinement."
}

// SERVICES


// ABOUT

const legend = "Consultant senior";

const aboutText = {
 first_paragraph: "J’interviens aussi bien en renfort opérationnel du dévéloppement Python / React que sur des missions de cadrage, d’audit ou de reprise de projets existants (legacy, dette technique, performance, sécurité).",
 second_paragraph: "Habitué à travailler avec des équipes produit et techniques, avec plusieurs technologies et méthodologies, je privilégie les solutions pragmatiques, maintenables et orientées impact métier sur les approches dogmatiques qui abondent dans ce métier.",
 third_paragraph: "Comme philosophie de travail, je suis fortement orientée vers le « software craftmanship », l’artisanat logiciel, un approche qui met l’accent sur les compétences de l’équipe et sur la formation de communautés, ayant comme résultat des applications pas simplement opérationnelles mais bien conçus.",
 inteventions_title: "Mes contextes d’intervention typiques :",
 intervention_1: "Projets en difficulté ou en retard",
 intervention_2: "Dette technique élevée",
 intervention_3: "Passage à l’échelle (performance, fiabilité)",
 intervention_4: "Structuration d’une équipe ou d’un socle technique",
 intervention_5: "Passage d’un MVP à un produit robuste (fiabilité, sécurité)"
}

const elementNames = {
 name: "Nom",
 name_placeholder: "Nom, prénom",
 email: "Courriel",
 message: "Message",
 message_placeholder: "Votre message ici",
 send_button: "Envoyer",
 success: "Message envoyé avec succès",
 failure: "Il y a eu une erreur.",
 more_button: "Voir plus",
 less_button: "Voir moins"
}

const serve = {
 service0 : {
 "id" : "0",
 "service": "Audit technique    ",
 "content": "Diagnostic rapide des risques et problèmes potentiels, avec des recommandations pour réduire la dette technique."
 }, 
 service1 : {
 "id" : "1",
 "service": "Conception d’architecture",
 "content": "Recommandations pragmatiques et expertes pour mettre en œuvre des architectures qui évoluent douce et organiquement, guidées par le besoin réel plutôt que par la mode."
 }, 
 service2 : {
 "id" : "2",
 "service": "Développement senior Python (Django) & React",
 "content": "Vision systémique et experte des applications, les reliant au besoins du business, maîtrise de la complexité, capacité de décision. autonomie et fiabilité."
 },
 service3 : {
 "id" : "3",
 "service": "Reprise et refactoring de code existant",
 "content": "Orienté à projets complexes, en difficulté ou en retard, toujours avec une vision de l’impact business (performance, coûts, délais)."
 },
 service4 : {
 "id" : "4",
 "service": "Analyse et remise en maîtrise de systèmes non documentés",
 "content": "Comprendre, documenter et avancer logiciels legacy dont la connaissance s’est perdue avec le temps."
 }, 
 service5 : {
 "id" : "5",
 "service": "Conception et sécurisation d’API",
 "content": "L’API comme un contrat organisationnel à long terme. L’encapsulation permet plusieurs développements en parallèle, clarté dans le développement et vitesse d’évolution du produit avec stabilité à long terme."
 }, 
 service6 : {
 "id" : "6",
 "service": "Mise en œuvre de méthodologies et bons pratiques, Code review",
 "content": "Amélioration de la capacité collective à livrer avec fiabilité, prévisibilité et pragmatisme."
 },
 service7 : {
 "id" : "7",
 "service": "Accompagnement équipes, mentoring",
 "content": "Emphase en la collectivité, pas les individus ; transmission du raisonnement et de la connaissance, apprentissage sur cas réels."
 }, 
 service8 : {
 "id" : "8",
 "service": "Accompagnement CTO",
 "content": "Amélioration de capacités de livraison et aide experte dans domaines particuliers."
 }, 
}

const missions = {
 nidaba: {
 "id": "0",
 "institution": "CNRS – IDRIS",
 "title": "Ingénieur d’étude, tech lead et chef de projet",
 "mission": "Conception et livraison d’une application Python-Django pour la gestion des projets et utilisateurs sur le supercalculateur Jean Zay.",
 "context": "Un environnement très sécurisé pour l'accès au supercalculateur. Culture 'batch' (les jobs d'un supercalculateur sont toujours en lot). Environnement de projets en flux constant, avec des besoins changeants.",
 "issue": "Une application legacy avec une interface web minimale et 30+ processus en lot pour mettre à jour la base de données. Aucune mise à jour immédiate, en ligne. Peu d'outils en ligne pour l'utilisateur final. Workflows rigides. Bases de données répliquées sans nécessité. Langage obsolète: Perl.",
 "role": "Consultant senior / tech-lead. Définition de l’architecture, choix technologiques, structuration du backend Python et du frontend, mise en place des méthodologies de développement et d'un environnement DevOps qui n'existait pas. Développement du 90% du code. Automatisation de tests en utilisant pytest. Workflows configurables, avec des tâches concurrants et décisions.",
 "result": "Application livrée en production, performant. Réduction des délais de workflow d'approbation de quelques jours a moins de 24h. Base saine, maintenable et bien documentée, équipe autonome pour les évolutions futures.",
 "stack": "Python Django RDF PostgresSQL Docker Apache Ubuntu",
 "alterTech": "RabbitMQ, LDAP, OAuth2",
 "image": "idris",
 "imageS": "idrisS", 
 "imageAlt": "Image du supercalculateur Jean Zay",
 "logo": "CNRS",
 "logoAlt": "Logo du CNRS"
 },
 aglae : {
 "id": "1",
 "institution": "CNRS – C2RMF (Louvre)",
 "title": "Ingénieur d’étude, tech lead et chef de projet",
 "mission": "Conception et livraison d’une application qui automatise un positionneur 3D pour l'accélérateur de particules du Louvre, New Aglae.",
 "context": "L'accélérateur de particules du C2RMF (Louvre) est utilisé par les chercheurs pour analyser des oeuvres d'art du point de vue des matériaux.",
 "issue": "Le détecteur est approprié pour des tableaux (2D), parce que le faisceau de l'accélérateur doit être perpendiculaire à la surface analysée. Mais en cas des statues ou objets d'art tridimensionnels il y a un problème d'orthogonalité dû aux surfaces irrégulières qui ne s'alignent pas toujours avec le faisceau. La solution doit être économique et complètement automatisée (pas question de changer manuellement la position de l'objet chaque fois). L'architecture doit s'aligner avec l'architecture existante des applications de l'accélérateur.",
 "role": "Consultant senior / tech-lead et chef de projet. Définition de l’architecture technique, choix technologiques, sélection des éléments du positionneur avec un concours public. Développement de l'application de contrôle avec une interface graphique.",
 "result": "Choix d'un positionneur hexapode capable de positionner le plupart des objets d'une façon plus économique un bras robot. (dizaine de milliers d'euros versus millions). Développement d'une application avec une interface avec un scanner qui numérise une carte de l'objet sous analyse. Utilisation des modèles de rotation basés sur les angles d'Euler pour faire l'hexapode suivre la carte, ainsi faisant l'objet tourner et s'aligner. Application livrée en production, performante et économique. L'automatisation permet maintenant l'utilisation 24h sur 24 de l'accélérateur, optimisant sa vie technique.",
 "stack": "Outils propriétaires sur Windows, en particulier LabView, qui s'interface avec le reste de l'architecture de New Aglae.",
 "alterTech": "",
 "image": "aglaePosicionador",
 "imageS": "aglaePosicionadorS",
 "imageAlt": "Image de New Aglae, accélérateur de particules du C2RMF.",
 "logo": "c2rmf",
 "logoAlt": "Logo du C2RMF"
 },
 hacienda : {
 "id": "2",
 "institution": "EDS Mexico - SHCP",
 "title": "Account Manager – SHCP",
 "mission": "Outsourcing de toutes les opérations de TI des impôts et douanes, développement des applications inclus. En fait, j'étais le CTO de la Direction des impôts et douanes.",
 "context": "Le ministère a fait un outsourcing raté de ses opérations. EDS a été appelé pour corriger la situation.",
 "issue": "Une équipe d'outsourcing de plusieurs centaines de personnes, de bas niveau, avec une architecture d'applications décousue et insuffisante.",
 "role": "CTO temporaire. On a commencé par mettre en place des processus administratifs basiques pour stabiliser la situation. Avec les opérations stables, on a proposé une architecture intégrale et on a reconduit partiellement les développements et les opérations.",
 "result": "Une opération stable, avec une évolution claire basé en un 'roadmap' à cinq ans.",
 "stack": "Plusieurs architectures sans une vision intégrale, mais basé en systèmes ouverts (surtout Hewlett Packard).",
 "alterTech": "",
 "image": "pesos",
 "imageS": "pesosS",
 "imageAlt": "Image de monnaie et billets du Méxique.",
 "logo": "shcp",
 "logoAlt": "Logo de SHCP"
 },
 aeromex :{
 "id": "3",
 "institution": "EDS Mexique",
 "title": "CTO Aeromexico",
 "mission": "Conception de l’architecture et opération de l’infrastructure de la ligne aérienne Aeromexico.",
 "context": "Aeromexico décide de faire un outsourcing de ses opérations TI. EDS gagne le concours contre IBM.",
 "issue": "Opération inefficace avec des applications obsolètes qui ne permet pas optimiser les routes des vols.",
 "role": "Conception et opération de la partie mexicaine de l’infrastructure de TI.",
 "result": "Réduction de coûts d’informatique en un 10%. Optimisation des tarifications avec une application moderne basé en l’histoire de vols précédents.",
 "stack": "Système de réservations mainframe SABRE aux États Unis, le reste de l’opération dans notre centre au Mexique avec systèmes Sun.",
 "alterTech": "",
 "image": "avion",
 "imageS": "avionS",
 "imageAlt": "Image d'avion d'Aeromexico en vol",
 "logo": "aeromex",
 "logoAlt": "Logo de Aeromexico"
 },
 ife : {
 "id": "4",
 "institution": "Booz Allen",
 "title": "Senior Associate (tech lead et chef de projet)",
 "mission": "Deux applications électorales : registre de électeurs et comptabilisation des voix développés en technologie nouvelle dans un temps record.",
 "context": "Renouvellement total de la base de données des électeurs un an avant les élections. Situation politique compliquée avec l'opposition très méfiante des applications électorales, du à une histoire passé de fraudes électorales",
 "issue": "Développement des applications en temps record sans pouvoir rater les dates de livraison. Volume significatif de données (50 millions de fiches) dans un architecture jamais testé avant à ce niveau. Aucune équipe précédente, il a fallu créer l'équipe et les méthodologies à partir de zéro. Infrastructure de télécommunications inexistante, compliquant l'accès aux données distribués).",
 "role": "Chef de projet de développement des applications.",
 "result": "Applications delivered on time. Reliable database totally renewed. New voter ID which is still used after three decades.",
 "stack": "AIX,Oracle, C",
 "alterTech": "",
 "image": "IFE",
 "imageS": "IFES",
 "imageAlt": "Picture of Mexican voter ID",
 "logo": "boozAllen",
 "logoAlt": "Booz Allen logo"
 },
 garota : {
 "id": "5",
 "institution": "CNRS – Ipanema",
 "title": "Ingénieur d’étude, senior developer and project manager",
 "mission": "Horiba monochromator automatization, using the beamlines of the Soleil synchrotron.",
 "context": "Soleil, The largest third-generation synchrotron in France. Tens of experiments in different beamlines (visible, X-ray, ultraviolet, etc.)",
 "issue": "The experiments in a given beamline had to change configuration of a monochromator manually; forcing the researchers to constatly monitor the experiment, even at night.",
 "role": "Consultant senior and tech-lead. Application architecture design with the constrain of existing equipment drivers. Technology selection, application development.",
 "result": "Stable and performing application delivered in production, autonomous team for future evolution.",
 "stack": "C++, MicroManager (proprietary tool), Windows",
 "alterTech": "",
 "image": "soleil",
 "imageS": "soleilS",
 "imageAlt": "Picture of Soleil synchrotron at Gif-sur-Yvette",
 "logo": "ipanema",
 "logoAlt": "Ipanema logo"
 },
}
 
const fields = {
    mission: "Mission",
    context: "Contexte",
    issue: "Problématique",
    role: "Rôle",
    result: "Résultat",
    stack: "Stack",
    alterTech: "Autres technologies"
}

const slides = {
 confiance :{
 "id" : "0",
 "concept" : "Ils nous ont fait confiance",
 "source" : "{ large: confianceL, medium: confianceM, small: confianceS }",
 "alt": "Logos des entreprise où Luis Arean a fait ses services."
 },
 wordcloud : {
 "id" : "1",
 "concept" : "",
 "source" : "{ large: wordcloudL, medium: wordcloudM, small: wordcloudS }",
 "alt": "Nuage de compétences qu'on vous offrit."
 }
}

 export default {sectionTitles, sectionTitlesAria, hero, legend, aboutText, serve, slides, fields, missions, elementNames}