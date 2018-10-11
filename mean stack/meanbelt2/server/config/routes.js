var path = require("path"),
	products = require("../controllers/products");

module.exports = (app) =>{
	app.get("/products", products.index);
	app.post("/products", products.create);
	app.get("/products/:id", products.get);
	app.delete("/products/:id", products.delete);
	app.patch("/products/:id", products.update);
	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}