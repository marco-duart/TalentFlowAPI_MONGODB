import "dotenv/config"
import express from "express"

import { connectionDatabase } from "./database/connection"
import bcrypt from "bcrypt"

connectionDatabase()

const app = express()

app.use(express.json())
app.use()