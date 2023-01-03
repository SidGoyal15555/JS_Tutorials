const sid = {
    firstName : "Siddhartha",
    lastName: "Goyal",
    role: "Admin",
    courseCount : 3,
    getInfo: function(){
        console.log(`
        firstName is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is styuding ${this.courseCount} courses
        `);
    }
}

const dj = {
    firstName : "Dwhani",
    lastName: "Janardan",
    role: "Sub-Admin",
    courseCount : 4,
    
}

// var djInfo = sid.getInfo.bind(dj);

// djInfo();

// sid.getInfo();

sid.getInfo.call(dj);