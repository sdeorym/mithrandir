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
        <div className="missionHead">
            <img src={mission.image} alt={mission.imageAlt}></img>
            <div className="infoTitle">
                <img src={mission.logo} alt={mission.logoAlt} className="photoCenter"></img>
                {mission.institution}
            </div>
        </div>
        <div className="missionExplain">
            <p>{mission.mission}</p>
            <p>{mission.context}</p>
            <p>{mission.issue}</p>
            <p>{mission.role}</p>
            <p>{mission.stack}</p>
            <p>{mission.alterTech}</p>
        </div>            
        
    </>
)
}

export default MissionModal;