function Service({service, content}) {

    return(
        <>
            <div className="serving-details">
                <h3>{service}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}

export default Service