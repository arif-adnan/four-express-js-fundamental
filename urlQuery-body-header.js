const express = require('express');
const bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

// URL query
app.post('/query', (req, res)=>{
    let name = req.query.name;
    let id = req.query.id;

    res.send('My name is: '+ name + ' and ID is: ' + id);
});

// header
app.post('/header', (req, res)=>{
   let name = req.header("name");
   let password = req.header("password");

   res.send("User name: " + name + " Password: " + password);
});

// body
app.post('/body', (req,res)=>{
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
});


app.listen(5000, ()=>{
    console.log('Server running successfully');
});
