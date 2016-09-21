/**
 * Created by tamu on 6/9/2016.
 */

var express = require('express');
var mysql      = require('mysql');
var router = express.Router();


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
    console.log('The solution is: ', rows[0].name);
   // res.send('The solution is: ', rows[0].name);
});



connection.end();
module.exports = router;
