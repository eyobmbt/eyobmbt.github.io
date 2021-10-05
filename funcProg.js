/* 4 Define a function sum() and a function multiply() that sums and multiplies 
(respectively) all the numbers in an array of numbers*/
"strict use";
function sum(arr){
    function fun(accumulator,elem){
        return accumulator+elem;
    }
    return arr.reduce(fun);
}


function multiply(arr1){
    function fun1(accumulator1,elm1){
        return accumulator1*elm1;
    }
    return arr1.reduce(fun1);
}

/* 5 Define a function reverse() that computes the reversal of a string.*/
function reverse(str){
    function fun2(accumulator2,elm2){
        return elm2+accumulator2;
    }
   return str.split('').reduce(fun2,'');
  
}

/* 7 Write a function filterLongWords() that takes an array of words and an integer i 
and returns the array of words that are longer than i. */

function filterLongWords(arr,i){
    function fun3(ele){
        return ele.length>i;
    }
    return arr.filter(fun3);
}
