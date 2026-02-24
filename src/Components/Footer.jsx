import { useTranslation } from "react-i18next";
function Footer() {
    const { t } = useTranslation();
    return(
        <>
            <p>© 2026 Le pèlerin gris.<br />
            Le copyright des images appartient aux respectives auteurs.</p>            
        </>
    )
}
export default Footer;