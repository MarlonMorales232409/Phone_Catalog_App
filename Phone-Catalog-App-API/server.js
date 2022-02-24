const express = require('express'); 
const app = express();
const fs = require('fs'); // file sitem object
const cors = require('cors');


// Endpoint to get the phone list from a json file
app.get('/phones',cors(), function(req, res){
    fs.readFile(__dirname + "/" + "phones.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data);
    });
})

// Create a server to listen at port 4000
const server = app.listen(4000, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})