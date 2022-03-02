// -----------------------------------QUESTION----------------------------------- //
// Even Number of students wearing blue or red shirts.

// arrange students in two even rows with the same amount of students

// all red shirts same row
// all blue shirts same row
// each student in the back row must be taller than the one in the front row.

// two input array of same length each index represents a student and the
// value at that index represents the height.

// write a function that returns whether or a not a class photo
// following the rules can be taken

// -----------------------------------Sample Inputs and Outputs----------------------------------- //

// input

// redShirt = [3,4,2]
// blueShirt = [2,3,1]

// output = true

// -----------------------------------APPROACH----------------------------------- //

// sort arrays into decending order compare their first index to find back row
// loop over one array and compare index if value of front row is greater than value
// of the coresponding back row return false

// -----------------------------------Big O CHAT----------------------------------- //

// should be a Big O of O(nlog(n)) due to the sort function

// n = number of students

// O(1) space -

// -----------------------------------SUDO CODE----------------------------------- //

// function canTakePhoto(redShirts, blueShirts):
//     redShirts.sort(decending)
//     blueShirts.sort(decending)

//     if(redShirts[0] == blueShirts[0])
//         return false

//     if(redShirts[0] > blueShirts[0])
//         redShirts = backRow
//         else (blueShirts = backRow)

//     for(redShirts)
//         if redShirts[index] > blueShirts[index] && blueShirts == backRow
//             return false

//     return true

// -----------------------------------CODE----------------------------------- //
// function classPhotos(redShirtHeights, blueShirtHeights) {
//   redShirtHeights.sort((a, b) => b - a);
//   blueShirtHeights.sort((a, b) => b - a);

//   if (redShirtHeights[0] === blueShirtHeights[0]) {
//     return false;
//   }

//   let backRow = 0;

//   if (redShirtHeights[0] > blueShirtHeights[0]) {
//     backRow = redShirtHeights;
//   } else {
//     backRow = blueShirtHeights;
//   }

//   for (let index = 0; index < redShirtHeights.length; index++) {
//     if (
//       redShirtHeights[index] > blueShirtHeights[index] &&
//       backRow === blueShirtHeights
//     )
//       return false;
//     if (
//       blueShirtHeights[index] > redShirtHeights[index] &&
//       backRow === redShirtHeights
//     )
//       return false;
//     if (blueShirtHeights[index] === redShirtHeights[index]) return false;
//   }

//   return true;
// }
// -----------------------------------TESTS----------------------------------- //

// let redShirtHeights = [1, 1, 1, 1, 1, 1, 1, 1];
// let blueShirtHeights = [5, 6, 7, 2, 3, 1, 2, 3];

// redShirtHeights.sort((a, b) => b - a);
// blueShirtHeights.sort((a, b) => b - a);

// if (redShirtHeights[0] === blueShirtHeights[0]) {
//   return false;
// }

// console.log(redShirtHeights[0]);
// console.log(blueShirtHeights[0]);

// -----------------------------------Reflections----------------------------------- //
// Not sure how i feel about the tripple if statments but it does work
