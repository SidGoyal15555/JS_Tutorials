// spread and rest operators

function sumOne(a,b){
    return a+b;
}

var myA = [5,4];
//console.log(sumOne(myA)); >> this throws an error bcoz it expects only two int values wheras we r giving an array
//console.log(sumOne(...myA)); //spead op

//rest operator => in this we donot know how many values are going to be passed into the function
//we are considering it to be an arrays on ints
function sumTwo(...args){
    console.log(args);// converts the individual values and convert them into array
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
}

console.log(sumTwo(2,3,4,5,6));

