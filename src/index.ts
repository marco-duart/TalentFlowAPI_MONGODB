import { app } from "./server"
import { MongoConnection } from "./database/connection"
import { env } from "./configs/env"

MongoConnection.initialize()

app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT} 🚀`))