// functions 
function pnt(){
    console.log("hello worls");//it will print hello world
}
pnt();

function add(num1,num2,num3){
    return num1+num2+num3;
}
console.log(add(3,4,5));// it will return 12

function firstchar(anystring){
    return anystring[0];// return 1st char of any string5
}
console.log(firstchar("hello"));// it will return h

function ind(myarr,target){
    for(let i=0;i<myarr.length;i++){
        if(myarr[i]===target){
            return i;
        }
    }
    return -1;
}

const myarr=[1,2,3,5];
const ans=ind(myarr,1);
console.log(ans);// it will print 2;

