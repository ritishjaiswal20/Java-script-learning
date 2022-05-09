//param destructuring
const person={
    firstName:"ritish",
    gender:"male",
    age:"22",
}
function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);