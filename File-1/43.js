//arrow functions
const print=()=>{
    console.log("arraow function");
}
print();
const sumthreenumbers=(num1,num2,num3)=>{
    return num1+num2+num3;
}
console.log(sumthreenumbers(1,2,3));

const iseven=number=>{
    return number%2===0;
}//if our function is taking only one paramter

const ispositive=number=> number>0;
console.log(ispositive(5));
