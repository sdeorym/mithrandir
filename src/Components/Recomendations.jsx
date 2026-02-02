import Quote from "../DRY/Quote"

function Recomendations() {
    const quotes = [
        {
            "id": "0",
            "author": "Armando Justo, ancien collègue à EDS.",
            "quote": "Luis Fernando Arean possesses a unique combination of skills that are difficult to find in today´s business executives. His superior analytical abilities combined with many years of work experience allow him to implement innovative actions to deliver results while creating organizational capabilities needed for future growth. Luis held various executive positions in EDS. Among many important achievements, Luis helped implement a major organizational development effort to create a learning organization. His authenticity and strong ethical values were the source of commitment and inspiration for others. He demonstrated that sustained business results can only be achieved through committed people that are continuously learning and changing in today´s business environment.Luis Fernando Arean possesses a unique combination of skills that are difficult to find in today´s business executives. His superior analytical abilities combined with many years of work experience allow him to implement innovative actions to deliver results while creating organizational capabilities needed for future growth. Luis held various executive positions in EDS. Among many important achievements, Luis helped implement a major organizational development effort to create a learning organization. His authenticity and strong ethical values were the source of commitment and inspiration for others. He demonstrated that sustained business results can only be achieved through committed people that are continuously learning and changing in today´s business environment."
        },
        {
            "id": "1",
            "author": "Enrique Kuttemplon, ancien collègue à EDS.",
            "quote": "I worked for Luis over 4 years when I was with EDS. Luis is a very talented person, his vision of life, his deep and divers knowledge of so many aspects of technology, business, and general knowledge, makes him one of the most admirable person I ever worked for. His best asset is his ability to understand complex business processes and translate them into practical IT solutions."
        },
        {
            "id": "2",
            "author": "Alejandro Moreno Arózqueta, ancien collègue à Booz Allen",
            "quote": "Luis Fernando has an innate ability to analyze any problem or issue, from the business as well as technology perspectives, and in addition, he can envision and communicate the potential solutions, and to take them from concept to reality successfully. I am looking forward to work with him again."
        },
        {
            "id": "3",
            "author": "Wayne Crawford, Responsable sismologie marine mobile, IPGP-CNRS",
            "quote": "M. Arean avait pour mission de rendre professionnel un logiciel conçu par un chercheur pour générer des métadonnées sismologiques. Il a effectué un travail rigoureux et attentif, ce qui a permis au logiciel de mieux respecter les standards et de devenir plus simple à comprendre et à modifier. Il a su établir une bonne communication avec l'équipe et les partenaires utilisant cet outil, dans le but de l'optimiser au maximum. Il a aussi mis en place une documentation accessible et compréhensible sur ce logiciel. Je suis très content de son travail."
        },
        /*{
            "id": "4",
            "author": "Paul Simon",
            "quote": "Hello darkness my old friend, I've come to talk to you again."
        }*/
    ]
    return (
    <>
        <h2>Recomendations</h2>    
        <h3>Ce qu'ils ont dit de ma performance</h3>
        <div className="quoteBox">
            {quotes.map((q, i) => 
                <div className="quoting" key={i}>
                    <Quote 
                        quote = {q.quote}
                        author = {q.author} 
                    />
                </div>
            )}
        </div>
    </>
)}

export default Recomendations