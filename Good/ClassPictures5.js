// Question
//     Its photo day
//     even number of students
//     exactly half red shirts
//     exactly half blue shirts
//     arrange in two rows following these rules

//         All students wearing red shirts same row
//         All students wearing blue shirts same row
//         each back row student must be strictly taller than each corresponding one in the front row

//     given two inputs arrays of the same length with each index being a student height
//         one for red shirts
//         one for blue shirts

//     Write a function that returns a boolean value indicating if the photo can be taken or not

// Sample input

//     redShirtsHeights = [1,2,3]
//     blueShirtsHeights = [4,5,6]

// sample output

//     true

// Edgecase

//     can you have a negative height ?
//     what if array not same length ?
//     what if array not ints

// Approach's
//     sort both array in decending order
//     compare the first index of the arrays to determine the back row

//     loop over back row checking if each index of the back row is greater than each of the front row
//         if not return false

//     return true

// Big O
//     space complexity = O(1)
//     time complexity = O(nlog(n))
// Psudo code
// def classPhotos(redShirtHeights, blueShirtHeights):
//         redShirtHeights.sort(reverse=True)
//         blueShirtHeights.sort(reverse=True)

//         shirtColorInFirstRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"
//         for index in range(len(redShirtHeights)):
//             redShirtHeight = redShirtHeights[index]
//             blueShirtHeight = blueShirtHeights[index]

//             if shirtColorInFirstRow == "RED":
//                 if redShirtHeight >= blueShirtHeight:
//                     return False
//             else:
//                 if blueShirtHeight >= redShirtHeight:
//                         return False

// 		return True
// Code
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColorInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let index = 0; redShirtHeights.length > index; index++) {
    const redShirtHeight = redShirtHeights[index];
    const blueShirtHeight = blueShirtHeights[index];

    if (shirtColorInFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}

// Refactor/reflect
