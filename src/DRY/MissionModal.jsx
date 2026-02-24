import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
function MissionModal({mission}) {
    const { t } = useTranslation();
    const fields=[t("fields.mission"), t("fields.context"), t("fields.issue"), t("fields.role"), t("fields.result"), t("fields.stack")]

    return (
        <>  
            <section className="missionDescription">     
                <div className="missionHead">
                    <img src={mission.image} alt={mission.imageAlt}></img>
                    <div className="infoTitle">
                        <img src={mission.logo} alt={mission.logoAlt} className="photoCenter"></img>
                        <span className="whereAbouts">{mission.institution}</span>
                    </div>
                </div>
                <div className="missionExplain">
                    <p><b>{fields[0]}</b><br />{mission.mission}</p>
                    <p><b>{fields[1]}</b><br />{mission.context}</p>
                    <p><b>{fields[2]}</b><br />{mission.issue}</p>
                    <p><b>{fields[3]}</b><br />{mission.role}</p>
                    <p><b>{fields[4]}</b><br />{mission.result}</p>
                    <p><b>{fields[5]}</b><br />{mission.stack}</p>
                    {(mission.alterTech!='') ? <p><b>{t("fields.alterTech")}</b><br />{mission.alterTech}</p>:<p></p>} 
                </div>            
            </section> 
        </>
    )
}

export default MissionModal;