class Project {
    todos = [];
    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
    // Getters
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    // Setters
    set name(name) {
        this._name = name;
    }
    set description(description) {
        this._description = description;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        this.todos = this.todos.filter((currentTodo) => todo.id != currentTodo.id);
    }
}

export { Project }