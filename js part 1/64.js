//iterables
//jisme ham for of loop laga sakte hai
//string array are iterable

const firstName="harshit";
for(let char of firstName) {
    console.log(char);
}

const items=['item1', 'item2','item3'];
for(let item of items) {
    console.log(item);
}
//array is also iterables

const users={'key1':'value1','key2':'value2'};
// for(let user of users) {
    // console.log(user);//it will give error as object is not iterable
// }

//array like objects are iterable
const lastName="jaiswal";
console.log(lastName.length);
console.log(lastName[0]);
