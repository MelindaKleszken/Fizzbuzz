/*FizzBuzz:
- Create a function to log out in JS all numbers up to 100, replacing any multiple of 3 with “Fizz”, any multiple of 5 with “Buzz” and any multiple of 3 & 5 with “FizzBuzz”*/
/* ask user for number input*/
var apple = prompt("Please enter a number between 0 and 100:");
/*apple2 to become integer*/
apple2 = parseInt(apple);
/*check input*/
if (Number.isInteger(apple2)) {
  console.log("FizzBuzz is starting......")}
else {
  console.log("Input is not a number!")}

/*for itirate through numbers*/
for (n= apple2; n <= 100; n++) {
  /*check input multiply of 3 or 5*/
  if ((n % 3 == 0) && (n % 5 == 0)) {
    console.log("FizzBuzz")
  }
  /* check input if *3*/
  else if (n % 3 == 0) {
    console.log("Fizz")
  }
  /*check if input is multiply of 5*/
  else if (n % 5 == 0) {
    console.log("Buzz")
  }
  /*just print number*/
  else {console.log(n)}
}
console.log("........FizzBuzz ended");
