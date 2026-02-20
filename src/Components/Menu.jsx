import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from "../DRY/Button"

function Menu() {
    const [open, setOpen] = useState(false);

    const buttonry = [
        {
            "id": "0",
            "value": "about",
            "title": "À propos",
            "hashtag": "#about",
            "aria" : "Section à propos"
        },
        {
            "id": "1",
            "value": "services",
            "title": "Nos services",
            "hashtag": "#services",
            "aria" : "Section Services"
        },
        {
            "id": "2",
            "value": "missions",
            "title": "Nos missions",
            "hashtag": "#missions",
            "aria" : "Section Missions"
        },
        {
            "id": "3",
            "value": "recommendations",
            "title": "Recommendations",
            "hashtag": "#recommendations",
            "aria" : "Section Recommendations"
        },
/*        {
            "id": "4",
            "value": "resumee",
            "title": "Resumee",
            "hashtag": "#resumee"
        },*/
        {
            "id": "5",
            "value": "contact",
            "title": "Contact",
            "hashtag": "#contact",
            "aria" : "Section Contact"
        }
    ]
    
    function handleClick(tag){
        window.location.hash = tag;
        setOpen(false);
    }

    return (
    <>  
        <div className="front">
            <div className="webtitle">
                <FontAwesomeIcon 
                    className="menu-icon" 
                    onClick={() => setOpen(!open)}
                    icon= {open ? faXmark : faBars}
                />
                <h1 className="title">
                    <a href="#">LPG Consulting</a>
                </h1>
            </div>

            {/* MENU DESKTOP */}
            <div className="desktop-menu">
                {buttonry.map((item) =>
                    <div className="taggingSections" key={item.id}>         
                        <Button 
                            value={item.value}
                            title={item.title}
                            onClick={() => (window.document.location.hash = item.hashtag)}
                            aria={item.aria}
                        />            
                    </div>)}
            </div>
            {/* MENU MOBILE */}
            {open && (
                <div className="mobile-menu">
                    {buttonry.map(item =>
                        <Button
                            key={item.id}
                            title={item.title}
                            classname="menu-mobile-button"
                            onClick={() => handleClick(item.hashtag)}
                        />
                    )}
                </div>)}
        </div>
    </>)
}

export default Menu;