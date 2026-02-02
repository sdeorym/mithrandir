import Service from "../DRY/Service"

function Services() {
    const serve = [
        {
            "id" : "0",
            "service": (<>Audit technique</>),
            "content": (<>
                            Diagnostic rapide des risques et problèmes potentiels, avec des
                            recommandations pour réduire la dette technique.
                        </>)
        }, 
        {
            "id" : "1",
            "service": (<>Conception d’architecture</>),
            "content": (<>
                            Recommandations pragmatiques pour mettre en œuvre des architectures
                            qui évoluent douce et organiquement, guidées par le besoin réel plutôt
                            que par la mode.
                        </>)
        }, 
        {
            "id" : "2",
            "service": (<>Développement senior <b>Python (Django)</b> & <b>React</b></>),
            "content": (<>
                            Vision systémique des applications, les reliant au besoins du business,
                            maîtrise de la complexité, capacité de décision. autonomie et fiabilité.
                        </>)
        },
        {
            "id" : "3",
            "service": (<>Reprise et refactoring de code existant</>),
            "content": (<>
                            Orienté à projets complexes, en difficulté ou en retard, toujours avec 
                            une vision de l’impact business (performance, coûts, délais).</>)
        }, 
        {
            "id" : "4",
            "service": (<>Conception et sécurisation d’API</>),
            "content": (<>
                            L’API comme un contrat organisationnel à long terme. L’encapsulation
                            permet plusieurs développements en parallèle, clarté dans le
                            développement et vitesse d’évolution du produit avec stabilité à long
                            terme.
                        </>)
        }, 
        {
            "id" : "5",
            "service": (<>
                            Mise en œuvre de méthodologies et <i>bons pratiques</i>, <i>Code 
                            review</i></>),
            "content": (<>
                            Amélioration de la capacité collective à livrer avec fiabilité, 
                            prévisibilité et pragmatisme.</>)
        },
        {
            "id" : "6",
            "service": (<>Accompagnement équipes, <i>mentoring</i></>),
            "content": (<>
                            Emphase en la collectivité, pas les individus ; transmission du
                            raisonnement, apprentissage sur cas réels.</>)
        }, 
        {
            "id" : "7",
            "service": (<>Accompagnement CTO</>),
            "content": (<>
                            Amélioration de la capacité collective à livrer avec fiabilité, 
                            prévisibilité et pragmatisme.</>)
        }, 
    ]
    return (
        <>
            <h2>Nos services</h2>
            <h3>Ce qu'on peut faire pour vous</h3>
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