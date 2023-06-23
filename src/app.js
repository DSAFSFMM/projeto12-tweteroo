import express from "express"
import cors from "cors"

const users = []
const tweets = []

const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

app.post("/sign-up", (req, res) => {
    const { username, avatar} = req.body
    const newUser = {
        username,
        avatar
    }
    res.send("OK")
})



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))