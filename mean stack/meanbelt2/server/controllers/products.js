var Product = require("../models/product"),
	bcrypt = require("bcryptjs");



module.exports = {
	index: (req, res) =>{
		Product.find({}, (err,products)=>{
			if(err){
				console.log("We out there bois");
				res.status(401).json({err:"Can not get them all"});
			}
			else{
				console.log("gatta get'em all!")
				res.json(products);
			}	
		});
	},
	create: (req,res) =>{
		console.log(req.body);
		let product = new Product(req.body);
		Product.findOne({name: req.body.name}, (err, response)=>{
			console.log(response);
			if(response){
				return res.status(400).json({err:"Product with that name already exists"});
			} 
			else{
				product.save((err)=>{
					if(err){
						return res.status(400).json({err:"Product save error"});
					}
					else{
						res.json(product);
					}
				})
			}	
		})
	},
	get: (req,res) =>{
		Product.findOne({_id: req.params.id},(err, product)=>{
			if(err){
				console.log("get error");
				res.status(401).json({err:"Can not retieve data"});
			}
			else{
				res.json(product);
			}
		})
	},
	update: (req,res) =>{
		let update_product = Product.findOne({_id: req.params.id}, (err,product)=>{
			if(err){
				console.log("Finding data to Update error");
				res.status(401).json({err:"Item does not exist"});
			}
			else{
				update_product.update({name: req.body.name, qty: req.body.qty, price: req.body.price}, (err)=>{
					if(err){
						res.status(401).json({err:"Item can not be updated at this time"});
					}
					else{
						res.json({message:"Update Success"});
					}
				})
			}
		})
	},
	delete: (req,res)=>{
		Product.remove({_id: req.params.id}, (err)=>{
			if(err){
				console.log("delete error");
				res.status(401).json({err:"Can not remove this item at this time"});
			}
			else{
				res.json({message:"We good here"});
			}
		});
	},
}