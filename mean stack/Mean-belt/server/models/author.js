var	mongoose = require("mongoose");
	Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: [true,"Please enter Name"], 
		minlength: 2, 
		maxlength: 25
	},
	quotes: [{
		type: Schema.Types.ObjectId,
		ref: "Quote"
	}],
}, {timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);//set up our schema
