//THIS CONTAINS SUB ROUTES FOR DESTINATION MYSQL TABLE
const daoClass = require('../../dao/destinations');
const dao = new daoClass();

const express = require('express');
const router = express.Router();

//THIS ROUTE LOOKS LIKE THIS => localhost:4000/api/destinations/
router.get('/', (req, res)=> {
    dao.findAll(req, res);
})

module.exports = router;