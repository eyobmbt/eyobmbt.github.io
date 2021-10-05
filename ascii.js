    window.onload=function(){
        "use strict";
    }
    let textArea=document.getElementById("text-area");
    let selection=document.getElementById("animation");
    var myTimer;
    let fSwitchtime=250;


    document.getElementById('turbo').onclick= function(){
    let turboCheck=document.getElementById("turbo");
        if(turboCheck.checked){
            fSwitchtime=50;
        } else {
            fSwitchtime=250;
        }

    }

function strValue(animType){
let indexesOfExercise=[];
let exerciseFrame=animType;
let i=1;
indexesOfExercise[0]=0;
let frame=[];
let j=0;
let lastIn=0;
while(exerciseFrame.indexOf("=====\n")!=-1){   
    lastIn=exerciseFrame.indexOf("=====\n");
     frame[j]=exerciseFrame.slice(0,lastIn);
    exerciseFrame=exerciseFrame.slice(lastIn+6,exerciseFrame.lastIndexOf());
    i++;j++;
}
frame[j]=exerciseFrame.slice(0,indexesOfExercise[i]);
    return frame;
};
document.getElementById('animation').onchange = selectAnimation;
function selectAnimation(){
    clearTimeout(myTimer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;

    textArea.value="";
    switch(selection.value){
        case "Blank": textArea.value=EXERCISE; break;
        case "Exercise": textArea.value=EXERCISE;break;
        case "Juggler":textArea.value=JUGGLER;break;
        case "Bike":textArea.value=BIKE;break;
        case "Dive":textArea.value=DIVE;break;
    }
}
document.getElementById('start').onclick=animationStart;
function animationStart(){
    clearTimeout(myTimer);
    document.getElementById("turbo").disabled = true;
    document.getElementById("animation").disabled=true;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    let result=[];
    switch(selection.value){
        case "Blank":result=strValue(EXERCISE);break;
        case "Exercise":result= strValue(EXERCISE); break;
        case "Juggler":result=strValue(JUGGLER); break;
        case "Bike":result=strValue(BIKE);break;
        case "Dive":result=strValue(DIVE);break;
    }
    let frame="";
    myTimer= setInterval(displayFrame,fSwitchtime,result);
}
stop1=document.getElementById("stop").onclick=stopClicked;
function stopClicked(){
    clearTimeout(myTimer);
    document.getElementById("turbo").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled=false;
    textArea.value="";
}
function displayFrame(frameMain){
    frame=frameMain.shift();
    textArea.value=frame;
    frameMain.push(frame);  
}
let sizeSelection=document.getElementById("fontsize");
document.getElementById('fontsize').onchange = changeStyle;
function changeStyle(){
    switch(sizeSelection.value){
        case "Tiny": textArea.className="text-area-tiny"; break;
        case "Small": textArea.className="text-area-small";break;
        case "Juggler":textArea.className="text-area-med";break;
        case "Large":textArea.className="text-area-large";break; 
        case "Extra Large":textArea.className="text-area-xlarge";break;
        case "XXL":textArea.className="text-area-xxlarge";break;
    }   
}

