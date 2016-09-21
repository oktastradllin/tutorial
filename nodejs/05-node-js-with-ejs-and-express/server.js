var express = require('express'); 
var app = express();
//Now, Inside you server.js set the view Engine to ejs as follows
app.set('view engine', 'ejs');
//Create a route for your app.
app.get('/', function(req, res){ 
	res.render('index',{user: "Great User",title:"homepage"});
 });
 
 
 app.listen(3000,function(){
  console.log("Live at Port 3000");
});
