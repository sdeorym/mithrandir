import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import '../styles/Slider.css'
import confianceL from "../assets/images/slider/NubeLogos.webp";
import confianceM from "../assets/images/slider/NubeLogosM.webp";
import confianceS from "../assets/images/slider/NubeLogosS.webp";
import wordcloudL from "../assets/images/slider/WordCloud.webp";
import wordcloudM from "../assets/images/slider/WordCloudM.webp";
import wordcloudS from "../assets/images/slider/WordCloudS.webp";
import Button from "../DRY/Button"

function Slider() {
    const [slide, setSlide] = useState(0);


    const slides = [
        {
            "id" : "0",
            "concept" : "Ils nous ont fait confiance",
            "source" : { large: confianceL, medium: confianceM, small: confianceS },
            "alt": "Logos des entreprise où Luis Arean a fait ses services."
        },
        {
            "id" : "1",
            "concept" : "",
            "source" : { large: wordcloudL, medium: wordcloudM, small: wordcloudS },
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
                        <Button onClick={goPrevious} aria={"Précédent"} classname={"arrow"} buttonType="button" title={<FontAwesomeIcon icon={ faAngleLeft } alt="<=" size="3x" /> } />
                        <Button onClick={goNext} aria={"Suivant"} classname={"arrow"} buttonType="button" title={<FontAwesomeIcon icon={ faAngleRight } alt="=>" size="3x" />} />
                    </span>
                <div className="sliderWindow">
                    <span>{slides[slide].concept}</span>
                    <picture>
                        <source srcSet={slides[slide].source.large} media="(min-width: 1025px)" />
                        <source srcSet={slides[slide].source.medium} media="(min-width: 769px) and (max-width: 1024px)" />
                        <source srcSet={slides[slide].source.small} media="(max-width: 768px)" />
                        <img src={slides[slide].source.large} alt={slides[slide].alt} />
                    </picture>
                </div>                        
            </div>            
        </>
    )

}
export default Slider