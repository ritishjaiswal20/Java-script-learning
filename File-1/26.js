// how to clone array
//how to concatenate two Arrays

let arr1=["item1","item2"];
//1st method 
let arr2=["item1","item2"];

//2nd method
let arr3=arr1.slice(0);//it will slice the element of arr1 from 0 to end of arr1

//3rd method
let arr4=[].concat(arr1); // it will put ellemnt of arr1 into arr4;

//4 method
let arr5=[...arr1];//it is called spread opertaor it will spread elemnt of arr1 and put into arr5;

arr1.push('item3');
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);


let onemorearray=["item3","item4"];
arr2=[...arr1,...onemorearray]; // it will concatenate two arrays
