//IMPORT MYSQL CONNECTION INFORMATION
const pool = require('../config/dbconfig')

class CategoryDao{

    constructor(){
        this.pool = pool;
    }

    //GETTING ALL THE CATEGORIES SPOTS 
    findAll(req, res){
        pool.query('SELECT * FROM category', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }

    //GETTING THE INNER JOIN
    showDestination(req, res){
        pool.query('SELECT type_of_destination.id, destination.name AS location, category.name FROM type_of_destination INNER JOIN destination ON destination.id = type_of_destination.destination_id INNER JOIN category ON category.id = type_of_destination.category_id', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }

    //POST REQUEST
    createCategory(req, res){
         pool.query('INSERT INTO category (name) VALUES (\'event\')')
        // pool.query('SELECT * FROM  category', (err, rows) => {
        //     console.log(rows)
        // })
        res.send('POST REQUEST HAS BEEN SUBMITTED')
    }

}

module.exports = CategoryDao;