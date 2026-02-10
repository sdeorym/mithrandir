import { useState } from "react";
import Button from "./Button";

function ContactForm() {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value});
        console.log(formData, { ...formData, [name]: value});
    };

    async function sendMail(e) {
        e.preventDefault();
        const from_user="info";
        const from_domain="lpgconsulting.fr";
        const to_user="info.contact";
        const to_domain="peleringris.fr";
        const url="https://corsproxy.io?https://api.mailjet.com/v3.1/send";
        const pw="f811be8a3c63505666c60b81f616a030:86d62f30628442442516da94817522c6";
        const basicAuth = btoa(pw);
        const token="ZjgxMWJlOGEzYzYzNTA1NjY2YzYwYjgxZjYxNmEwMzA6ODZkNjJmMzA2Mjg0NDI0NDI1MTZkYTk0ODE3NTIyYzY=";
        const dataToSend={
            'Messages':[
                {
                    'From':{
                        'Email': from_user+"@"+from_domain,
                        'Name': 'LPG Consulting Webpage'
                    },
                    'To': 
                        [
                            {
                                'Email':to_user + "@" + to_domain,
                                'Name': 'LPG Consulting Webpage'
                            }
                        ],
                    'Subject': '[Webpage contact]',
                    'TextPart': 
                        {
                            'Name': "Chomosgón",
                            'Email': "chomosgon@wapakoneta.us",
                            'Message': "Uagadugu no se rinde"
                        }
                }
            ]
        };
        const x=JSON.stringify(dataToSend);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${basicAuth}`
                },
                body: JSON.stringify(dataToSend)
            });
            if (!response.ok) {
                throw new Error("Il y a eu une erreur.")
            }
            const result = response.json();
            console.log('Form data submitted:', result);
            }
        catch(error) {console.error('Error:', error)}
    };

    return (
        <>
            <form className="contactForm">
                <div className="textbox">
                    <label htmlFor="username">Nom</label>
                    <input type="name" id="username" name="username" onBlur={handleChange} required />
                </div>
                <div className="textbox">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" onBlur={handleChange} required />
                </div>
                <div className="textbox">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="15" onBlur={handleChange} required />
                </div>
                <Button
                    buttonType="submit" 
                    title="Envoyer" 
                    value="Send" 
                    disabled = {((formData.username=="") || (formData.email=="") /*|| (formData.message=="")*/) ? true : false} 
                    classname={((formData.username!="") && (formData.email!="") /*&& (formData.message!="")*/) ? "submit enabled" : "submit disabled"} 
                    data={formData}
                    onClick={sendMail} />                
            </form>
        </>
    )
}

export default ContactForm