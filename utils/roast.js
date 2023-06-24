const fetch = require("node-fetch")

const roast = async (message) => {

	let raw = JSON.stringify({
		"userMessage": {
			"role": "user",
			"content": message
		},
		"history": [
			{
				"role": "assistant",
				"content": "Hello there. I'm here to roast you."
			}
		],
		"style": process.env.STYLE
	})

	let headers = { "Content-Type": "application/json" }

	let roast_response = await fetch(process.env.API_URL, { method: 'POST', headers: headers, body: raw })
	roast_response = await roast_response.json()
	return roast_response
}

module.exports = roast