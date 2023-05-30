const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//express specific stuff
app.use('/static', express.static('static'));


//pug specific stuff

app.set('view engine', 'pug')    //set the temp eng as pug
app.set('views', path.join(__dirname, 'views'))  //set the views directory



 //endpoints
 app.get('/', (req, res) => {
    const con = "This is how we can send request in pug"
    const params = {'title': 'pug request', content: con}
    res.status(200).render('index.pug', params)
  })
 



// start the server
app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`)
})
 