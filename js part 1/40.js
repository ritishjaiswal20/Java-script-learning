//nessted destructuring 
const users=[
    {userId: 1,firstName:'harshit',gender:'male'},
    {userId:2, firstName:'ritish',gender:'male'},
    {userId:3, firstName:'rishabh',gender:"male"},

];

const [user1,user2,user3]=users;
console.log(user1);//it will print {userId: 1, firstName: 'harshit', gender: 'male'}
console.log(user2);//it will print {userId:2, firstName: 'ritish', gender: 'male'}
console.log(user3);//it will print {userId:3, firstName: 'rishabh', gender: 'male'}

const[{firstName:userfirstname ,userId:firstuserid}, ,{userId:seconduserid}]=users;
console.log(userfirstname);//it will print harshit
console.log(firstuserid);//it will print 1
console.log(seconduserid);//it will print 3
