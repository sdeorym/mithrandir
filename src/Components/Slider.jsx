/* import aglae from "../assets/images/slider/01-aglae.avif";
import synchrotron from "../assets/images/slider/02-synchrotron.avif";
import jeanZay from "../assets/images/slider/03-JeanZay.avif";
import motors from "../assets/images/slider/04-gm.avif";
import aircraft from "../assets/images/slider/05-aeromexico.avif";*/
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import '../styles/Slider.css'
import confiance from "../assets/images/slider/00-nube-logos.avif";
import wordcloud from "../assets/images/slider/01-wordcloud.avif";
import Button from "../DRY/Button"

function Slider() {
    const [slide, setSlide] = useState(0);


    const slides = [
        {
            "id" : "0",
            "concept" : "Ils nous ont fait confiance",
            "source" : confiance,
            "alt": "Logos des entreprise où Luis Arean a fait ses services."
        },
        {
            "id" : "1",
            "concept" : "",
            "source" : wordcloud,
            "alt": "Nuage de compétences qu'on vous offrit."
        }
    ]
        /*
        {
            "id" : "1",
            "concept" : "Automatisation optimale",
            "source" : aglae,
            "alt": "AGLAE et positionateur du C2RMF."
        },
        {
            "id" : "2",
            "concept" : "Architecture",
            "source" : synchrotron,
            "alt": "Synchrotron Soleil à Gif-sur-Yvette."
        },
        {
            "id" : "3",
            "concept" : "Refonte",
            "source" : jeanZay,
            "alt": "Le supercalculateur dans le centre Idris du CNRS."
        },
        {
            "id" : "4",
            "concept" : "Audit informatique",
            "source" : motors,
            "alt": "Usine automobile General Motors"
        },
        {
            "id" : "5",
            "concept" : "Reconduction / MVP",
            "source" : aircraft,
            "alt": "Avion aeromexico survole les montagnes."
        }
    ]
    const nextCard = () => { 
        setTimeout( () => setIndex(index < (slides.length - 1) ? index+1 : 0), 3000 );}; 
    useEffect(() => { nextCard(); }, [index]);*/

    function goNext() {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1)
    }

    function goPrevious() {
        setSlide(slide === 0 ?   slides.length - 1 : slide - 1 )
    }


    return (
        <>
            <div className="slideShow">
                    <span className="arrows">
                        <Button onClick={goPrevious} classname={"arrows leftie"} buttonType="button" title={<FontAwesomeIcon icon={ faAngleLeft } alt="<=" size="3x" /> } />
                        <Button onClick={goNext} classname={"arrows rightie"} buttonType="button" title={<FontAwesomeIcon icon={ faAngleRight } alt="=>" size="3x" />} />
                    </span>
                <div className="sliderWindow">
                    <span>{slides[slide].concept}</span>
                    <img src={slides[slide].source} alt={slides[slide].alt}></img>
                </div>                        
            </div>            
        </>
    )

}
export default Slider