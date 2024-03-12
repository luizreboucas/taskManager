import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    email: {
        type: String,
        unique: true,
    },
    senha: String,
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
})

const User = mongoose.model('User', userSchema);

export default User;