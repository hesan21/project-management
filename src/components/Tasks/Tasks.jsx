import { useRef } from "react";

const Tasks = ({ project, handleTaskAdd, handleTaskDelete }) => {
    const buttonClasses = "px-4 py-2 bg-stone-700 text-stone-200 rounded-md";
    const ref = useRef();
    
    const handleNewTask = () => {
        handleTaskAdd(project.id, ref.current.value);
        ref.current.value = '';
    }
    
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">Tasks</h2>
            </div>

            <div className="flex items-center gap-2">
                <input 
                    ref={ref}
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                /> 
                <button
                    onClick={handleNewTask}
                    className={buttonClasses}>Add</button>
            </div>

            <ul className="mt-10">
                {
                    project && project.tasks && project.tasks.length 
                    ? project.tasks.map(task => <li className="bg-stone-200 p-2 flex items-center justify-between mb-4">
                            <h5 className="">{task.title}</h5>
                            <button onClick={() => handleTaskDelete(project.id, task.id)} className="bg-red-600 hover:bg-red-800 px-2 py-1 rounded-md text-stone-200">Remove</button>
                        </li>)
                    : 'No Task Added'
                }
            </ul>
        </>
    )
}

export default Tasks;