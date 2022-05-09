// primtive vs rerence type in js 
let num1=5;
console.log(num1);  // it will print 5
let num2=num1;
console.log(num2);  // it will print 5
num1++;
console.log(num1);  // it will print 6
console.log(num2);  // it will print 5
//because it is of primitive type
//ex (null, undefined, boolean, number, string, symbol, and BigInt)


let arr1=["2","3"];
console.log(arr1);  // it will print 2,3
let arr2=arr1;
console.log(arr2);  // it will print 2,3
arr1.push("4");
console.log(arr1);  // it will print 2,3,4
console.log(arr2);  // it will print 2,3
//because array is of reference type

//This happens because arrays are reference types in JavaScript. In other words, if you assign an array to another variable or pass an array to a function, it is the reference to the original array that is copied or passed, not the value of the array.

//primite type are stored in stack where as refrrence type are stored in heap 
//in stack new space is alloted to each variable where as in heap a varible is given addres and that address is stored in the variable  