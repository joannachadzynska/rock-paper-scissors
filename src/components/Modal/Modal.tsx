import * as React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
    if (!isOpen) return null;
    return createPortal(
        <div className='modal'>
            <div className='modal-overlay'>
                <div className='modal-content'>{children}</div>
                <button className='close-btn' onClick={handleClose}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'>
                        <path
                            fill='#3B4262'
                            fillRule='evenodd'
                            d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
                            opacity='.25'
                        />
                    </svg>
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
