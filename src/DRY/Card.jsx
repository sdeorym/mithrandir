import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function Card({institution, title, mission, image, logo, imageAlt, logoAlt, onClick, icon}) {
    const fields = ["Contexte", "Problématique", "Rôle", "Résultat", "Stack", "Autres Technologies"]

    return (
        <>
            <div className="modalCard" onClick={onClick}>
                <img className="tinyImage" src={image} alt={imageAlt}></img>
                <div className="whatIDid">
                    <p className="institution">{institution}</p>
                    <p className="description">{mission}</p>
                </div>
                <img className="tinyLogo" src={logo} alt={logoAlt}></img>
                <span className="iconBlue iconCard"><FontAwesomeIcon icon={faPlus} /></span>
            </div>
        </>
    )
}

export default Card