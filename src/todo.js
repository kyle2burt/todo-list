class Todo {
    id = crypto.randomUUID();
    constructor(name, description, priority, due) {
        this._name = name;
        this._description = description;
        this._priority = priority;
        this._due = due;
    }
    // Getters
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get priority() {
        return this._priority;
    }
    get due() {
        return this._due;
    }
    //Setters
    set name(name) {
        this._name = name;
    }
    set description(description) {
        this._description = description;
    }
    set priority(priority) {
        this._priority = priority;
    }
    set due(due) {
        this._due = due;
    }
}

export { Todo };