// array destrcucting
const myarr=["val1","val2","val3","val4","val5"];
let [myvar1, ,myvar2,...myNewarray]=myarr;
console.log(myvar1);//val1
console.log(myvar2);//val3
console.log(myNewarray);//["val4","val5"]
// and val 3 is skipped  to skip the value we have to give one commma
// if the no of value is less it will assigned undefined 