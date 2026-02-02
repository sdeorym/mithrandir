function MissionModal({mission}) {

const fields=["Mission", "Context", "Issue", "Role", "Result", "Stack"]
/* {fields.map(field =>
                <div className="fieldInformation">
                    <p><b className="fieldTitle">{field}:</b> <span>{mission.{field}}
                    {isLong && (
                    <Button classname={"readMore"} onClick={() => setExpanded(!expanded)} title={expanded ? "Voir moins" : "Voir plus…"} /></span>
                )}</p>
                </div>
            )}*/

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
                <p><b>Mission</b><br />{mission.mission}</p>
                <p><b>Context</b><br />{mission.context}</p>
                <p><b>Issue</b><br />{mission.issue}</p>
                <p><b>Rôle</b><br />{mission.role}</p>
                <p><b>Result</b><br />{mission.result}</p>
                <p><b>Stack</b><br />{mission.stack}</p>
                {(mission.alterTech!='') ? <p><b>Autres technologies</b><br />{mission.alterTech}</p>:<p></p>} 
            </div>            
        </section> 
    </>
)
}

export default MissionModal;