import luis from "../assets/images/luis.avif"

function About() {
    return (
        <>
            <h2>À propos</h2>
            <div className="all-about">
                <div className="photo-frame">
                    <div className="frame">
                        <img src={luis} alt="Luis Arean, consultant"></img>
                    </div>
                    <div className="about-par">
                        <p>J’interviens aussi bien en renfort opérationnel du dévéloppement Python / React que sur des missions de cadrage, d’audit ou de reprise de projets existants (legacy, dette technique, performance, sécurité).</p>
                        <p>Habitué à travailler avec des équipes produit et techniques, avec plusieurs technologies et méthodologies, je privilégie les solutions pragmatiques, maintenables et orientées impact métier sur les approches dogmatiques qui abondent dans ce métier.</p>
                        <p>Comme philosophie de travail, je suis fortement orientée vers le « software craftmanship », l’artisanat logiciel, un approche qui met l’accent sur les compétences de l’équipe et sur la formation de communautés, ayant comme résultat des applications pas simplement opérationnelles mais bien conçus.</p>
                        <p className="interventions">Mes contextes d’intervention typiques :</p>                
                        <ul className="interventions">
                            <li>Projets en difficulté ou en retard</li>
                            <li>Dette technique élevée</li>
                            <li>Passage à l’échelle (performance, fiabilité)</li>
                            <li>Structuration d’une équipe ou d’un socle technique</li>
                            <li>Passage d’un MVP à un produit robuste (fiabilité, sécurité)</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About