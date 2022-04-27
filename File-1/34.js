// differnce between dot and brackert notation
const key="email";
const person={
  name:"ritish",
  gender:"male",
  "person hobbies":["playing","swinming"],
}
console.log(person);// it will print {name: 'ritish', gender: 'male', person hobbies:['playing', 'swinming']}
console.log(person["person hobbies"]);// in . it is not possible to use this type of var as whitespace iws not valid 
person[key]="ritish jaiswal20@ga";// it not possible in dot opertaor 
// here first key value is assigned int the person object and second key value is assigned in the person object
//where as in dot notaion it is not poosible
