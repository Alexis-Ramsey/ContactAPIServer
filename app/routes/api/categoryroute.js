//THIS CONTAINS SUB ROUTES FOR CATEGORY MYSQL TABLE
const daoClass = require('../../dao/category');
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/destinationcategory', (req, res) =>{
    dao.showDestination(req, res);
})

router.get('/postcategory', (req, res) => {
    dao.createCategory(req, res)
})




module.exports = router;