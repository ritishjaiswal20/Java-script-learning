//call  method
const user1={
    firstname:"harshit",
    age:8,
    about:function(branch,year){
        console.log(`${this.firstname} is ${this.age} years old and studies in ${branch} in ${year}`);
    }
}
const user2={
        firstname:"ritish",
        age:22,
}
const user3={
        firstname:"sachin",
        age:30,
}
user1.about();//it will print harshit is 8 years old as this is pointing to user1
user1.about.call(user1);//it will print ritish is 22 years old as call function take input to which this will bw poiting
user1.about.call();//it will print undefined is undefined years old as call function take input to which this will bw poiting and here there is no input argument
user1.about.call(user3,"cce");//it will print sachin is 30 years old and stuies in cce branch in year undefined  as the second argument is not passed as call function take input to which this will bw poiting and here there is no input argument




//another examole

function info(branch,year){
    console.log(`${this.firstname} is ${this.age} years old and studies in ${branch} in ${year}`);
    
}
const student={
    firstname:"harshit",
    age:8,
}
const student2={
    firstname:"ritish",
    age:22,
}
info.call(student)//this will call student having firstname as harshit and age as 8 as thi


//apply function decalration
//in call we pass agrument sperated by commas
//but in call we pass argumenents in from of list

info.apply(student,["cce","2023"]);//here arguments is passed as a array


//bind function 
const func=info.bind(student2,"it","2023");//bind will not call the function instead it will return a function that will
//so here bind will take all the arguments and point this to specific student and return a function
//and further the functuions can be used
func();//it will print ritish is 22 years old and studies in it in 2023
