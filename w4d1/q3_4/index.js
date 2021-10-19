
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const session=require('express-session');
const { send } = require('process');


const app=express();
app.use(session({
resave:false,
saveUninitialized:false,
secret:'salt for cookie signing'
}));

app.use(bodyParser.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
let product={"Mac":1000,
"Dell":900,
"HP":950,
"Acer":850,
"Toshiba":350};

let mycart={"Mac":0,
"Dell":0,
"HP":0,
"Acer":0,
"Toshiba":0};
app.use((req,res,next)=>{
    if(!req.session){
        req.session.quantity={};
        for(let pro in product){
            req.session.quantity[pro]=0;
        }
    }

  next();
});
app.get('/',(req,res)=>{

    res.render("product",{
        product:product
    });
});

app.get('/cart',(req,res)=>{
   
    res.render("shop",
     { mycart:product,
        quantity:req.session.quantity
    });
});

app.post('/result',(req,res)=>{

    req.session.quantity["Mac"]+=req.body.qnt0;
    req.session.quantity["Dell"]+=req.body.qnt1;
    req.session.quantity["HP"]+=req.body.qnt2;
    req.session.quantity["Acer"]+=req.body.qnt3;
    req.session.quantity["Toshiba"]+=req.body.qnt4;
    res.redirect(303,'/shop');
   

});
app.listen(3001);