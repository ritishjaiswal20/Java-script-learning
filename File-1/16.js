let winingnumber = 20;
let guess = +prompt("enter a number");
if (guess === winingnumber) {
  alert("you win");
} else {
  if (guess < winingnumber) {
    alert("your number is too small");
  } else {
    alert("your number is too large");
  }
}
