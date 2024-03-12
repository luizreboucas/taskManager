import mongoose from "mongoose";
import { load } from "ts-dotenv";
const env = load({
    USER_NAME: String,
    DB_PASSWORD: String
})
export const connectDb = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${env.USER_NAME}:${env.DB_PASSWORD}@cluster0.z4vgtrs.mongodb.net/task_manager`);
        console.log("conexão com Banco de Dados realizada com sucesso")
    } catch (error) {
        console.log(`erro de conexão com banco de dados => `, error)
    }
}

