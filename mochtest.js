describe("sum(arr)",function(){
    const listOfArrays={
        a:[1,2,3],
        b:[-1,3,0],
        c:[0,0,0],
        d:[-2,-3,-1]
    };
    const expected={a:6,b:2,c:0,d:-6};
    function testFunction(listArray,ind){
        result=0;
            for(k in listArray[ind]){
                result +=k;
            }
        }
       for(let k in listOfArrays) {
    it(`The sum of numbers ${listOfArrays[k]} is ${expected[k]}`,function(){
        assert.equal(sum(listOfArrays[k]),expected[k]);
    });
}

});
describe("multiply(arr)",function(){
    const listOfArrays={
        a:[1,2,3],
        b:[-1,3,0],
        c:[0,0,0],
        d:[-2,-3,-2]
    };
    const expected={a:6,b:0,c:0,d:-12};
    for(let i in listOfArrays){
    it(`The product of numbers ${listOfArrays[i]} is ${expected[i]}`,function(){
        assert.equal(multiply(listOfArrays[i]),expected[i]);
    });
}
});

describe('reverse(str)',function(){
    const s={a:"Hello World", b:"aabcc",c:""};
    const result={a:"dlroW olleH", b:"ccbaa",c:""};
   
    for(let i in s){
    it(`Reverse String of \"${s[i]}\" is \"${result[i]}\"`,function(){
        assert.equal(reverse(s[i]),result[i]);
    });
    }
});

describe("filterLongWords(arr,i)",function(){
      const s=["Hello World","Hello","a","hi","Good","bye","Good bye"];
     expected=["Hello World","Hello","Good bye"];
    expected1=["Hello World","Hello","Good","Good bye"];
    expected2=["Hello World","Hello","Good","bye","Good bye"];
    expected3=["Hello World","Hello","hi","Good","bye","Good bye"];
    
    it(`From this ${s} words that has longer than 4 characters is ${expected}`,function(){
        assert.deepEqual(filterLongWords(s,4),expected);
    });
    it(`From this ${s} words that has longer than 3 characters is ${expected1}`,function(){
        assert.deepEqual(filterLongWords(s,3),expected1);
    });
    it(`From this ${s} words that has longer than 2 characters is ${expected2}`,function(){
        assert.deepEqual(filterLongWords(s,2),expected2);
    });
    it(`From this ${s} words that has longer than 1 characters is ${expected3}`,function(){
        assert.deepEqual(filterLongWords(s,1),expected3);
    });
});