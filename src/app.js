import express, { text } from "express"
import cors from "cors"

const users = []
const tweets = []

const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body
    const newUser = {
        username,
        avatar
    }
    users.push(newUser)
    res.send("OK")
})

app.post("/tweets", (req, res)=>{
    const { username, tweet } = req.body
    const found = users.find(user => user.username === username)
    if(found === undefined){
        return res.send("UNAUTHORIZED")
    }
    const newTweet = {
        username,
        tweet
    }
    tweets.push(newTweet)
    res.send("OK")
})

app.get("/tweets", (req, res)=>{
    const latestTweets = []
    for (let i = 0; i < tweets.length; i++) {
        if(i === 10){
            break;
        }
        const { username, tweet } = tweets[tweets.length - 1 - i]
        const user = users.find(user => user.username === username)
        const { avatar } = user
        const newTweet = {
            username,
            avatar,
            tweet
        }
        latestTweets.push(newTweet)
    }
    res.send(latestTweets);
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))