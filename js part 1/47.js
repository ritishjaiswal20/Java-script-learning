//lexical scope
const myVar="value1";

function myApp(){
      const myapp2=()=>{
            // const myVar="value2";
            console.log(myVar);
      }
        myapp2();
}

myapp();
// it will serach for  variable inits own functuion if it is not avalible then it wuill search in the lexical scope

