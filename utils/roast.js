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
	console.log(process.env.API_URL)
	console.log(raw)
	let roast_response = await fetch(process.env.API_URL, { method: 'POST', headers: headers, body: raw })
	console.log(JSON.stringify(roast_response))
	console.log(roast_response.status)
	roast_response = await roast_response.json()
	return roast_response
}

module.exports = roast