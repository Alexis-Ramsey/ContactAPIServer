//IMPORT MYSQL CONNECTION INFORMATION
const pool = require('../config/dbconfig')

// WHY ARE WE MAKING JAVASCRIPT CLASS AND CONSTRUSTOR?
//IT IS A EASIER WAY TO CALL DIFFERENT FUNCTION INSIDE TO GET INFORMATION
class DestinationDao {
    
    constructor(){
       this.pool = pool;
    }

    findAll(req, res){
        pool.query('SELECT * FROM destination', (err, rows, fields) => {
            console.log(rows)
            res.send(rows)
        })
    }
}

module.exports = DestinationDao;