var express = require("express");
var app = express();
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'kkf_2016_kuncit_april'
 });
 
connection.connect();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  var start = new Date().getTime();
  connection.query('SELECT * from tbl_candidate',function(err, rows, fields) {
	if (err) throw err;
	
	/*var data=[];
	
	for(i=0;i<rows.length;i++)
	{
		data.push(rows[i].id_candidate);
	}*/
		res.end(JSON.stringify(rows));
	});
});


app.use("/",router);



app.listen(3000,function(){
  console.log("Live at Port 3000");
});


 
