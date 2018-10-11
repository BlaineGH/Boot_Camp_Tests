var	mongoose = require("mongoose");
	Schema = mongoose.Schema;

var QuoteSchema = new mongoose.Schema({
	_author:{
		type: Schema.Types.ObjectId,
		ref: "Author"
	},
	content: {
		type: String,
		required: [true, "Please enter a quote"],
		minlength: 3,
		maxlength: 255,	
	},
},{timestamps: true});
//set up our schema
module.exports = mongoose.model("Quote", QuoteSchema);