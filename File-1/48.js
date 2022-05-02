//block scope vs function scope
//let and const are block scope variables
//var is function scope variable

{
    let firstname="ritish";
    const middlename="kumar";
    var lastname="jaiswak";
     
    console.log("firstname",firstname);//it will print the first name ritish
    console.log("middlename",middlename);//it will print the middle name kumar\
    console.log("lastname",lastname);//it will print the last name jaiswak
}

console.log("firstname",firstname);//it will give error as firstbname is let type variable which is bloack space and let is declared inside the block
console.log("middlename",middlename);//it will  error as middlename is const type variable which is bloack space and const is declared inside the block
console.log("lastname",lastname);//it will print the last name jaiswak  as const is function scope varible 



{
    let firstname="rishabh";// it can be declared again it is is declared in seprate block
    const middlename="kumar";
    var lastname="yadav";
     
    console.log("firstname",firstname);//it will print the first name rishabh
    console.log("middlename",middlename);//it will print the middle name kumar
    console.log("lastname",lastname);//it will print the last name yadav
}


let firstname="sanjevv"// it is also a seperate block 