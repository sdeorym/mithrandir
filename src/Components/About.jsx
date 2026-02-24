import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import '../styles/About.css'
import luis from "../assets/images/luis.avif"

function About() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("sectionTitles.about")}</h2>
            <div className="all-about">
                <div className="photo-frame">
                    <div className="frame">
                        <img src={luis} alt="Luis Arean, consultant"></img>
                        <div className="footnote">
                            <span className="footName">Luis Arean</span><br />
                            <span>{t("legend")}</span>
                        </div>
                    </div>
                    <div className="about-par">
                        <p>{t("aboutText.first_paragraph")}</p>
                        <p>{t("aboutText.second_paragraph")}</p>
                        <p>{t("aboutText.third_paragraph")}</p>
                        <p className="interventions">{t("aboutText.interventions_title")}</p>                
                        <ul className="interventions">
                            <li>{t("aboutText.intervention_1")}</li>
                            <li>{t("aboutText.intervention_2")}</li>
                            <li>{t("aboutText.intervention_3")}</li>
                            <li>{t("aboutText.intervention_4")}</li>
                            <li>{t("aboutText.intervention_5")}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About