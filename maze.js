$(function(){
    $("#maze").on('mouseenter',function(){
      
        $(this).on('mouseleave',function(){
            $("#msg").text("Move not possible!") 
           
        });
        
    });

    $("#start").on('click',startButton);
});

function startButton(evt){
   
var style = 'background-color';
var initColor = 'rgb(238, 238, 238)';

  if($(".boundary").css(style)===initColor){
   
    $(".boundary").on('mouseover',function(){
        $(".boundary").css("background-color", "#ff8888");
        $("#msg").text("You Lose!")
    });
    if($("#end").on('mouseover',function(){
        if($(".boundary").css(style)===initColor){$("#msg").text("You Win :)")}
        
    }));
   } else{
    
      $(".boundary").css("background-color", "#eeeeee");
    
   }
   
};