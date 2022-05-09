//how to iteerate objects 
const person ={
    name:"ritish",
    age:"22",
    "person hobbies":["guitar","playing"]
};
//for in loop
//objectw].keys
for(let key in person){
    console.log(person[key]);// it will print itish 22 ["gutar,"playing]
    // console.log(key,":",person[key]);
}


console.log(typeof (Object.keys(person)));// it will print object
const val=Array.isArray((Object.keys(person)));// it will aswsign true in val;
console.log(val);// it wuill print true

