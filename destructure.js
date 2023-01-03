//const user = ["sid", 3, "admin"];

// var role = user[2];
// var name = user[0];
//seprate these things on the go

//var[name , courseCount , role] = user;

// console.log(name);


//normal object
const MyUser = {
    name: "sid",
    courseCount: 5,
    role: " admin",
};
// console.log(MyUser.courseCount);

//destructuring of an object
//in order to destructure the names shoould also be same as defined in the object above
const {name, courseCount , role} = MyUser;
console.log(role);
//const {name, MycourseCount , role} = MyUser; throws an undefined