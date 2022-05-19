
import express from 'express'
import cors from 'cors'
import "dotenv/config";
import { router } from './routes/route';

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(router)

export {app}