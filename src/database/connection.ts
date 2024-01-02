import { connect, connection } from "mongoose"
import { env } from "../configs/env"

async function connectionDatabase() {
    connection.on("open", () => {
        console.log("Database is connected")
    })
    await connect(env.MONGODB_URI)
}

export { connectionDatabase }