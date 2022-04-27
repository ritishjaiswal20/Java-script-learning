// array push pop
    let fruits=["apple","banna"];
    console.log(fruits); //it will print apple banna
    
//push
    fruits.push("orange");
    console.log(fruits);// now it will print apple banna orange as it will push orange in array
    
   //pop
  let popedfruit=fruits.pop();
    console.log(fruits);// now it will print apple banna as it will pop orange from array
   console.log(popedfruit);// now it will print orange as it will pop orange from array


   //unshift
   //it will add element in starting in the array
   fruits.unshift("kella");
   console.log(fruits);// now it will print kella apple banna as it will unshift kella in array


   //shift
   //it will remove element from starting in the array
   let removedstartingfruit=fruits.shift();
   console.log(fruits);// now it will print apple banna as it will shift kella from array

   //push and pop are fast as compared to shift and unshift as pop and pop has to travese ill last and remnoved while shift and unshift has to first push all the element in the array to one step forward so it take time 