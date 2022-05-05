//methods
const person={
    firstname: 'John',
    age:'22',
    about:function(){
        console.log(`person having name is ${this.firstname} and having age is ${this.age}`);
    }
}
person.about();//it will print person having name is john na dhaving age os 22

//this keyword kya karega?
//this keyword jab function call hota hai toh uske obj ko point karega toh yaha person object functio ko call kiya hai toh this wiill point to person



//example of this method
function studentinfo(){
    console.log(`student name is ${this.firstname} and his regno is ${this.regno}`);
}
const student1={
    firstname:"ritish",
    regno:"123",
    info:studentinfo,
}
const student2={
    firstname:"rishabh",
    regno:"345",
    info:studentinfo,
}
const student3={
    firstname:"sasnjeev",
    regno:"5567",
    info:studentinfo,
}
student1.info();//here it will print studennt name is ritish and regno is 123 as this is pointing to student1;
student2.info();//here it will print studennt name is rishabh and reg is 345 as this is pointing to student 2;
student3.info();//and same here

//pehle student1.info( call then pointer studetninfo pe jaega then console.log chalega lkn usme this point student1 ko karega toh fir wo student1 var mei jaa kar student1 ka firstname print karega anad student1 ka regno same fir teeno mei  hoga)

