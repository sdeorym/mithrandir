function Button({aria, data, value, title, classname, buttonType, dataTestId, onClick, disabled}) {

    return (
        <>
            <button value={value} aria-label={aria} className={classname} type={buttonType} data-testid={dataTestId} disabled={disabled} onClick={onClick}>{title}</button>
        </>
    )
}

export default Button