const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		mobilenumber: { type: String, required: true }
	},
	{ collection: 'Customers' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model