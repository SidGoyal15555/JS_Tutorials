// we will learn more about classes when we would make more and more complex projects

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    //to make a method private in core js we make it by adding # in the beginning
    #courseList = [];
    
    getInfo(){ // this is how we are defining the functions and some people calls it method
        return {name : this.name , email: this.email };
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    login(){
        return "you are logged in";
    }
}

class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "login for admin only";
    }
}

//let sid = User("Sid", "xyz");

// we are going to see how we can keep our classes completly safe and use them in another file!!!!

// we can use export keyword
// 2nd and major way is given below

module.exports = User;

// const ayu = new User("Ayushi","ayu@xyz");
// console.log(ayu.getInfo());
// ayu.enrollCourse("React Bootcamp");
// console.log(ayu.getCourseList());
// console.log(ayu.courseList);


const tom = new SubAdmin("tom","choomey@xyz");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());