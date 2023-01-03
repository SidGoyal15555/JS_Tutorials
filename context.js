// tipper("80");

// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill+5);
// }

// bigtipper("200");

// var bigtipper = function (a){
//     var bill = parseInt(a);
//     console.log(bill+15);
// }

//this code doesn't work because
// variables are scanned and made undefined during execution context 
//whearas functions are scanned and made available during execution context


//Another example of this is given below:

// console.log(name);

// var name = "Siddhartha";

//this gives undefined due to the second rule of execution context

console.log(name);

var name = "Siddhartha";

function myName(){
    console.log("Mr. S");
}
myName();

console.log(name);