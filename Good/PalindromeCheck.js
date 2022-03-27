// question silly elephants always biking past cars Together Rapidly

// question

// write a function that takes a string and returns true of false depending on
// if the string is a palindrome

// sample IO
//  string = "mum"
//  true
// edgecase
//     single characters are palindromes
// approach
//     naive approach = loop over the string backwards and concatonate each index to a "reversedString" variable
//     then compare reversedString to string.
//     this is a bad approach because in most languages strings are immutable so adding a character
//     recreates the string which itterates though every character ( an O(n)-time operation) then when
//     you add that to a loop it becomes O(n2)-time overall

//     more optimal approach =
//     use left and right pointers

// bigO
//     O(n) time
//     O(1) space

// psudocode
// code

function isPalindrome(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  while (rightPointer > leftPointer) {
    if (string[leftPointer] !== string[rightPointer]) return false;
    rightPointer--;
    leftPointer++;
  }
  return true;
}

// testing
// refactor/reflection
