$(function(){
    let interval=250;
    let wid=50;
    let grow=10;
    let numbCircle=12;
   $("#start").click(function(){
   wid=$('#circle-width')[0].value;
   interval=$('#circle-interval')[0].value
    grow=$('#circle-growth')[0].value;
    numbCircle=$('#circle-no')[0].value;
    crateCircle();
    increaseSizeByInterval();
   });

    let crateCircle= function(){
    for(let i=0;i<numbCircle;i++){
   
            $(`<div class=circle${i}>`).insertAfter(`div.circle0`);
        $(`div.circle${i}`).css(
            {
                "position":"fixed",
                "width":wid+"px",
                "height":wid+"px",
                "border-radius":"50%",
                "top":i+"px"
            });  


        if(i%3===0){
            $(`div.circle${i}`).css(
                {
                    "left":+250+20*i+"px",
                    "background-color":"#"+i*000055
                 });  
  
        } else if(i%3===1){
            $(`div.circle${i}`).css(
                {
                    "left":+450+20*i+"px",
                    "background-color":"#"+i*001100
                 });  
 
        } else{
            $(`div.circle${i}`).css(
                {
                    "left":650+10*i+"px",
                    "background-color":"#"+i*002211
                 }); 
 
        }
        $(`div.circle${i}`).click(function() {
            $(`div.circle${i}`).hide();
          }); 
    }

 
}

let size=function (){

for(let i=0;i<numbCircle;i++){
    
$(`div.circle${i}`).css(
    {"width":function(idx,old){return 10+parseInt(old)+"px";}
    ,"height":function(idx,old){return 10+parseInt(old)+"px";}
    });
}
}
let increaseSizeByInterval= function(){
    setInterval(size,250);
}

});

