import '../styles/Contact.css'
import { useState } from "react";
import ContactForm from "../DRY/ContactForm.jsx";

function Contact() {
    const [showModal, setShowModal] =useState(false);
    return (
        <>
            <h2>Contactez-nous</h2>
            <ContactForm stateModal={showModal} changeStateModal={setShowModal} />
        </>
    )
}

export default Contact