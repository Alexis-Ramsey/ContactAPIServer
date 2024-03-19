//IMPORTING MYSQL PACKAGE
const mysql = require('mysql')

//CREATE THE CONNECTION INFORMATION
const pool = mysql.createPool({
    host:'localhost',
    port: '3306',
    user: 'root',
    database: 'vacation'
});

// THIS IS MAKING OUR POOL VARIABLE TO HAVE ACCESS EVERY WHERE
module.exports = pool;

//THIS STARTS THE MYSQL DATABASE CONNECTION
//THIS IS TO CATCH ERRORS
pool.getConnection((err, connection)=> {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            consolerror('Database connection was closed.')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections.')
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused.')
        }
    }
    if(connection)connection.release()

    return
})