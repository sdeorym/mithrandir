import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import '../styles/Services.css'
import Service from "../DRY/Service"

function Services() {
    const { t } = useTranslation();
    const serve = [
        {
            "id" : "0",
            "service": t("serve.service0.service"),
            "content": t("serve.service0.content")
        }, 
        {
            "id" : "1",
            "service": t("serve.service1.service"),
            "content": t("serve.service1.content")
        }, 
        {
            "id" : "2",
            "service": t("serve.service2.service"),
            "content": t("serve.service2.content")
        },
        {
            "id" : "3",
            "service": t("serve.service3.service"),
            "content": t("serve.service3.content")
        },
        {
            "id" : "4",
            "service": t("serve.service4.service"),
            "content": t("serve.service4.content")
        }, 
        {
            "id" : "5",
            "service": t("serve.service5.service"),
            "content": t("serve.service5.content")
        }, 
        {
            "id" : "6",
            "service": t("serve.service6.service"),
            "content": t("serve.service6.content")
        },
        {
            "id" : "7",
            "service": t("serve.service7.service"),
            "content": t("serve.service7.content")
        }, 
        {
            "id" : "8",
            "service": t("serve.service8.service"),
            "content": t("serve.service8.content")
        },
 
    ]
    return (
        <>
            <h2>{t("sectionTitles.services")}</h2>
            {serve.map((s) =>
                <div className ="serving" key={s.id}>
                    <Service 
                        service = {s.service}
                        content = {s.content}
                    />
                </div>
            )}
        </>
    )
}

export default Services