var express     = require('express');
var router      = express.Router();
var mysql       = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: "sitepoint"
});


connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


connection.query('SELECT * FROM employees', function(err, rows) {
  if (err) throw err;
  data = rows;
});

router.get('/', function(req, res, next) {
 // res.send('respond with a resource '+data[1].name);
  res.render('index', { title: 'Express' });
});

/* GET users listing. */


module.exports = router;
