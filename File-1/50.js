// rest parameters
 function myfunc(a,b,...c){
     console.log(`a=${a}`);//it will print 1
     console.log(`b=${b}`);//it will print 2
     console.log(`c=${c}`);//it will print [3,4,5,6,7,8,9]
 }
 myfunc(1,2,3,4,5,6,7,8,9);

 function addall(...numbers){
     let total=0;
     for(let number of numbers){
         total=total+number;
     }
     return total;
 }
 console.log(addall(1,2,3,4,5,6,7,8,9));