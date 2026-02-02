import { useEffect, useState } from "react";

function Slider() {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            "id" : "0",
            "concept" : "Ils nous ont fait confiance",
            "source" : "../src/assets/images/slider/00-nube-logos.avif",
            "alt": "Logos des entreprise où Luis Arean a fait ses services."
        },
        {
            "id" : "1",
            "concept" : "Automatisation optimale",
            "source" : "../src/assets/images/slider/01-aglae.avif",
            "alt": "AGLAE et positionateur du C2RMF."
        },
        {
            "id" : "2",
            "concept" : "Architecture",
            "source" : "../src/assets/images/slider/02-synchrotron.avif",
            "alt": "Synchrotron Soleil à Gif-sur-Yvette."
        },
        {
            "id" : "3",
            "concept" : "Refonte",
            "source" : "../src/assets/images/slider/03-JeanZay.avif",
            "alt": "Le supercalculateur dans le centre Idris du CNRS."
        },
        {
            "id" : "4",
            "concept" : "Audit informatique",
            "source" : "../src/assets/images/slider/04-gm.avif",
            "alt": "Usine automobile General Motors"
        },
        {
            "id" : "5",
            "concept" : "Reconduction / MVP",
            "source" : "../src/assets/images/slider/05-aeromexico.avif",
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