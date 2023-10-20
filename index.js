import express from 'express'
import { config } from 'dotenv'
config()

import usuariosRoutes from './routes/usuario.routes.js'

const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.json())


app.use("/api/usuario", usuariosRoutes)

app.listen(PORT, ()=> {
  console.log("😀 Server is running on http://localhost:" + PORT)
})