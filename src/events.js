import { drawProjects, drawSelectedProject, drawProjectTodos } from "./render.js";


function addSidebarEvents(projectList) {
    const projectListDom = document.querySelector('#project-list');
    projectListDom.addEventListener('click', (e) => {
        let id = e.target.dataset.id;
        drawSelectedProject( projectList[projectList.map((project) => project.id).indexOf(id)] )
    });

}

export { addSidebarEvents }