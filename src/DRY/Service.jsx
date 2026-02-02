function Service({service, content}) {

    return(
        <>
            <div className="serving-details">
                <h4>{service}</h4>
                <p>{content}</p>
            </div>
        </>
    )
}

export default Service