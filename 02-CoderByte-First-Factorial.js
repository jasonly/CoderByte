//First Factorial
function FirstFactorial(num) {
  if (num == 0) {
      return 1;
  }else if (num > 1){
    return num * FirstFactorial(num – 1);
  }
};

//If num is equal to 0 then return 1, if num is greater than 1 then return num * num-1
//based this one off of the proof for factorials.
//the else if num = 3 then 3*(3-1) -> (2-1) -> ends at if num == 0 which is 1
