//callback functions
function myfun2(name){
    console.log("you are inside the function 2");
    console.log(`your name is ${name}`);
}

function myfunc(callback){
    console.log("hello there you are in function 1");
    callback("ritish");
}
myfunc(myfun2);//we pass a myfunc2 function in the myfunc function
