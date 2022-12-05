const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//for serving static files
app.use('/static', express.static('static'));

//set the template engine as the pug
app.set('view engine', 'pug')

//set the views directory
 app.set('views', path.join(__dirname, 'views'))

 //pug first endpoint

 app.get('/first', (req, res) => {
    res.status(200).render('first', { title: 'Hey Pug, whats your use case?', message: 'Hello there! Pug works same as html afaik. ' })
  })
 


//set the express
app.get("/", (req, res)=>{
    res.status(200).send("This is my first home page in express app with status")
});

app.get("/about", (req, res)=>{
    res.send("This is my first about page in express app")
});

app.post("/about", (req, res)=>{
    res.send("This is post request page of my first about page in express app")
});

app.get("/blog", (req, res)=>{
    res.status(400).send("404 error not found")
});

app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`)
})
 