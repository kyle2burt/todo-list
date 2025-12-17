import "./styles.css";
import { Todo } from "./todo.js";


console.log('hello world');

const item = new Todo("Name", "Desc", "Prio", "Due Date");

console.log(item.name);
item.name = "test";
console.log(item.name);