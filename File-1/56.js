//filter method
const numbers=[1,2,3,4,5,6,7,8];

const iseven=function(numbers) {
    return numbers%2==0;// it return the even numbers
}

const evenNumbers=numbers.filter(iseven);// it will create anew array and store those numbers which are even
console.log(evenNumbers);
//filter functions are used to filter the number based upon the functionality

const oddNumbers=numbers.filter((number)=>number%2!=0);// it will create anew array and store those numbers which are odd
console.log(oddNumbers);