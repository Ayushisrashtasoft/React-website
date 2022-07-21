import React, { useState } from 'react'
import "./Modal.scss"

function Modal({ handleMdl }) {

    const [closeModal, isCloseModal] = useState(true)

    if (handleMdl !== closeModal) {
        isCloseModal(false)
    }
    


    return (
        <>
            <div className={`closeModal ? "d-none" : "d-block"`}>modal
                <button>x</button>
            </div>
        </>

    )
}

export default Modal