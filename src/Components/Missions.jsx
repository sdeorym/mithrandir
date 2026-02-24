import '../styles/Missions.css'
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
import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import soleilS from "../assets/images/modal/cardImages/small/ipanema.avif"
import soleil from "../assets/images/modal/cardImages/normal/ipanema.avif"

function Missions() {
  const { t } = useTranslation();
  const missions = [
      {
          "id": "0",
          "institution": t("missions.nidaba.institution"),
          "title": t("missions.nidaba.title"),
          "mission": t("missions.nidaba.mission"),
          "context": t("missions.nidaba.context"),
          "issue": t("missions.nidaba.issue"),
          "role": t("missions.nidaba.role"),
          "result": t("missions.nidaba.result"),
          "stack": "Python Django RDF PostgresSQL Docker Apache Ubuntu",
          "alterTech": "RabbitMQ, LDAP, OAuth2",
          "image": idris,
          "imageS": idrisS, 
          "imageAlt": t("missions.nidaba.imageAlt"  ),
          "logo": CNRS,
          "logoAlt": t("missions.nidaba.logoAlt")
      },
      {
          "id": "1",
          "institution": t("missions.aglae.institution"),
          "title": t("missions.aglae.title"),
          "mission": t("missions.aglae.mission"),
          "context": t("missions.aglae.context"),
          "issue": t("missions.aglae.issue"),
          "role": t("missions.aglae.role"),
          "result": t("missions.aglae.result"),
          "stack": t("missions.aglae.stack"),
          "alterTech": "",
          "image": aglaePosicionador,
          "imageS": aglaePosicionadorS,
          "imageAlt": t("missions.aglae.imageAlt"),
          "logo": c2rmf,
          "logoAlt": t("missions.aglae.logoAlt")
      },
      {
          "id": "2",
          "institution": t("missions.hacienda.institution"),
          "title": t("missions.hacienda.title"),
          "mission": t("missions.hacienda.mission"),
          "context": t("missions.hacienda.context"),
          "issue": t("missions.hacienda.issue"),
          "role": t("missions.hacienda.role"),
          "result": t("missions.hacienda.result"),
          "stack": t("missions.hacienda.stack"),
          "alterTech": "",
          "image": pesos,
          "imageS": pesosS,
          "imageAlt": t("missions.hacienda.imageAlt"),
          "logo": shcp,
          "logoAlt": t("missions.hacienda.logoAlt")
      },
      {
          "id": "3",
          "institution": t("missions.aeromex.institution"),
          "title": t("missions.aeromex.title"),
          "mission": t("missions.aeromex.mission"),
          "context": t("missions.aeromex.context"),
          "issue": t("missions.aeromex.issue"),
          "role": t("missions.aeromex.role"),
          "result": t("missions.aeromex.result"),
          "stack": t("missions.aeromex.stack"),
          "alterTech": "",
          "image": avion,
          "imageS": avionS,
          "imageAlt": t("missions.aeromex.imageAlt"),
          "logo": aeromex,
          "logoAlt": t("missions.aeromex.logoAlt")
      },
      {
          "id": "4",
          "institution": t("missions.ife.institution"),
          "title": t("missions.ife.title"),
          "mission": t("missions.ife.mission"),
          "context": t("missions.ife.context"),
          "issue": t("missions.ife.issue"),
          "role": t("missions.ife.role"),
          "result": t("missions.ife.result"),
          "stack": t("missions.ife.stack"),
          "alterTech": "",
          "image": IFE,
          "imageS": IFES,
          "imageAlt": t("missions.ife.imageAlt"),
          "logo": boozAllen,
          "logoAlt": t("missions.ife.logoAlt")
      },
      {
          "id": "5",
          "institution": t("missions.garota.institution"),
          "title": t("missions.garota.title"),
          "mission": t("missions.garota.mission"),
          "context": t("missions.garota.context"),
          "issue": t("missions.garota.issue"),
          "role": t("missions.garota.role"),
          "result": t("missions.garota.result"),
          "stack": t("missions.garota.stack"),
          "alterTech": "",
          "image": soleil,
          "imageS": soleilS,
          "imageAlt": t("missions.garota.imageAlt"),
          "logo": ipanema,
          "logoAlt": t("missions.garota.logoAlt")
      },
  ]
  return (
    <>
      <h2>{t("sectionTitles.missions")}</h2>
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