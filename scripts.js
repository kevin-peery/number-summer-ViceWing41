//Declare function
function numberSummer(start, end) {
  console.log("fxn received arguments as follows: ", start, end);
}

//Invoke function
numberSummer(1, 10);

let sum = 0;

//Loop
for (let i = 1; i <= 10; i++) {
  //Calculate
  sum += i;
}

//Display
console.log(sum);
