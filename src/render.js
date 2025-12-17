const projectList = document.querySelector("#project-list");
const projectHead = document.querySelector(".project-head");
const todoList = document.querySelector(".list");


function drawProjects(projects) {
    projects.forEach(project => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project.name;

        projectList.appendChild(projectLi);
    });
}


export { drawProjects };