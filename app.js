const express =require('express');
const app = express();
const user = require('./routes/users');
const path = require('path');

const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname,"public")));


app.use("/user",user);

app.get("/",function(req,res){
	res.send("Hello Aruna");
});


app.listen(3000 , function(){
	console.log("Hey your server is START :"+port);	
})