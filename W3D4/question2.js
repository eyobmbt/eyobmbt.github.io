const readline=require('readline').createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
);

let sum=0;

let getNumber=function(){
    
    readline.question('Enter number if you need to sum up or write stop/STOP to terminate: ? ',num=>{
        if(num=='stop'||num=='STOP'){
            console.log('Sum='+sum);
            readline.close();
        } else {
            
            sum=Number(sum)+Number(num);
            getNumber();
        }

     } );

};
getNumber();