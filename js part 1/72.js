//arrow function

//in arrow function this will point to window
//we cant point this to some specific object
//in arrow function

const user1={
    firstname:"hrashit",
    age:8,
    about:()=>{
        console.log(this);//it will print windows
        console.log(this.firstname);//it will print undefined
    }
}
user1.about();//it will print the same
user1.about.call(user1);//same in this case also

