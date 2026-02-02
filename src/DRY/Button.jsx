function Button({value, title, classname, buttonType, dataTestId, onClick}) {

    return (
        <>
            <button value={value} className={classname} type={buttonType} data-testid={dataTestId} onClick={onClick}>{title}</button>
        </>
    )
}

export default Button