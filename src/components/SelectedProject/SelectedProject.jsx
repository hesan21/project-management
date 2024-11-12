import Tasks from "../Tasks/Tasks";

const SelectedProject = ({project, handleCloseProject, handleProjectDelete, handleTaskAdd, handleTaskDelete}) => {
    const formattedDate = new Date(project.dueDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <div>
                    <button className="px-4 py-2" onClick={handleCloseProject}>Close</button>
                    <button className="bg-red-600 hover:bg-red-800 px-4 py-2 rounded-md text-stone-200" onClick={() => handleProjectDelete(project.id)}>Delete</button>
                    </div>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="mb-4 text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks
                handleTaskAdd={handleTaskAdd}
                handleTaskDelete={handleTaskDelete}
                project={project} />
        </div>
    )
}

export default SelectedProject;