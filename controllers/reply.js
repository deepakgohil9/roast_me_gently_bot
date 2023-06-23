const roast = require("../utils/roast")

const reply = async (req, res, next) => {
	try {
		const update = req.body
		let response = await roast(update.message.text)
		let payload = {
			method: "sendMessage",
			chat_id: update.message.chat.id,
			text: response.content
		}
		res.send(payload)
	} catch (error) {
		let err = {
			status: 400,
			error: error
		}
		next(err)
	}
}

module.exports = { reply }