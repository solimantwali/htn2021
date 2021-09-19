var express = require('express');
var router = express.Router();
import {createPostingsTab,createPosting,findPosting} from '../db/functions'

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', getUsers )
router.post('/createPosting',(req,res)=>{
    createPostingsTab
    createPosting
})

router.post('/findPosting',(req,res)=>{
    findPosting
})
module.exports = router;
