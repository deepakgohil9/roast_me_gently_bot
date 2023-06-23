const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const reply_route = require("./routes/reply")
const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use("/webhook", reply_route)

app.use((req, res) => {
	res.status(404).send({ error: "not found!" })
})

app.use((err, req, res, next) => {
	res.status(err.status).send({ error: JSON.stringify(err.error) })
})

app.listen(PORT, () => {
	console.log("server started!")
})