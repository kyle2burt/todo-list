const projectList = document.querySelector("#project-list");
const projectHead = document.querySelector("#project-info");
const todoList = document.querySelector(".list");


function drawProjects(projects) {
    projects.forEach(project => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project.name;

        projectList.appendChild(projectLi);
    });
}

function drawSelectedProject(project) {
    const projectName = document.createElement('h1');
    const projectDescription = document.createElement('p');

    projectName.textContent = project.name;
    projectDescription.textContent = project.description;

    projectHead.appendChild(projectName);
    projectHead.appendChild(projectDescription);

}

function drawProjectTodos(project) {

}


export { drawProjects, drawSelectedProject };