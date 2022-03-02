// function things(thingA, thingB, thingC, thingD) {
//   if (thingA) {
//     return "A"
//   } else if (thingB) {
//     return "B"
//   } else if (thingC) {
//     return "C"
//   } else if (thingD) {
//       return "D"
//   } else {return false}
// }
// console.log(things(false, true,true,true))

function things(thingA, thingB, thingC, thingD) {
  if (thingA) return "A";
  if (thingB) return "B";
  if (thingC) return "C";
  if (thingD) return "D";
  return false;
}

console.log(things(false, true, true, true));
