//function returning functions
function myFunc(){
    function hello(){
        return "hello world";
    }
    return hello;// here a function is returned
}
const ans=myFunc();
console.log(ans());

// first we will call myFunc function the it will return hello function which will stored in ans variable the it will call hello function and it will return hello world            