//find method 
const myarr=["hel","cat","doggy","lion"];

function islength3(string){
    return string.length==3;
}
const ans=myarr.find(islength3);// it will find those sttrings in the array which have length 3
console.log(ans);//it will print only the first elment with length 3 
//so here hel and cat both have legnth 3 but only hel will print

const ans2=myarr.find((string)=>string.length==4);//it will give only the first elment with length 4
console.log(ans2);//it will print only the first elment with length 4 which is lion

const users=[
    {userId:1,userName:"harrshi"},
    {userId:2,userName:"harsh"},
    {userId:3,userName:"nitish"},
    {userId:4,userName:"mohit"},
    {userId:5,userName:"sagar"},
];

const myUser=users.find((user)=>user.userId==3);
console.log(myUser);//it will print the user with id 3