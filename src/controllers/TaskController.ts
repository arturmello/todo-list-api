import { TaskService } from "../services/TaskService";
import { Request, Response } from "express";


export class TaskController {
    constructor(
        private taskService: TaskService
        
    ){

    }
    //getAll = GET ou HEAD
    getAll(req: Request, res: Response): void {
        try {
            const tasks = this.taskService.getAll();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    
    }

    //create = POST
    create(req: Request, res: Response): void {
        try {
            const { title } = req.body;
            const newTask = this.taskService.create(title);
            res.status(201).json({ message: "Invalid task data" })
        } catch (error) {
            res.status(400).json({ message: "Invalid task data" });
        }
    }

    //update = PUT
    update(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const data = req.body;

        try {
            const updateTask = this.taskService.update(id, data);
            res.status(200).json(updateTask);
        } catch (error) {
            res.status(404).json({ message: "Task not found" });
        }
    }

    //delete = DELETE
    delete(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const deleted = this.taskService.delete(id);

        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    }
}