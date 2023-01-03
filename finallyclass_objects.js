//import User from "./finally_classes.js";

const User = require("./finally_classes");

const sid = new User("sid", "xyz");
// console.log(sid.getInfo());

sid.enrollCourse("React Bootcamp");
sid.enrollCourse("MERN Bootcamp");
//console.log(sid.getCourseList());

//looping through the course list
let courses = sid.getCourseList();

courses.forEach((c) => console.log(c));



