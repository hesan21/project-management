import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

const Modal = forwardRef(
    ({children, buttonCaption}, ref) => {
        const dialog = useRef();

        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal()
                }
            }
        });

        return createPortal(
            <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-sm">
                {children}
                <form method="dialog" className="text-right">
                    <Button>{buttonCaption}</Button>
                </form>
            </dialog>,
            document.getElementById('modal-root')
        );
    }
);

export default Modal;