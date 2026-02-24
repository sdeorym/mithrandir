import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import '../styles/Hero.css'

function Hero() {
    const { t } = useTranslation();
    const consultor=t("hero.consultor");
    const senior=t("hero.senior");
    const conjunction=t("hero.conjunction");
    const leader=t("hero.leader");
    const first=t("hero.first_paragraph");
    const main_role=t("hero.main_role");
    const debt=t("hero.debt");
    const second=t("hero.second_paragraph");

    return (
        <div id="#hero">
            <h2>{t("hero.title")}</h2>
            <p><b>{t("hero.consultor")}</b>, <b>{t("hero.senior")}</b> {t("hero.conjunction")} <b>{t("hero.leader")}</b>{t("hero.first_paragraph")}</p>
            <br />
            <p>{main_role} <i>{debt}</i>{second}</p>
        </div>
    )
}

export default Hero