//Declare function
function numberSummer(start, end) {
  //Declare variable
  let sum = 0;

  //Loop
  for (let i = start; i <= end; i++) {
    //Calculate
    sum += i;
  }

  //Display
  console.log(sum);
}

//Invoke function
numberSummer(2, 100);
