import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Switcher from "../DRY/Switcher";
import Button from "../DRY/Button"

function Menu() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const buttonry = [
        {
            "id": "0",
            "value": "about",
            "title": t("sectionTitles.about"),
            "hashtag": "#about",
            "aria" : t("sectionTitlesAria.about")
        },
        {
            "id": "1",
            "value": "services",
            "title": t("sectionTitles.services"),
            "hashtag": "#services",
            "aria" : t("sectionTitlesAria.services")
        },
        {
            "id": "2",
            "value": "missions",
            "title": t("sectionTitles.missions"),
            "hashtag": "#missions",
            "aria" : t("sectionTitlesAria.missions")
        },
        {
            "id": "3",
            "value": "recommendations",
            "title": t("sectionTitles.recommendations"),
            "hashtag": "#recommendations",
            "aria" : t("sectionTitlesAria.recommendations")
        },

        {
            "id": "5",
            "value": "contact",
            "title": t("sectionTitles.contact"),
            "hashtag": "#contact",
            "aria" : t("sectionTitlesAria.contact")
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
            <div className="taggingSections">
                {buttonry.map((item) =>
                    <div key={item.id}>         
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
            <Switcher />
        </div>
    </>)
}

export default Menu;