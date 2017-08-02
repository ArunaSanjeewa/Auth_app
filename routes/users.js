const express = require('express');
const router = express.Router();

router.get("",function(req,res){
	res.send("Hello Users /user/ ");
});
router.get("/register",function(req,res){
	res.send("Welcome to /user/register");
});
module.exports = router;