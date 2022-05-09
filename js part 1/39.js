//objetcts inside array
//very usefull uin real world projects 
const users=[
    {userId: 1,firstName:'harshit',gender:'male'},
    {userId:2, firstName:'ritish',gender:'male'},
    {userId:3, firstName:'rishabh',gender:"male"},

];

for(let user of users){
// console.log(user);//it will print {userId: 1, firstName: 'harshit', gender: 'male'} {userId: 2, firstName: 'ritish', gender: 'male'} {userId: 3, firstName: 'rishabh', gender: 'male'}
console.log(user.firstName);
}
