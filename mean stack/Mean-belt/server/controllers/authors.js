var Author = require("../models/author");
	bcrypt = require("bcryptjs");



module.exports = {
	index: (req, res) =>{
		Author.find({}, (err,authors)=>{
			if(err){
				console.log("We out there bois");
				res.status(401).json(err);
			}
			else{
				console.log("gatta get'em all!")
				res.json(authors);
			}	
		});
	},
	create: (req,res) =>{
		let author = new Author(req.body);
		Author.findOne({name: req.body.name}, (err, response)=>{
			console.log(response);
			if(response){
				res.status(400).json({err:"Author with that name already exists"});
			} 
			else{
				console.log(author);
				author.save((err)=>{
					if(err){
						console.log("create error");
						res.status(401).json(err);
					} 
					else {
						res.json(author);
					}
				})
			}
		})
	},
	get: (req,res) =>{
		Author.findOne({_id: req.params.id}, (err, author)=>{
			if(err){
				console.log("get error");
				res.status(401).json({err:"Can not retieve data"});
			}
			else{
				res.json(author);
			}
		})
	},
	update: (req,res) =>{
		let update_author = Author.findOne({_id: req.params.id}, (err,author)=>{
			if(err){
				console.log("Finding data to Update error");
				res.status(401).json({err:"Item does not exist"});
			}
			else{
				update_author.update({name: req.body.name}, (err)=>{
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
		Author.remove({_id: req.params.id}, (err)=>{
			if(err){
				console.log("delete error");
				res.status(401).json(err);
			}
			else{
				res.json({message:"We good here"});
			}
		});
	},




	// populate(info)
	// Restaurant.findOne({_id: req.params.id})
 //  .populate({path: 'reviews', options: {sort:{"star": "descending"}}})
 //  .exec( (err, restaurant) => {

//push into database
 	// const review = new Review(req.body);
  //   review._restaurant = restaurant._id;
  //   restaurant.reviews.push(review);
  //   review.save( (error) => {
}