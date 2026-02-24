// MENU AND SECTION TITLES

const sectionTitles = {
 about: "About",
 services: "Our services",
 missions: "Our projects",
 recommendations: "Recommendations",
 contact: "Contact"
}
const sectionTitlesAria ={
 about: "About Section",
 services: "Services Section",
 missions: "Projects Section",
 recommendations: "Recommendations Section",
 contact: "Contact Section"
}

// HERO

const hero = {
 title: "The experience and quality of a major consulting firm at your reach",
 consultor: "Expert consultant",
 senior: "senior developer",
 conjunction: "and",
 leader: "tech lead",
 first_paragraph: " with more than 30 years of experience, I mainly intervene on web applications at risk.",
 main_role: "My principal role:",
 debt: "reduce the technical debt",
 second_paragraph: ", design reliable architectures and help teams deliver speedily and calmly."
}

// SERVICES


// ABOUT

const legend = "Senior consultant";

const aboutText = {
 first_paragraph: "I intervene either in operational strenghtening of Python/React development or on scoping, audit and takeover of existing projects (legacy, technical debt, performance, security).",
 second_paragraph: "At ease working with product and technical teams, with several technologies and methodologies, I prioritize pragmatic, maintainable and business-oriented solutions over the dogmatic approaches so common in this trade.",
 third_paragraph: "As work philosophy, I am strongly oriented towards 'software craftmanship', an approach that emphasizes team skills and capabilities and community building, resulting in applications that are not simply operational, but well conceived.",
 interventions_title: "My typical intervention contexts:",
 intervention_1: "At risk or late projects",
 intervention_2: "High technical debt",
 intervention_3: "Scaling (performance, reliability)",
 intervention_4: "Team or technical foundation structuring",
 intervention_5: "Evolution of an MVP into a robust product (reliability, security)"
}

const serve = {
 service0 :{
        "id" : "0",
        "service": "Technical Audit",
        "content": "Fast diagnostic of risks and potencial problems, along with recommendations to reduce the technical debt."
 }, 
 service1 : {
    "id" : "1",
    "service": "Architecture design",
    "content": "Pragmatic and expert recommendations to implement architectures that evolve gently and organically, guided by real needs rather than passing fashions."
    }, 
 service2 : {
    "id" : "2",
    "service": "Python/Django & React senior developer and tech lead",
    "content": "Systematic and expert view of applications, linking them to business needs; complexity management skills, decision-making ability, autonomy and reliabilty."
    },
 service3 : {
    "id" : "3",
    "service": "Reprise and refactoring of existing code",
    "content": "Focused on complex, challenged, or delayed projects, with a strong business impact perspective (performance, costs, deadlines)."    
    },
 service4 : {
    "id" : "4",
    "service": "Analysis and stabilization of non-documented systems",
    "content": "Understand, document and improve legacy software where the expertise has been lost over time."  
    }, 
 service5 : {
    "id" : "5",
    "service": "Design and securization of APIs",
    "content": "The API as a long-term organizational contract. Encapsulation permits parallelization and clarity of development, guaranteeing a speedy evolution with long-term stability of the product."
    }, 
 service6 : {
    "id" : "6",
    "service": "Best practices implementation, code reviews",
    "content": "Improvement of the collective capacity to deliver with reliability, predictability and pragmatism."
    },
 service7 : {
    "id" : "7",
    "service": "Team coaching, mentoring",
    "content": "Emphasis on the collective team, not on individuals; knowledge and reasoning transmission, learning with real cases."   
    }, 
 service8 : {
    "id" : "8",
    "service": "CTO coaching",
    "content": "Improvement of delivery capabilities and expert help in specific areas."    
    } 
}

const missions = {
 nidaba : { 
 "id": "0",
 "institution": "CNRS – IDRIS",
 "title": "Ingénieur d’étude, tech lead and project manager",
 "mission": "Design, coding and delivery of a Python-Django application for managing projects (including resource allocation) and users of the Jean Zay supercomputer.",
 "context": "A very secure environment for supercomputer access. A 'batch' culture 'batch' (jobs in a supercomputer are always batch). Project environment in constant flux, with business needs changing frequently.",
 "issue": "A legacy application with a minimal web interface and 30+ batch processes for the simplest tasks, such as updating the database or creating a project, resulting in long turnover times. Few online tools for users. Rigid workflows. Needless replication of data. Obsolete language: Perl.",
 "result": "A performing, agile and flexible application delivered in production. Reduction of approval workflows from several days to less than 24h. Healthy, maintainable and well-documented codebase, autonomous team for future evolution.",
 "stack": "Python Django RDF PostgresSQL Docker Apache Ubuntu",
 "alterTech": "RabbitMQ, LDAP, OAuth2",
 "image": "idris",
 "imageS": "idrisS", 
 "imageAlt": "Picture of Jean Zay supercomputer",
 "logo": "CNRS",
 "logoAlt": "CNRS logo"
 },
 aglae : {
 "id": "1",
 "institution": "CNRS – C2RMF (Louvre)",
 "title": "Ingénieur d’étude, tech lead and project manager",
 "mission": "Design and delivery of a 3D positioner for New Aglae, particle accelerator at the Louvre.",
 "context": "The C2RMF's particle accelator is used by researchers to analyze works of art from the point of view of constituent materials.",
 "issue": "The detector is adequate for pictures (2D), because the beam of the accelerator must be perpendicular to the analyzed surface. But in the case of statues or tridimensional objets d'art there is an orthogonality problem due to irregular surfaces which do not align with the beam. The solution must be automatic (it is out of the question to align the object manually all the time). The architecture must align with the existing application architecture of the accelerator.",
 "role": "Senior consultant, tech-lead and project manager. Design of the technical architecture, technological choices, public bidding of the technology. Application development with a graphic interface.",
 "result": "Selection of a positioner capable of positioning most objects in a less expensive way than a robot arm (tens of thousands of euros versus milliond). Development of an application with a scanner interface in order to digitilize a map of the analyzed object. Use of mathematical rotation models based on Euler's angles to make the hexapod follow the map, rotating and aligning the object. Application delivered in production, saving millions of dollars in budget and performing 24/24 . The automatization now allows around the clock operation, maximizing the accelerator's usage, thus optimizing its technical life.",
 "stack": "Proprietary tools over Windows, in particular LabView, which interfaces with the rest of the New Aglae architecture.",
 "alterTech": "",
 "image": "aglaePosicionador",
 "imageS": "aglaePosicionadorS",
 "imageAlt": "Picture of New Aglae, the C2RMF particle accelerator.",
 "logo": "c2rmf",
 "logoAlt": "C2RMF logo"
 },
 hacienda : {
 "id": "2",
 "institution": "EDS Mexico - SHCP",
 "title": "Account Manager – SHCP",
 "mission": "Outsourcing of all tax and customs IT operations, including application development. In fact, I was the CTO of the Tax and Customs Direction.",
 "context": "The ministry had done a failed outsourcing. EDS was called to redirect the situation.",
 "issue": "A haphazard and directionless outsourcing team of several hundred people. A fragmentary, insufficient and disconnected application architecture. Little support to functions such as audit. Non-existent coherent database.",
 "role": "Temporary CTO. First, basic administrative processes were put in place in order to stabilize the situation. With stable operations, a coherent and integral application architecture was proposed for the next five years. Developement of applications and operations were partially redirected.",
 "result": "Stable operations, with a clear five-year evolution based on a final architecture and a roadmap.",
 "stack": "Several architectures with no integral architectural vision , but based on open systems (mostly Hewlett Packard).",
 "alterTech": "",
 "image": "pesos",
 "imageS": "pesosS",
 "imageAlt": "Picture of Mexican coins and bills.",
 "logo": "shcp",
 "logoAlt": "SHCP logo"
 },
 aeromex : {
 "id": "3",
 "institution": "EDS Mexique",
 "title": "CTO Aeromexico",
 "mission": "Architecture design and partial IT operations for the Aeromexico airline.",
 "context": "Aeromexico decides to outsource its IT operations. EDS obtains the winning bid against IBM.",
 "issue": "Opération inefficace avec des applications obsolètes qui ne permet pas optimiser les routes des vols.",
 "role": "Design and operation of the Mexican part of the IT infrastructure.",
 "result": "IT cost reduction of 10% for the client. Airfare optimization with a modern application, based on flight history.",
 "stack": "Mainframe SABRE system in the US. Rest of operations in Mexico with Sun Microsystems.",
 "alterTech": "",
 "image": "avion",
 "imageS": "avionS",
 "imageAlt": "Picture of a flying Aeromexico airplane",
 "logo": "aeromex",
 "logoAlt": "Aeromexico logo"
 },
 ife : {
 "id": "4",
 "institution": "Booz Allen",
 "title": "Senior Associate (tech lead and project manager)",
 "mission": "Two electoral applications: voter registry and electoral result counting developed on new technology in record time.",
 "context": "Total renewal of the voter registry database one year prior to the election. Complex political situation with a suspecting opposition who did not trust the applications, given past electoral fraud history",
 "issue": "Application developement in record time without the possibility of missing the deadline. Significant volume of data (50 million records) in an imposed architecture never before tested. No previous team; it was necessary to create both team and methodologies. Primitive telecommunication innfrastructure making it hard to access the distributed data.",
 "role": "Chef de projet de développement des applications.",
 "result": "Applications livré en temps. Base de données totalement renouvelée et fiable. Nouvelle identification de citoyens qu'on utilise toujours trente ans après.",
 "stack": "AIX,Oracle, C",
 "alterTech": "",
 "image": "IFE",
 "imageS": "IFES",
 "imageAlt": "Image de carte d'électeur du Mexique",
 "logo": "boozAllen",
 "logoAlt": "Logo de Booz Allen"
 },
 garota :{
 "id": "5",
 "institution": "CNRS – Ipanema",
 "title": "Ingénieur d’étude",
 "mission": "Automatisation d'un monochromateur Horiba en utilisant une des lignes de lumière du synchrotron Soleil.",
 "context": "Le plus grand synchrotron de troisième génération en France, Soleil. Dizaines d'expériences sur différentes lignes de lumière (visible, rayons X, ultraviolet, etc.)",
 "issue": "Les expériences sur la ligne de lumière doivent changer la configuration du monochromateur manuellement, en permettant l'automatisation et forçant les chercheurs à l'attention constante sur l'expérience, même de nuit.",
 "role": "Consultant senior / tech-lead. Définition de l’architecture des applications avec le contrainte des pilotes (drivers) existants. Choix technologiques, développement de l'application.",
 "result": "Application livrée en production, stable et performant, équipe autonome pour les évolutions futures.",
 "stack": "C++, MicroManager (outil propriétaire), Windows",
 "alterTech": "",
 "image": "soleil",
 "imageS": "soleilS",
 "imageAlt": "Image du synchrotron Soleil à Gif-sur-Yvette",
 "logo": "ipanema",
 "logoAlt": "Logo de Ipanema"
 },
}

const fields = {
    mission: "Mission", 
    context: "Context", 
    issue: "Issue", 
    role: "Role", 
    result: "Result", 
    stack: "Stack",
    alterTech: "Other technologies"}

const slides = {
 confiance :{
    "id" : "0",
    "concept" : "They have trusted us",
    "source" : "{ large: confianceL, medium: confianceM, small: confianceS }",
    "alt": "Logos des entreprise où Luis Arean a fait ses services."
    },
 wordcloud :{
    "id" : "1",
    "concept" : "",
    "source" : "{ large: wordcloudL, medium: wordcloudM, small: wordcloudS }",
    "alt": "Nuage de compétences qu'on vous offrit."
    }
}

const elementNames = {
    name: "Name",
    name_placeholder: "Last name, first name",
    email: "Email",
    message: "Message",
    message_placeholder: "Write your message here",
    send_button: "Send",
    success: "Message sent successfully",
    failure: "There was an error.",
    more_button: "More",
    less_button: "Less"

}

export default {sectionTitles, sectionTitlesAria, hero, legend, aboutText, serve, slides, fields, missions, elementNames}