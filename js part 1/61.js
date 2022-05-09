//some method
//it will check if any number is present int the array follows the condition or not it will return true if follows or false
const numbers=[1,2,3,4];
const ans=numbers.some((number)=>number%2==0);
console.log(ans);//it will print true if any of the number is even else false


const usercart=[
    {product:'samsung',price:200},
    {product:'iphone',price:400},
    {product:'redmi',price:100},
]
//to check whather the prof all the product are greater than 500  or not the product
const ans2=usercart.some((product)=>product.price>500);
//it will print false;
console.log(ans2);