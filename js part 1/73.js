//object oreinted programing
const userMethods={
    about:function(){
        
    }
}
function createuser(firstname,lastname,age,regno,gender,branch,year){
    const user={};//create obj
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.regno=regno;
    user.gender=gender;
    user.branch=branch;
    user.year=year;
    user.about=function(){
        console.log(`${user.firstname} ${user.lastname} has age ${user.age} having branch ${user.branch} ${user.year} having regno ${user.regno}`);
    }
    return user;
}

const user1=createuser("sri","krishna",20,"19922","male","cce","2023");
console.log(user1);//it will print complete function
user1.about();