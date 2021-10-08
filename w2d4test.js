
describe("String.prototype.filter=function(band)",function(){
    
    it("result for [This house is not nice!]",function(){
 assert.equal("This house is nice! ","This house is not nice!".filter("not"));
    });

});

describe("Array.prototype.bubleSort=function()",function(){
    
    it("sort using bubleSort [-2,3,4,-3,0,3]",function(){
 assert.deepEqual([-3,-2,0,3,3,4],[-2,3,4,-3,0,3].bubleSort());
    });

});



