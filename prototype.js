//Creating a prototype
//Functional way of creating an object
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is ${this.courseCount}`);
    };
};

User.prototype.getfirstName = function() {
    console.log(`Your First Name is : ${this.firstName}`);
}

var sid = new User("Siddhartha", 2);
sid.getCourseCount();
sid.getfirstName();

var ayu = new User("Aloosi", 1);
console.log(ayu);
