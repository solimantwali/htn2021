var express = require('express');
var router = express.Router();
const db = require('../db/getUsers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.createTable();
  res.send('respond with a resource');
});

router.get('/getUsers', db.getUsers )
module.exports = router;
