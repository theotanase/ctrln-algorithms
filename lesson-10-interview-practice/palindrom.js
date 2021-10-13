function isPalindromReverse(str) {

  let reverse = "";

  for (let index = str.length - 1; index >= 0; index--) {
    reverse = reverse + str[index];
  }

  return str == reverse;
}

function isPalindromBothDirections(str) {
  let left = 0;

  while (left < str.length - 1 - left) {
    if (str[left] != str[str.length - 1 - left]) {
      return false;
    }

    left++;
  }

  return true;
}

console.log(isPalindromBothDirections("capac")); // true
console.log(isPalindromBothDirections("ABC")); // false
