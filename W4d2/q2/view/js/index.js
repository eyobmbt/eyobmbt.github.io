$(()=>{
   // const clearMsg = () => $("#msg").text("");
    //success add and its respons
const questionAddSuccess=()=>{
    $("#qtext").val(answerData[randNo(answerData.length)]);
    $("#qtext").focus();
    //setTimeout(clearMsg, 3000);
}

const noSuccess = () => {
    $("#qtext").text("Unable to reach server");
    //setTimeout(clearMsg, 10000);
}
$("#ask").submit(()=>{
const data=$("#qtext").val();

$.post({
url:'/qform',
data:JSON.stringify(data),
contentType: "application/json; charset=utf-8"
}).done(questionAddSuccess)
.fail(noSuccess);

return false;

});
const randNo=(max)=>{
    return Math.floor(Math.random()*max);
}

const answerData=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely",
 "You may rely on it", "As I see it, yes","Most likely", "Outlook good", "Yes", "Signs point to yes",
"Reply hazy, try again", "Ask again later","Better not tell you now", "Cannot predict now", 
"Concentrate and ask again", "Don't count on it","My reply is no", "My sources say no", 
"Outlook not so good", "Very doubtful"];

});
