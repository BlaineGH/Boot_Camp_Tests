var path = require("path"),
	authors = require("../controllers/authors");

module.exports = (app) =>{
	app.get("/authors", authors.index);
	app.post("/authors", authors.create);
	app.get("/authors/:id", authors.get);
	app.delete("/authors/:id", authors.delete);
	app.patch("/authors/:id", authors.update);
	app.all("*", (req,res,next)=>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}