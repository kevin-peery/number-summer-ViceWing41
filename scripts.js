//Declare function
function numberSummer(start = 1, end = 10, interval = 1) {
  //Declare variable
  let sum = 0;

  //Loop
  for (let i = start; i <= end; i += interval) {
    //Calculate
    sum += i;
  }

  //Display
  console.log(sum);
}

//Invoke function
numberSummer(2, 100, 2);
