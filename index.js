//IMPORT EXPRESS TO HELP MAKE OUR WEB API SERVER
const express = require('express');

//THIS IS THE VARIABLE WE WILL CALL INORDER TO CALL AN EXPRESS METHOD/FUNCTION THE PACKAGE HAS
const app = express();

//THE LOCALHOST PORT WE WILL USE
const port = 4000;

//IMPORT OUR ROUTER.JS CODE
const router = require('./app/routes/router')

// app.get('/', (req, res)=> {
//     res.send('Hello')
// })

app.listen(port, ()=> {
    //WHATEVER WE PUT INSIDE HERE WILL RUN
    console.log(`App is listening on port ${port}`)
})

//OUR NEW DIRECTORY FOR GET/POST REQUEST
app.use('/api', router);