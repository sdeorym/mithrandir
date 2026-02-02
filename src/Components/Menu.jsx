import Button from "../DRY/Button"

function Menu() {
    const buttonry = [
        {
            "id": "0",
            "value": "about",
            "title": "À propos",
            "hashtag": "#about"
        },
        {
            "id": "1",
            "value": "services",
            "title": "Nos services",
            "hashtag": "#services"
        },
        {
            "id": "2",
            "value": "missions",
            "title": "Nos missions",
            "hashtag": "#missions"
        },
        {
            "id": "3",
            "value": "recomendations",
            "title": "Recomendations",
            "hashtag": "#recomendations"
        },
/*        {
            "id": "4",
            "value": "resumee",
            "title": "Resumee",
            "hashtag": "#resumee"
        },*/
        {
            "id": "5",
            "value": "contact",
            "title": "Contact",
            "hashtag": "#contact"
        }
    ]
    // <Button title={buttonry[0].title} />
    return (
    <>  
        <div className="front">
            <h1 className="title">
                <a href="#">LPG Consulting</a>
            </h1>            
            {buttonry.map((item) =>
                <div className="taggingSections" key={item.id}>         
                    <Button 
                        value={item.value}
                        title={item.title}
                        onClick={() => (window.document.location.hash = item.hashtag)}
                    />            
                </div>)}
        </div>
        <h2>L'expérience et la qualité d'une grande société de consulting à votre portée.</h2>        
    </>)
}

export default Menu;