// Q
// S
// E
// A
// B
// P
// C
// T
// R
// question silly elephants always biking past cars together rapidly

// Question
//     A special array is a non-empty array that contains either integers or other special arrays.
//     the product sum of a special array is the sum of its elements, where special arrays inside it
//     are summed themselves and then multiplied by their level of depth.

//     The depth of a special array is how far it is nested
//         [] = 1
//         [[]] = 2
//         [[[]]] = 3
// Sample IO
//     input
//         array = [5, 2, [7, -1], 3, [6,[-13, 8], 4]]

//     Output
//         12

// Edgecases
// Approach
//     recursion
// BigO
//     O(n) time and O(d) space

//     n= number of elements
//     d= greatest depth of special arrays in array
// Psudo code

// def productSum(array, multiplier=1):
//     sum = 0
//     for element in array:
//         if type(element) is list:
//             sum += productSum(element, multiplier + 1)
//         else:
//             sum += element
//     return sum * multiplier

// Code

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}

// Tests
// Refactor/Reflections
