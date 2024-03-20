//IMPORT MYSQL CONNECTION INFORMATION
const pool = require('../config/dbconfig')

//WHY ARE WE MAKING JAVASCRIPT CLASS AND CONSTRUSTOR?
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

    postBody(req, res){
        console.log(req.body)
        res.send("Data have been sent")
    }

    createDestination(req, res){
        console.log(req.body);

        //THIS IS ONLY SELECTING THE ATTRIBUTES IN THE OBJECT AND PUTTING THEM IN AN ARRAY
        let fields = Object.keys(req.body);

        console.log(fields);

        let values = Object.values(req.body);
        console.log(values);

        //TWO WAYS TO POST DATA

        //CREATE A VARIABLE TO HOLD THE COMMAND AS SO..
        // let sql = `INSERT INTO destination (${fields.join(',')}) VALUES (${Array(values.length).fill('?') .join(',')})`

        // //CREATE THE POOL.QUERY
        // pool.query(sql, values)

        // res.send("data sent")

        //USE BACKSLASH AND DOUBLE QUOTATIONS TO USE THE ONE UNDER (EX. "\"TEXT\"")
        pool.query(`INSERT INTO destination (${fields.join(',')}) VALUES (${values.join(',')});`, (err, rows) => {
            if(err){
                res.json({
                    error: true,
                    message: err
                })
            }
            
            res.json(rows)
        })

    }
}

module.exports = DestinationDao;