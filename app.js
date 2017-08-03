const express =require('express');
const app = express();
const user = require('./routes/users');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());


const config = require('./config/database');
mongoose.Promise = global.Promise;
const connection = mongoose.connect(config.database);
if(connection){
	console.log('Database Connected: OK');
}else{
	console.log('Database Not Connected: ERROR');
}
app.use(express.static(path.join(__dirname,"public")));


app.use("/user",user);

app.get("/",function(req,res){
	res.send("Hello Aruna");
});


app.listen(3000 , function(){
	console.log("Hey your server is START :"+port);	
})