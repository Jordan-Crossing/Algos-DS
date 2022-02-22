// -----------------------------------QUESTION----------------------------------- //

// Even number of students red or blue shirts
// half red
// half blue

// arrange students in two rows with an even numbers of students

// all students wearing red shirts must be in the same row
// all students wearing blue shirts must be in the same row

// Each student in the back row must be taller than the student directly in front of them

// given two input arrays

// 1. heights of red shirts
// 2. heights of blue shirts

// write a function that returns true or false depending on whether the a photo can be taken
// that follows the rules

// -----------------------------------Sample Inputs and Outputs----------------------------------- //

// ---input---
// RSH = [5, 8, 1, 3, 4]
// BSH = [6, 9, 2, 4, 5]

// ---output---
// true

// -----------------------------------APPROACH----------------------------------- //

// (bad approach)
// sort both arrays in depending order
// determine tallest student/shirt back row shirt colour by
// comparing the first index of each now sorted array
// loop over array
// compare current index of array
// if back row[index] < front row[index] return false
// otherwise return true

// -----------------------------------Big O CHAT----------------------------------- //

// O(nlog(n)) time | O(1) space - n = number of students

// I cant really think of a better way

// -----------------------------------SUDO CODE----------------------------------- //

// function classPictures (blueShirtsHeights, redShirtsHeights) {
//     redShirtsHeights.sort(decending)
//     redShirtsHeights.sort(decending)

//     backRowColour = "RED" if redShirtsHeights[0] > blueShirtsHeights[0] else "BLUE"
//     for(redShirtsHeights.length) {
//         currentRedStudentHeight = redShirtsHeights[idx];
//         currentBlueStudentHeight = BlueShirtsHeights[idx];

//         if (backRowColour === "RED") {
//             if (currentRedStudentHeight <= currentBlueStudentHeight) return false;
//         }

//         if (backRowColour === "BLUE") {
//             if (currentBlueStudentHeight <= currentRedStudentHeight) return false;
//         }
//     }
//     return true
// }

// -----------------------------------CODE----------------------------------- //

function classPictures(blueShirtHeights, redShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const backRowColour =
    redShirtHeights[0] > blueShirtHeights[0] ? "RED" : "BLUE";
  for (let index = 0; index < redShirtHeights.length; index++) {
    const currentRedStudentHeight = redShirtHeights[index];
    const currentBlueStudentHeight = blueShirtHeights[index];

    if (backRowColour === "RED") {
      if (currentRedStudentHeight <= currentBlueStudentHeight) return false;
    }

    if (backRowColour === "BLUE") {
      if (currentBlueStudentHeight <= currentRedStudentHeight) return false;
    }
  }
  return true;
}

// -----------------------------------TESTS----------------------------------- //

// -----------------------------------Reflections----------------------------------- //

// Im pretty happy with my answer but i could be a bit faster in solving and implementing
// my solution.
