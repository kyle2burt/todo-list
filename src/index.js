import "./styles.css";
import { Project } from "./project.js";
import { Todo } from "./todo.js";
import { drawProjects, drawSelectedProject } from "./render.js";


console.log('hello world');

const projectList = [];

const project1 = new Project('Project 1', 'Testing project 1 description value');
const project2 = new Project('Project 2', 'Testing project 2 description value, here is some more information about this project.');
const project3 = new Project('Project 3', 'Testing project 3 description value');

projectList.push(project1);
projectList.push(project2);
projectList.push(project3);

drawProjects(projectList);

drawSelectedProject(project2);