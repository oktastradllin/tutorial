/**
 * Created by tamu on 6/9/2016.
 */

var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports = router;