import Card from "../DRY/Card"
import Modal from "../DRY/Modal"
import MissionModal from "../DRY/MissionModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CNRS from "../assets/images/modal/logo/cnrs.avif";
import c2rmf from "../assets/images/modal/logo/c2rmf.avif";
import shcp from "../assets/images/modal/logo/shcp.avif";
import aeromex from "../assets/images/modal/logo/aeromexico.avif";
import boozAllen from "../assets/images/modal/logo/boozAllen.avif";
import ipanema from "../assets/images/modal/logo/ipanema.avif"
import idrisS from "../assets/images/modal/cardImages/small/cnrsIdris.avif";
import idris from "../assets/images/modal/cardImages/normal/cnrsIdris.avif";
import aglaePosicionadorS from "../assets/images/modal/cardImages/small/c2rmf.avif";
import aglaePosicionador from "../assets/images/modal/cardImages/normal/c2rmf.avif"
import pesosS from "../assets/images/modal/cardImages/small/shcp.avif";
import pesos from "../assets/images/modal/cardImages/normal/shcp.avif";
import avionS from "../assets/images/modal/cardImages/small/aeromexico.avif";
import avion from "../assets/images/modal/cardImages/normal/aeromexico.avif";
import IFES from "../assets/images/modal/cardImages/small/boozAllen.avif";
import IFE from "../assets/images/modal/cardImages/normal/boozAllen.avif";
import soleilS from "../assets/images/modal/cardImages/small/ipanema.avif"
import soleil from "../assets/images/modal/cardImages/normal/ipanema.avif"

function Missions() {
    const missions = [
        {
            "id": "0",
            "institution": "CNRS – IDRIS",
            "title": "Ingénieur d’étude, tech lead et chef de projet",
            "mission": "Conception et livraison d’une application Python-Django pour la gestion des projets et utilisateurs sur le supercalculateur Jean Zay.",
            "context": "Un environnement très sécurisé pour l'accès au supercalculateur. Culture 'batch' (les jobs d'un supercalculateur sont toujours en lot). Environnement de projets en flux constant, avec des besoins changeants.",
            "issue": "Une application legacy avec une interface web minimale et 30+ processus en lot pour mettre à jour la base de données. Aucune mise à jour immédiate, en ligne. Peu d'outils en ligne pour l'utilisateur final. Bases de données répliquées sans nécessité. Langage obsolète: Perl.",
            "role": "Consultant senior / tech-lead. Définition de l’architecture, choix technologiques, structuration du backend Python et du frontend, mise en place des méthodologies de développement et d'un environnement DevOps qui n'existait pas. Développement du 90% du code. Automatisation de tests en utilisant pytest. Workflow configurable dans le backend.",
            "result": "Application livrée en production, performant. Réduction des délais de workflow d'approbation de quelques jours a moins de 24h. Base saine, maintenable et bien documentée, équipe autonome pour les évolutions futures.",
            "stack": "Python Django RDF PostgresSQL Docker Apache Ubuntu",
            "alterTech": "RabbitMQ, LDAP, OAuth2",
            "image": idris,
            "imageS": idrisS, 
            "imageAlt": "Image du supercalculateur Jean Zay",
            "logo": CNRS,
            "logoAlt": "Logo du CNRS"
        },
        {
            "id": "1",
            "institution": "CNRS – C2RMF (Louvre)",
            "title": "Ingénieur d’étude, tech lead et chef de projet",
            "mission": "Conception et livraison d’une application qui automatise un positionneur 3D pour l'accélérateur de particules du Louvre, New Aglae.",
            "context": "L'accélérateur de particules du C2RMF (Louvre) est utilisé par les chercheurs pour analyser des oeuvres d'art du point de vue des matériaux.",
            "issue": "Le détecteur est adéquat pour des tableaux (2D), parce que le faisceau de l'accélérateur doit être perpendiculaire à la surface analysée. Mais en cas des statues ou objets d'art tridimensionnels il y a un problème d'orthogonalité dû aux surfaces irrégulières qui ne s'alignent pas toujours avec le faisceau. La solution doit être économique et complètement automatisée (pas question de changer manuellement la position de l'objet chaque fois). L'architecture doit s'aligner avec l'architecture existante des applications de l'accélérateur.",
            "role": "Consultant senior / tech-lead et chef de projet. Définition de l’architecture technique, choix technologiques, sélection des éléments du positionneur avec un concours public. Développement de l'application de contrôle avec une interface graphique.",
            "result": "Choix d'un positionneur hexapode capable de positionner le plupart des objets d'une façon plus économique un bras robot. (dizaine de milliers d'euros versus millions). Développement d'une application avec une interface avec un scanner qui numérise une carte de l'objet sous analyse, Utilisation des modèles de rotation basés sur les angles d'Euler pour faire l'hexapode suivre la carte. Application livrée en production, performante et économique. L'automatisation permet maintenant l'utilisation 24h sur 24 de l'accélérateur, optimisant sa vie technique.",
            "stack": "Outils propriétaires sur Windows, en particulier LabView, qui s'interface avec le reste de l'architecture de New Aglae.",
            "alterTech": "",
            "image": aglaePosicionador,
            "imageS": aglaePosicionadorS,
            "imageAlt": "Image de Aglae, accélérateur de particles du C2RMF.",
            "logo": c2rmf,
            "logoAlt": "Logo du C2RMF"
        },
        {
            "id": "2",
            "institution": "EDS Mexico - SHCP",
            "title": "Account Manager – SHCP",
            "mission": "Outsourcing de toutes les opérations des impôts et douanes, développement des applications inclus. En fait, j'étais le CTO de la Direction des impôts et douanes.",
            "context": "Le ministère a fait un outsourcing raté de ses opérations. EDS était appelé pour corriger la situation.",
            "issue": "Une équipe d'outsourcing de plusieurs centaines de personnes, de bas niveau, avec une architecture d'applications décousue et insuffisante.",
            "role": "CTO temporaire. On a commencé par mettre en place des processus administratifs basiques pour stabiliser la situation. Avec les opérations stables, on a proposé une architecture intégrale et on a reconduit partiellement les développements et les opérations.",
            "result": "Une opération stable, avec une évolution claire basé en un 'roadmap' à cinq ans.",
            "stack": "Plusieurs architectures sans une vision intégrale, mais basé en systèmes ouverts (surtout Hewlett Packard).",
            "alterTech": "",
            "image": pesos,
            "imageS": pesosS,
            "imageAlt": "Image de monnaie et billets du Méxique.",
            "logo": shcp,
            "logoAlt": "Logo de SHCP"
        },
        {
            "id": "3",
            "institution": "EDS Mexique",
            "title": "CTO Aeromexico",
            "mission": "Participant principal dans la conception de l’architecture et opération de l’infrastructure de la ligne aérienne Aeromexico.",
            "context": "Aeromexico décide de faire un outsourcing de ses opérations. EDS gagne le concours contre IBM.",
            "issue": "Opération inefficace avec des applications obsolètes qui ne permet pas optimiser les routes des vols.",
            "role": "Conception et opération de la partie mexicaine de l’infrastructure de TI.",
            "result": "Réduction de coûts d’informatique en un 10%. Optimisation des routes avec un plan de tarification nouveau, basé en l’histoire de vols précédents.",
            "stack": "Système de réservations mainframe SABRE aux États Unis, le reste de l’opération dans notre centre au Mexique avec systèmes Sun.",
            "alterTech": "",
            "image": avion,
            "imageS": avionS,
            "imageAlt": "Image d'avion d'Aeromexico en vol",
            "logo": aeromex,
            "logoAlt": "Logo de Aeromexico"
        },
        {
            "id": "4",
            "institution": "Booz Allen",
            "title": "Senior Associate (tech lead et chef de projet)",
            "mission": "Deux applications électorales : registre de électeurs et comptabilisation des voix développés en technologie nouvelle dans un temps record.",
            "context": "Renouvellement total de la base de données des électeurs un an avant les élections. Situation politique compliquée avec l'opposition très méfiante des applications électorales, du à une histoire passé de fraudes électorales",
            "issue": "Développement des applications en temps record sans pouvoir rater les dates de livraison. Volume significatif de données (50 millions de fiches) dans un architecture jamais testé avant à ce niveau. Aucune équipe précédente, il a fallu créer l'équipe à partir de zéro. Infrastructure primitive (aucun moyen de communication de données entre les bureaux distribués).",
            "role": "Chef de projet de développement des applications.",
            "result": "Applications livré en temps. Base de données totalement renouvelée et fiable. Nouvelle identification de citoyens qu'on utilise toujours trente ans après.",
            "stack": "AIX,Oracle, C",
            "alterTech": "",
            "image": IFE,
            "imageS": IFES,
            "imageAlt": "Image de carte d'électeur du Mexique",
            "logo": boozAllen,
            "logoAlt": "Logo de Booz Allen"
        },
        {
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
            "image": soleil,
            "imageS": soleilS,
            "imageAlt": "Image du synchrotron Soleil à Gif-sur-Yvette",
            "logo": ipanema,
            "logoAlt": "Logo de Ipanema"
        },
    ]
    /*<Modal key={mission.id} Content={<MissionModal mission={mission} />}>
            {({setIsOpened}) => ( 
              <Card 
                onClick={() => setIsOpened(true)}
                institution={mission.institution}
                title={mission.title}
                mission={mission.mission}
                image={mission.imageS}
                imageAlt={mission.imageAlt}
                logo={mission.logo}
                logoAlt={mission.logoAlt}
              />
            )}
          </Modal>*/

    /*(<div key={mission.id}>
            <Card 
              onClick={() => setIsOpened(true)}
              institution={mission.institution}
              title={mission.title}
              mission={mission.mission}
              image={mission.imageS}
              imageAlt={mission.imageAlt}
              logo={mission.logo}
              logoAlt={mission.logoAlt}
            />
          </div>)*/
  return (
    <>
      <h2>Nos missions</h2>
      <div className="missionBoard">
        {missions.map(mission => 
        <Modal key={mission.id} Content={<MissionModal mission={mission} />}>
            {({setIsOpened}) => ( 
              <Card 
                onClick={() => setIsOpened(true)}
                institution={mission.institution}
                title={mission.title}
                mission={mission.mission}
                image={mission.imageS}
                imageAlt={mission.imageAlt}
                logo={mission.logo}
                logoAlt={mission.logoAlt}
                icon={faPlus}
              />
            )}
          </Modal>)}
      </div>
    </>
  )
}

export default Missions