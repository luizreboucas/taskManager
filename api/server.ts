import express from 'express';
import { load } from 'ts-dotenv';
import { connectDb } from './config/dbConfig';
import User from './models/userModel';
import Task from './models/taskModel';
import routes from './routes';
const app = express();
const env = load({
    PORT: String
})

app.listen(env.PORT, () => {
    console.log(`server running in port ${env.PORT}`)
})
connectDb();
routes(app);



