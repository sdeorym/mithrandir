import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import '../styles/Hero.css'

function Hero() {
    const { t } = useTranslation();
    return (
        <div className="#hero">
            <h2>{t("hero.title")}</h2>
            <p>{t("hero.first_paragraph")}</p>
            <br />
            <p>{t("hero.second_paragraph")}</p>
        </div>
    )
}

export default Hero