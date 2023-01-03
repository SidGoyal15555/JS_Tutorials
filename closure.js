// function init(){
//     var firstname = "Siddhartha";
//     console.log("i am init");
//     function sayfirstName(){
//         console.log(firstname);
//     }
//     return sayfirstName;
// }
// var closure = init();
// closure();

//another example

function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5 = doAddition(5);

console.log(add5(4)); 

//very strange and nice concept!
//redux appyies the concept of closures that's why we see ()() a lot in redux syntaxes
console.log(doAddition(5)(5));

//doAddition()()() // this is also called as currying and it used in other languages also!