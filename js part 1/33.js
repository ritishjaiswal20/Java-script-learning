// how to create objects

const person={
        name:"ritish",
        age:"22",
        gender:"male",
        hobbies:["guitar","sleeping","listening music"]
}
console.log(person);//it wiill print name {name: 'ritish', age: '22', gender: 'male,hobbies:["guitar","sleeping","listening music"]}

console.log(person.name);//it wiill print ritish
console.log(person.age);//it wiill print 22
console.log(person.gender)//it wiill print male


console.log(person["name"]);//it wiill print ritish
console.log(person["age"]);//it wiill print 22
console.log(person["gender"])//it wiill print male

person.id="122";
person["idd"]="122";
console.log(person)// it will add id to person 
