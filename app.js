const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const arr = [];
 
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));



app.get('/',(req,res)=>{
    var date = new Date();
    const obj = {date:date,data:arr};
    res.render('profile',{obj});
});

app.post('/',(req,res)=>{
    var data = req.body.task;
    //console.log(data);
    arr.push(data);
    res.redirect('/');

});

app.listen(3000,(err)=>{
    if (err) throw err;
    console.log("Listening at port 3000");
});

