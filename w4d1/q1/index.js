let express=require('express');
let cookieParser=require('cookie-parser');
let bodyParser=require('body-parser');
let app=express();


app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.get('/',(req,res)=>{
    let cookieTable="<table border='1'><tr><th>Keys</th><th>Values</th>";
if(req.cookies.key){
 res.send('Remebered :). Cookie');
}else{
  
for(let keys in req.cookies){
    cookieTable+="<tr><td>"+keys+ "</td>"+"<td>"+req.cookies[keys]+ "</td></tr>"
}
cookieTable+="</table>";

    res.send(`<form action="/result" method="post" name="myform">
    Key: <input name="key">
    Value: <input name="value">
   <button type="submit">
    Submit</button>
</form>${cookieTable}`);

}
});
app.post('/result',(req,res)=>{
    let myKey=req.body.key;
    let myValue=req.body.value;
    res.cookie(myKey,myValue);
    res.redirect("/");

});
app.listen(3009);
