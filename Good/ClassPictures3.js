// -----------------------------------QUESTION----------------------------------- //

// photo day even number of students red or blue shirts

// arrange in two rows following these rules

// all red shirts in same rows

// all blue shirts in same rows

// each back row student must be taller than the one in the front

// given two input arrays with each index representing a student with the value being the height

// -----------------------------------Sample Inputs and Outputs----------------------------------- //

// redShirtHeights = [5, 8, 1, 3, 4]
// blueShirtHeights = [6, 9, 2, 4, 5]

// true

// -----------------------------------APPROACH----------------------------------- //

// sort arrays decending order
// check which is greater at index 0 of both arrays to determine back row
// if neither greater return false
// loop over back row and see if front row index is lesser if not return false
// return true

// -----------------------------------Big O CHAT----------------------------------- //

//  time = O(nlog(n))

//  space = O(1)

//  time limited by sort function

// -----------------------------------SUDO CODE----------------------------------- //

// def classPhotos(redShirtHeights, blueShirtHeights):
//     redShirtHeights.sort(reverse=True)
//     blueShirtHeights.sort(reverse=True)

//     shirtColourInFirstRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"
//     for index in range(len(redShirtHeights)):
//         redShirtHeight = redShirtHeights[index]
//         blueShirtHeight = blueShirtHeights[index]

//         if shirtColourInFirstRow == "RED":
//             if redShirtHeight >= blueShirtHeight:
//                 return False
//             else:
//                 if blueShirtHeight >= redShirtHeight:
//                     return False
//     return True

// -----------------------------------CODE----------------------------------- //

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColourInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let index = 0; index < redShirtHeights.length; index++) {
    const redShirtHeight = redShirtHeights[index];
    const blueShirtHeight = blueShirtHeights[index];

    if (shirtColourInFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}

// -----------------------------------TESTS----------------------------------- //

// -----------------------------------Reflections----------------------------------- //
