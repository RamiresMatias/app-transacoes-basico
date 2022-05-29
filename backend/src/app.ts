
import express from 'express'
import { router } from './routes/route';
import cors from 'cors'
import "dotenv/config";
import "./schedule/cron"

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(router)

export {app}