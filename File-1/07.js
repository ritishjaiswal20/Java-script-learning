//trim()
let firstName = "    ritish   ";
console.log(firstName.length);
firstName.trim(); //
console.log(firstName.length); // it will give same length as it will not assign into some variable
firstName = firstName.trim();
console.log(firstName.length);

// to upper case

firstName.toUpperCase();
console.log(firstName); //it will print the same
firstName = firstName.toUpperCase(); // this will asign to uppercase in top variable
console.log(firstName);

// same in lower case

//slice
let lastName = "jaiswal";
lastName = lastName.slice(0, 5); // it will cut the word from index 1 to 4 and not including the index 5
console.log(lastName);
