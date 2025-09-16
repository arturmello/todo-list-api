import { Task } from "../models/Task"

export class TaskService {
    private tasks: Task[] = []
    private currentId = 1;

    //Method to show/list tasks
    getAll(): Task[] {
        return this.tasks
    }

    //Task creation method
    create(title: string): Task {
        if (!title.trim()) {
            throw Error("Não é possível criar uma task sem um título.")
        }

        const newTask: Task = {
            id: this.currentId++,
            title,
            done: false,
        };

        this.tasks.push(newTask);
        return newTask;
    }


    //Method to update the task
    update(id: number, data: Partial<Task>): Task | null {
        const task = this.tasks.find(task => task.id === id)
        if (!task) {
            throw Error("Não encontramos sua task.")
        }

        if (data.title) {
            task.title = data.title;
        }

        if (data.done !== undefined) {
            task.done = data.done;
        }

        return task;
    }

    //Method to delete a task
    delete(id: number): boolean {
        const index = this.tasks.findIndex(task => task.id === id)
        if (index === -1) {
            return false;
        }

        this.tasks.splice(index, 1);
        return true;
    }

}

