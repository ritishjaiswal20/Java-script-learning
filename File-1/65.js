//sets (its variable) 
//store data
//sets also have its own  method
//No index based acces
//order is not guranted 
//unique iems only(no duplicate allowed)
//it is iterbale

//how to crate set
const string=new Set("abc");
console.log(string);//it will print {'a','b','c'};

const numbers=new Set([1,3,3,2,4,5,5]);
console.log(numbers);//it will print {1,3,2,4,5};
//it will not store duplicate elements


const items=["item1","item2","item3","item4","item5","item6"];
const newnumbers=new Set();//it will create a new empty set
//add method in set 
newnumbers.add(1);//it will add one to set
newnumbers.add(2);//it will add two to set
newnumbers.add(3);//it will add three to set
newnumbers.add(items);//it will add items to set
newnumbers.add(['item1','item2','item3','item4','item5','item6']);//it will add array to set this array elemests is same as  items array elemets but iit will though because it is a new array
console.log(newnumbers);//it will print {1,2,3,["item1","item2","item3","item4","item5","item6"],["item1","item2","item3","item4","item5","item6"]}

//has method in set
if(newnumbers.has(1)){
    console.log("yes 1 is present");
}else{
   console.log("no 1 is not present");
}

if(newnumbers.has(6)){
    console.log("yes 6 is present");
}else{
    console.log("no 6 is not present");
}

for(let numbers of newnumbers)
{
    console.log(numbers)
}

//to extract unique array element from the given arrays
const arr=[1,2,2,3,3,4,3,5,4,5,5,6];
const uniqueelements=new Set(arr);
console.log(uniqueelements);//it will print {1,2,3,4,5,6}
console.log(arr)//it will print {1,2,2,3,3,4,3,5,4,5,5,6}
//to find lenght of unique elements
let l=0;
for(let numbers of uniqueelements)
{
    l++;
}
console.log(l);//it will print 6




