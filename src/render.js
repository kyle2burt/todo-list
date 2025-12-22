const projectList = document.querySelector("#project-list");
const projectHead = document.querySelector("#project-info");
const todoList = document.querySelector(".list");


function drawProjects(projects) {
    projects.forEach(project => {
        const projectLi = document.createElement('li');
        projectLi.textContent = project.name;
        projectLi.dataset.id = project.id;

        projectList.appendChild(projectLi);
    });
}

function drawSelectedProject(project) {
    while (projectHead.lastElementChild) {
        projectHead.removeChild(projectHead.lastElementChild);
    }
    const projectName = document.createElement('h1');
    const projectDescription = document.createElement('p');

    projectName.textContent = project.name;
    projectDescription.textContent = project.description;

    projectHead.appendChild(projectName);
    projectHead.appendChild(projectDescription);

    drawProjectTodos(project);

}

function drawProjectTodos(project) {
    while (todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }
    project.todos.forEach(todo => {
        const todoListItem = document.createElement('div');
        const checkBox = document.createElement('input');
        const todoName = document.createElement('h3');
        const todoDescription = document.createElement('p');
        const todoDue = document.createElement('p');
        const todoPriority = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        checkBox.setAttribute('type', 'checkbox');

        todoListItem.classList.add('list-item');
        todoDescription.classList.add('description');
        todoDue.classList.add('due-date');
        todoPriority.classList.add('priority');
        editButton.classList.add('edit');
        deleteButton.classList.add('delete');

        todoName.textContent = todo.name;
        todoDescription.textContent = todo.description;
        todoDue.textContent = todo.due;
        todoPriority.textContent = todo.priority;
        editButton.textContent = 'edit';
        deleteButton.textContent = 'delete';

        todoListItem.appendChild(checkBox);
        todoListItem.appendChild(todoName);
        todoListItem.appendChild(todoDescription);
        todoListItem.appendChild(todoDue);
        todoListItem.appendChild(todoPriority);
        todoListItem.appendChild(editButton);
        todoListItem.appendChild(deleteButton);

        todoList.appendChild(todoListItem);
    });
}


export { drawProjects, drawSelectedProject, drawProjectTodos };