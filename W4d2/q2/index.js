const path = require('path');
const express = require('express');
const app = express();

//app.use(express.json());
//app.use('/js', express.static(path.join(__dirname, 'views', 'js')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
const answerData=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely",
 "You may rely on it", "As I see it, yes","Most likely", "Outlook good", "Yes", "Signs point to yes",
"Reply hazy, try again", "Ask again later","Better not tell you now", "Cannot predict now", 
"Concentrate and ask again", "Don't count on it","My reply is no", "My sources say no", 
"Outlook not so good", "Very doubtful"];

const randNo=(max)=>{
    return Math.floor(Math.random()*max);
}

let ans ='';




app.post("/ask", (req, res) => {
    ans=answerData[randNo(answerData.length)];
    res.redirect('/');
 
});

app.get('/',(req,res)=>{
    
    res.render('qform',{ans:ans});
});



app.listen(3001);