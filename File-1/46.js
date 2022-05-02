//functions inside functions
function app(){
    const functionexpression=function(){
        console.log("function expression");
    }
    const arrowfunction=()=>{
       console.log("fucntion arrow");
    }
    const arrowfunctionwithonenumber=number=>{
        return number>0;
    }
    const arrowfunctiosinglenumberwithoutreturn=number=>number>10;
    
    const arrowfunctionwithmultiplenumberwithoutreturn=(number1,number2,number3)=> number1+number2+number3;

   console.log("welcome to functuions inside functions");

   functionexpression();
   arrowfunction();
   console.log(arrowfunctionwithonenumber(10));
   console.log(arrowfunctiosinglenumberwithoutreturn(12));
   console.log(arrowfunctionwithmultiplenumberwithoutreturn(10,20,30));

}

app();