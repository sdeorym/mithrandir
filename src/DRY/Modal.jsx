import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"

function Modal({opened, Content, children}) {
    const [isOpened, setIsOpened] = useState(opened);
/*                         <button
                            type="button"
                            data-testid="close-modal"
                            
                        >
                            <FontAwesomeIcon icon={ faX } className="closing-icon" />
                        </button>*/
    return (
        <>  
            {children({ isOpened, setIsOpened })}
            {isOpened && (
                <div className="overlay">
                    <div className="modal">
                        <div className="info">                            
                            <Button 
                                buttonType="button"
                                dataTestId="close-modal"
                                onClick={() => setIsOpened(false)}
                                title={<FontAwesomeIcon icon={ faX } className="closing-icon"/>}
                                classname="iconBlue iconButton"
                                />
                            {Content}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Modal.defaultProps = {opened: false}

export default Modal;