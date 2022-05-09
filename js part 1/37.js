//spread operator
const arr1=[1,2,3];
const arr2=[5,6,7];
const arr3=[...arr1,...arr2];
console.log(arr3);//it will print 1,2,3,4,5,6,7;
const newarr=[..."1234567"];
console.log(newarr)//it will print 1,2,3,4,5,6,7


//spread operator in object
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2={
    key1:"new key 1 value",
    key3:"value3",
    key4:"value4",
}
const newobject={...obj1,...obj2};//it will print new key 1 value,value2,value3,value4;
console.log(newobject);

const newobject2={...obj2,...obj1};//it will print value1,value2,value3,value4;
console.log(newobject2);

const newobject3={...'abcd'};
console.log(newobject3);//it will print 0:a,1:b,2:c,3:d;

const newobject4={...['item1',"item2"]};
console.log(newobject4);//it will print 0:item1,1:item2;