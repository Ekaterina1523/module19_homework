let myObj = {};

myObj.name = 'Lily';
myObj.age = 25;
myObj.isStudent = false;

myObj.greet = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
};

delete myObj.isStudent;

myObj.greet();