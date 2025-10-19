import { TodoController } from "@/controllers/todo.controller";

export class AppContext {
    private static instance: AppContext;
    public readonly todoController: TodoController;

    constructor(){
        this.todoController = new TodoController();
    }

    public static getInstance(): AppContext {
        if (!AppContext.instance) {
          AppContext.instance = new AppContext();
        }
        return AppContext.instance;
    }
}
