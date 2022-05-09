//maps method
const person=new Map();
console.log(person);
person.set('firstname', 'John');
person.set('age',23);
person.set(1,"one");
person.set([1,2,3],'onetwothree');
console.log(person);
console.log(person.get("age"));//it will print 23
console.log(person.get(1));//it will print one
console.log(person.keys());

for(let keys of person.keys()){
    console.log(keys,typeof keys);
}

//it is iterable object


