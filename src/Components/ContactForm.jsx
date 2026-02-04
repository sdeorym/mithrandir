import TextBox from "../DRY/TextBox"
import Button from "../DRY/Button"

function ContactForm() {
    
    return (
        <>
            <div className="contactForm">
                <TextBox />
                <Button />
            </div>
        </>
    )
}

export default ContactForm