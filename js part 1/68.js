//optional chaning
const user={
    firstName:"harshit",
    address:{houseNumber:'1234'},
    // regno:{id:'19930'}
}
console.log(user.firstName);//it will print harshit
console.log(user.address.houseNumber);//it will print 1234
console.log(user?.regno?.id);//it is optional chaning it means that if user is present then it will check regno and if regno is present the it give id
//if we dont use the optional chaning then it will give error


