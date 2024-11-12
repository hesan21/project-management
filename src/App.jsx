import { useState } from "react";
import NewProject from "./components/NewProject/NewProject";
import NoProject from "./components/NoProject/NoProject";
import Sidebar from "./components/Sidebar/Sidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {
    const [selectedProjectState, setSelectedProjectState] = useState({
        selectedProject: undefined,
        projects: []
    });

    const handleSaveProject = (newProject) => {
        setSelectedProjectState(prevState => {
            return  {
                selectedProject: undefined,
                projects: [
                    ...prevState.projects,
                    newProject
                ]
            };
        });
    }

    const handleCreateNewProject = () => {
        setSelectedProjectState(prevState => {
            return  {
                ...prevState,
                selectedProject: null
            };
        });
    };

    const handleCancelNewProject = () => {
        setSelectedProjectState(prevState => {
            return  {
                ...prevState,
                selectedProject: undefined
            };
        });
    };

    const handleProjectSelect = (projectId) => {
        const selectedProject = selectedProjectState.projects.find(project => project.id === projectId);
        if (!selectedProject) return;
        setSelectedProjectState(prevState => {
            return {
                ...prevState,
                selectedProject
            };
        });
    }

    const handleProjectDelete = (projectId) => {
        if (!projectId) return;
        const projectIndex = selectedProjectState.projects.find(project => project.id === projectId);
        if (projectIndex !== 0) {
            
            setSelectedProjectState(prevState => {
                return {
                    selectedProject: undefined,
                    projects: prevState.projects.splice(projectIndex, 1)
                };
            });
        }
    }

    const handleTaskAdd = (projectId, newTask) => {
        
        if (!projectId) return;
        const projectIndex = selectedProjectState.projects.findIndex(project => project.id === projectId);
        if (projectIndex > -1) {
            const updatedProject = selectedProjectState.projects[projectIndex];
            
            if(updatedProject.tasks) {
                updatedProject.tasks = [
                    ...updatedProject.tasks,
                    {
                        id: Math.random(),
                        title: newTask
                    }
                ];
            } else {
                updatedProject.tasks = [
                    {
                        id: Math.random(),
                        title: newTask
                    }
                ];
            }
            
            setSelectedProjectState(prevState => {
                return {
                    ...prevState,
                    projects: prevState.projects.splice(projectIndex, 1, updatedProject)
                };
            });
        }
    }

    const handleTaskDelete = (projectId, taskId) => {
        
        if (!projectId) return;
        const projectIndex = selectedProjectState.projects.findIndex(project => project.id === projectId);
        
        if (projectIndex > -1) {
            const updatedProject = selectedProjectState.projects[projectIndex];
            const taskIndex = updatedProject.tasks.findIndex(task => task.id === taskId);

            if(taskIndex > -1) updatedProject.tasks.splice(taskIndex, 1);

            setSelectedProjectState(prevState => {
                return {
                    ...prevState,
                    projects: prevState.projects.splice(projectIndex, 1, updatedProject)
                };
            });
        }
    }

    return (
        <>
        <main className="h-screen flex gap-8">
            <Sidebar
                activeProject={selectedProjectState.selectedProject}
                projects={selectedProjectState.projects}
                handleProjectSelect={handleProjectSelect}
                handleNewProjectClick={handleCreateNewProject} />
            {
                selectedProjectState.selectedProject === undefined
                    ? <NoProject handleNewProjectClick={handleCreateNewProject} />
                    : (
                        selectedProjectState.selectedProject === null
                            
                            ? <NewProject
                                handleSave={handleSaveProject}
                                handleCancelProjectClick={handleCancelNewProject} />

                            : <SelectedProject
                                handleTaskAdd={handleTaskAdd}
                                handleTaskDelete={handleTaskDelete}
                                handleCloseProject={handleCancelNewProject}
                                handleProjectDelete={handleProjectDelete}
                                project={selectedProjectState.selectedProject} />
                    )
            }
        </main>
        </>
    );
}

export default App;
