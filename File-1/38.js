//object destructing
const band={
    bandName:"yoo",
    famousSong:"song1",
    year:2000,
    anoteherfanoussong:"song2",
};
// let{bandName:var1,famousSong:var2}=band;// it will assign the value of bandName and famousSong to var1 and var2
// or
// let {bandName,famousSong}=band;// it will assign the vaalue of bandName and famousSong to bandName and famousSong
// or
let {bandName,famousSong,...rest}=band; // rest will put remaning rest props in rest
// console.log(var1);
// console.log(var2);
console.log(bandName);
console.log(famousSong);
console.log(rest);