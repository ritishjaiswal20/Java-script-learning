// undefined
let lname;
console.log(lname); // it will print undefined

var vname;
console.log(vname); // it will print undefined

// const cname;
// console.log(lname); // itor aas we can not do the same thing with const

//NULL will give yopu err
let myvariable = null;
console.log(myvariable, typeof myvariable); // it will print null and object(because it is a bug** in javascript)
myvariable = "ritish";
console.log(myvariable, typeof myvariable); // it will print ritish and string

//BigInt
let mynumber = 12;
console.log(mynumber, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER); // it will print 12 and 9007199254740991 and -9007199254740991

let Bnumber = BigInt(12);
console.log(Bnumber); // it will print 12 and very large number can be stored her
let b2number = 125n;
console.log(b2number); // it will print 125n and very large number can be stored her
console.log(typeof b2number); // it will print bigint
