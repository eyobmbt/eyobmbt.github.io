
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const session=require('express-session');


const app=express();
app.use(session({
resave:false,
saveUninitialized:false,
secret:'salt for cookie signing'
}));

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.use((req,res,next)=>{
    if(!req.session.list){
        req.session.list=[];
    }
    next();
});

app.get('/',(req,res)=>{
    req.locals.list=req.session.list;
    res.render('listview');
});
app.get('/add',(req,res)=>{
    res.render('list');
    //res.sendFile(path.join(__dirname,'view','form.html'));
});

app.post('/add',(req,res)=>{
    req.session.list.push(req.body.text);
    res.redirect(302,'/');
});

app.listen(3000);