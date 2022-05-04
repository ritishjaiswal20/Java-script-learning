//every method
//this method return true or false depending
//int he below case it ierate over all the elements in the array and check if all the elements are even or not  if any single element is found then it will return false;
//if all the elements are even then it will return true;
const numbers=[2,4,6,8,10];
const ans=numbers.every((number)=>number%2==0);
console.log(ans);//it will print true if all the numbers are evenlse false


//example
const usercart=[
    {product:'samsung',price:200},
    {product:'iphone',price:400},
    {product:'redmi',price:100},
]
//to check whather the prof all the product are greater than 50 or not
const ans2=usercart.every((product)=>product.price>50);
console.log(ans2);//it will print true if all the products are greater than 50 else false
const ans3=usercart.every((product)=>product.price>100);
console.log(ans3);//it will print false if one product is greater than 100
