import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    prioridade: Number,
    descricao: String,
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Task = mongoose.model('Task', taskSchema);

export default Task;