//splice method
//start delete insert
const myarr=['item1','item2','item3','item4','item5'];
myarr.splice(1,2);
console.log(myarr);

const ansarray=myarr.splice(0,1);
console.log(ansarray);

//insert and delete items
const myarr2=['item1','item2','item3','item4','item5'];
const deletedItems=myarr2.splice(1,2,'item6','item7','item8');
//first it will delete the 2 items starting from index 1 and place theses items from the given starting index 
console.log(myarr2);//['item1', 'item6', 'item7', 'item8', 'item4', 'item5']
console.log(deletedItems);//['item2', 'item3']

