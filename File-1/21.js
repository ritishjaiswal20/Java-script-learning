for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i); //when i==4 this will also not prnt the loop will break;
}

console.log("hello");
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue; // the loop will go back from here to the conditon and not print inthis iteration
  }
  console.log(i);
}
