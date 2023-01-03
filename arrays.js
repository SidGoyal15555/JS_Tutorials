
//callback function: () => ()
//normal arrow function: () => {}
// remember if we use {} i.e. curly bracis we have to return somethin from the arrow function.

var result = [2,4,6,8].every((e) => (e%2===0));

console.log(result);