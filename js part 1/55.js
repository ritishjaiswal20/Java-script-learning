//map method
const numbers=[3,4,5,6,7,8,9,10,11];
const square=function(number){
    return number*number;
}
const squareNumber=numbers.map(square);
console.log(squareNumber);

const cubeNumbers=numbers.map((number)=>number*number*number);
console.log(cubeNumbers);

//examples
const users=[
    {firstName:"harshit", age:23},
    {firstName:"mohit", age:24},
    {firstName:"shivam", age:25},
]
const userfnmae=users.map((user)=>user.firstName);
console.log(userfnmae);