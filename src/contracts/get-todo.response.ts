import { Todo } from "@/generated/prisma";

export class TodoView {
    public id: number;
    public title: string;
    public description: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(todo: Todo) {
        this.id = todo.id;
        this.title = todo.title;
        this.description = todo.description;
        this.createdAt = todo.createdAt;
        this.updatedAt = todo.updatedAt;
    }
}

export class GetTodoResponse {
    public todos: TodoView[];
    constructor(todos: TodoView[]) {
        this.todos = todos;
    }
}

