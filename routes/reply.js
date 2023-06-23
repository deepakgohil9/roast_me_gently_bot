const express = require("express")
const { reply } = require("../controllers/reply")

const route = express.Router()

route.post("/", reply)

module.exports = route