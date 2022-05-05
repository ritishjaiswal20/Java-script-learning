//clone using object.assign

const obj={
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
const obj2={...obj};
obj.key4="value4";
console.log(obj)//t will print {key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}
console.log(obj2);//{key1: 'value1', key2: 'value2', key3: 'value3'}

//old method of cloning
const obj3=object.assign({},obj);
//it will also do the clonning



