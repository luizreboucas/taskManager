import { Request, Response, query } from "express";
import Task from "../models/taskModel";
import User from "../models/userModel";
import { getColorPrioridade } from "../services/getColorPrioridade";

class TaskController {

    static getTasks = async(req: Request, res: Response) => {
        try {
            const tasks = await Task.find().populate('usuario').exec()
            res.status(200).json(tasks)
        } catch (error) {
            console.log(error)
        }
    }

    static getTasksByUser = async(req:Request, res: Response) => {
        try {
            const userId = req.params.userId
            const tasksByUser = await Task.find().where('usuario').equals(userId)
            res.status(200).json(tasksByUser);
        } catch (error) {
            console.log(error)
        }
    }

    static createTask = async(req: Request, res: Response) => {
        try {
            const {nome, descricao, prioridade, usuario} = req.body;
            
            const cor = getColorPrioridade(+prioridade);
            const task = new Task({nome,descricao,prioridade,usuario, cor});
            await task.save();
            res.status(201).json({message: 'task criada com sucesso', task})
        } catch (error) {
            console.log(error)
        }
    }

    static atualizarTask = async(req: Request, res: Response) => {
        try {
            const taskId = req.params.taskId
            const newTaskData = req.body
            if(newTaskData.prioridade) {
                newTaskData.cor = getColorPrioridade(newTaskData.prioridade);
            }
            await Task.findByIdAndUpdate(taskId, newTaskData);
            const updated = await Task.findById(taskId);
            res.status(200).json({message: 'tarefa atualizada com sucesso', task: updated})
        } catch (error) {
            console.log(error)
        }
    }

    static deleteTask = async(req: Request, res: Response) => {
        try {
            const taskId = req.params.taskId;
            await Task.findByIdAndDelete(taskId)
            res.status(200).json({message: 'tarefa deletada com sucesso'})
        } catch (error) {
            console.log(error)
        }
    }
}

export default TaskController;