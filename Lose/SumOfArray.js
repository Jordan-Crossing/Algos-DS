//----------------------Question----------------------//

// write a function that takes in an array and returns the sum of the elements of
// the array but for each nested array the sum of that array is 2x and so on
// so an array that was 3 levels deep would be 3x

//----------------------Reflections----------------------//
// i was on the right track knowing that i should take a recursive approach
// and even better still knowing the depth counter should be outside the for loop.
// But ultimately it returns the wrong result. In retrospect i should have
// set the multiplier as a parameter then incremented it when calling it recursively

function productSum(array) {
  let depthCounter = 1;
  let sum = 0;
  for (let index of array) {
    if (Array.isArray(index)) {
      depthCounter++;
      sum += productSum(index) * depthCounter;
      depthCounter--;
    } else {
      sum += index;
    }
  }
  return sum;
}
const cat = [1, 2, 3, [2, 3]];
console.log(productSum(cat)); //returns 16

// i was on the right track knowing that i should put the
