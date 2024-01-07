import "dotenv/config"
import express from "express"

import { connectionDatabase } from "./database/connection"

connectionDatabase()

const app = express()

app.use(express.json())
//app.use(Router)

app.listen(3000, () => console.log("Server is running 🚀"))