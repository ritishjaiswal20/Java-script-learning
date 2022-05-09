//important array methods
//forEach method


const numbers=[1,2,3,4];
function add(number,index){
    console.log(`index is ${index} and numberis ${number}`);// it will print number is 1 and index is 1 etc for each number
}
numbers.forEach(add);
//it will iterate for each number in the numbers array and call the add method seperately for each number

numbers.forEach(function(number){
    console.log(number*3);  // we can declare a function inside forEach methods
    //it wll iterate top the numbers array and call the unnamed function for each number in the array 
})

// we can define function itself in forEach loop



//example 
const users=[
    {firstName:"harshit", age:23},
    {firstName:"mohit", age:24},
    {firstName:"shivam", age:25},
]
users.forEach(function(user){
    console.log(user.firstName);    
})
