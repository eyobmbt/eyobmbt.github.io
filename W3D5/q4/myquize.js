const express=require('express');
const app=new express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
let listText=[];
let htmlList="<html><body><ul>";

app.get('/',(req,res)=>{

for(let i=0;i<listText.length;i++){
htmlList+=`<li>${listText[i]}</li>`;
}
htmlList+=`</ul> <a href="/add"> Add Text to list</a></body></html>`;
res.send(htmlList);
});
 
app.get('/add',(req,res)=>{
    let myform='<form method="post">Input Your Text<input name="text"><button type="submit">Submit</button></form>';
res.send(myform);
});
app.post('/add',(req,res)=>{
let inputText=req.body.text;
let len=listText.length;
listText[len]=inputText;
res.redirect(303,'/');
});
app.listen(3007);