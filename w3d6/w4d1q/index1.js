let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let path=require('path');
app.use(bodyParser.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname),'view');

app.get('/',(req,res)=>{
res.render('listview',{list:list})
});

app.get('/list',(req,res)=>{
    res.send('list')
});
let list=[];
app.post('/result',(res,req)=>{
let text=req.body.text;
list.push(text);
res.redirect('listview');
});
app.listen(3010);