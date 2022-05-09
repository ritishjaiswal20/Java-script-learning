//reduce method

const numbers=[1,2,3,4];

const sum=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
//here accumullator value is assigned by default zero
console.log(sum);
//accumulator currentvalue return 
//0            1             1
//1          2             3
//3          3             6
//6          4             10

const subtract=numbers.reduce((accumulator,currentValue)=>{
    return accumulator-currentValue;
},100);//here accumulator value is assigned by default to 100

console.log(subtract);
//accumulator currentvalue return
//100            1             99
//99          2             97
//97          3             94
//94          4             90


const usercart=[
    {productId: 1,productName: 'laptop',price: 1000},
    {productId: 2,productName: 'mobile',price: 500},
    {productId: 3,productName: 'watch',price: 200},
]
const totalprices=usercart.reduce((totalprice,currentproduct)=>{
    return totalprice=totalprice+currentproduct.price;
},0)

console.log(totalprices);