import { useEffect, useState } from "react";
import confiance from "../assets/images/slider/00-nube-logos.avif"; 
import aglae from "../assets/images/slider/01-aglae.avif";
import synchrotron from "../assets/images/slider/02-synchrotron.avif";
import jeanZay from "../assets/images/slider/03-JeanZay.avif";
import motors from "../assets/images/slider/04-gm.avif";
import aircraft from "../assets/images/slider/05-aeromexico.avif";

function Slider() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            "id" : "0",
            "concept" : "Ils nous ont fait confiance",
            "source" : confiance,
            "alt": "Logos des entreprise où Luis Arean a fait ses services."
        },
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
    useEffect(() => { nextCard(); }, [index]);

    return (
        <>
            <div className="slideShow">
                {slides.map ((s) =>                               
                    <div key={s.id} className={`sliderWindow sliderWindow--${Number(s.id) === index ? "display" : "hide"}`}>
                        <span>{s.concept}</span>                    
                        <img src={s.source} alt={s.alt}></img>
                    </div>
                )}            
            </div>            
        </>
    )

}
export default Slider