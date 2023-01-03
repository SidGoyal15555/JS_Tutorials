var user = {
    fullName : "Siddhartha Goyal",
    age: 21,
    googleSignIn: true,
    role: "Admin",
    loginCount: 42,
    courseList:[],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.fullName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

var courseList = true;
console.log(user.fullName);
console.log(user.getCourseCount());
user.buyCourse("React Js Course");
console.log(user.getCourseCount());
