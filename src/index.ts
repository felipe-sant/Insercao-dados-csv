import dotenv from "dotenv";
import express from "express";
import routes from "./routes/_index";

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(routes)