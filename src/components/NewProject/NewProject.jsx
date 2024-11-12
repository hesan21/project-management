import { useRef } from "react";
import Input from "../Input/Input"
import Modal from "../Modal/Modal";

const NewProject = ({handleCancelProjectClick, handleSave}) => {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const onAdd = () => {
        if (title.current.value.trim() === ''
            || description.current.value.trim() === ''
            || dueDate.current.value.trim() === ''
        ) {
            modal.current.open();
            return;
        }
        const newProject = {
            id: Math.random(),
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value
        };

        handleSave(newProject);
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Data</h2>
                <p className="text-stone-600 mb-4">Please provide a correct value for all input fields.</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                        onClick={handleCancelProjectClick}
                        className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button 
                            onClick={onAdd}
                            className="px-6 py-2 rounded-lg bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>

                <div>
                    <Input label="Title" ref={title} />
                    <Input label="Description" textArea ref={description} />
                    <Input type="date" label="Due Date" ref={dueDate} />
                </div>

            </div>
        </>
    )
}

export default NewProject;