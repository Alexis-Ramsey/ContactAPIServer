//IMPORT EXPRESS
const express = require('express');

//IMPORT EXPRESS ROUTER 
//THIS METHOD IS BUILT INTO EXPRESS AND IT ALLOWS US TO CHAIN DIRECTORIES THE WAY WE WANT
// EX. http://localhost:4000/api/category
//     http://localhost:4000/api/destinations
const router = express.Router();

router.use('/destinations', require('./api/destinationsroute'))

module.exports = router;