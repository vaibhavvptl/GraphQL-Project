const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
	name: {
		type: String,
		require: ["enter your name", , true],
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
})

module.exports = mongoose.model("ClientSchema", ClientSchema)
