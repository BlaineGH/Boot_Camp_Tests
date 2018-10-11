var	mongoose = require("mongoose");
	Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: [true,"Please enter Name"], 
		minlength: 3, 
		maxlength: 25,
		trim: true,
	},
	qty: {
		type: Number,
		required: [true, "Please enter a Qty"],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, "Please enter a Price"],
		trim: true,
	},
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);