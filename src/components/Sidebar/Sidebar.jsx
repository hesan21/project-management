import Button from "../Button/Button";

const Sidebar = ({ handleNewProjectClick, handleProjectSelect, projects, activeProject }) => {

    const buttonClasses = "w-full text-left px-2 py-1 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
    const activeButtonClasses = "w-full text-left px-2 py-1 rounded-md my-1 text-stone-300 bg-stone-700";

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <div className="mb-8">
                <Button onClick={handleNewProjectClick}>+ Add New Project</Button>
            </div>

            <h2 className="font-bold uppercase md:text-xl text-stone-200">My Projects</h2>

            <ul className="mt-8">
                {
                    projects.map(project => <li key={project.id}>
                        <button onClick={() => handleProjectSelect(project.id)}
                            className={activeProject && activeProject.id === project.id ? activeButtonClasses : buttonClasses}>
                                {project.title}
                        </button>
                    </li>)
                }
            </ul>
        </aside>
    )
}

export default Sidebar;