//hoisting
hello();
function hello(){
    console.log("hello world");
}//it will rn in theis case 
//but in case when we use fucntuion expression it will give you error

console.log(hello);
var hello="hello world";
// in case of var it will give you undefined
//but in case of let and const  it will giveyou error