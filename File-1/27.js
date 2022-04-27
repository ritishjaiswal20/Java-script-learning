// for loop in array
let fruits= ["apple", "banana", "cherry"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase);
}
let fruit2=[];
for(let i=0;i<fruits.length;i++){ 
    fruit2.push(fruits[i].toUpperCase);// it will make new array containing fruits and put it into fruit2 
}