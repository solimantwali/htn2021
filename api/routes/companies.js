var express = require('express');
var router = express.Router();
import {findCompany} from '../db/functions'

router.post('/findCompany',findCompany)


module.exports = router;
