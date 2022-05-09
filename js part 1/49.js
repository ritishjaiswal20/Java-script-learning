//default parameters
function add(a,b=0){
    //if b is not passed then it will take 0 as default value
    return a + b;
}
const ans=add(4,5);
console.log(ans);