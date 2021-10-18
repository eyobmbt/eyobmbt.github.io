const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');


const app=express();
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

app.get('/',(req,res)=>{

    res.render("product",{
        product:product
    });
});

app.get('/cart',(req,res)=>{

    res.render("shop",
    {mycart:mycart});
});

app.post('/result',(req,res)=>{

    prodName=req.body.prodName;
    price=900;
        mycart["Dell"]+=1;
      
   
    res.render("product",{product:product,
        prodName:prodName,
    price:price});
});
app.listen(3009);