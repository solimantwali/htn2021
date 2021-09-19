var express = require('express');
var router = express.Router();
import {getUsers,createUserTable,createCandidate,verifyCandidate, createCompany, createCompanyTable} from '../db/functions'

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', getUsers )
router.post('/createUser',(req,res)=>{
  if(req.body.type == "Volunteer") {
    createUserTable;
    createCandidate(req)
  }
  else {
    createCompany
    createCompanyTable
  }
})

router.post('/login',(req,res)=>{
  if(verifyCandidate(res)){
    find
  }
  else{
    return false
  }
})
module.exports = router;
