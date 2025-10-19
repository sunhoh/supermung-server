import { GetTodoResponse, TodoView } from "@/contracts/get-todo.response";
import { PrismaClient, Todo } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export class TodoController {
    async getTodo(): Promise<GetTodoResponse> {
        const todos = await prisma.todo.findMany();
        return new GetTodoResponse(todos.map(todo => new TodoView(todo)));
    }

    async postTodo(todo: Todo): Promise<boolean> {
        await prisma.todo.create({
            data: todo,
        });
        return true;
    }

    async putTodo(id: number, todo: Todo): Promise<TodoView> {
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: todo,
        });

        return new TodoView(updatedTodo);
    }

    async deleteTodo(id: number): Promise<boolean> {
        await prisma.todo.delete({
            where: { id },
        });
        return true;
    }
}

