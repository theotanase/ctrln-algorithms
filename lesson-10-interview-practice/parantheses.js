function isOpening(character) {
  const openingParentheses = ['(', '[', '{'];

  return openingParentheses.includes(character);
}

function isCorresponding(openinig, closing) {

  switch (openinig) {
    case '(':
      return closing == ')';
    case '[':
      return closing == ']';
    case '{':
      return '}';
  }

  return false;
}

function isCorrect(str) {
  const stack = [];
  let size = 0;

  for (let index = 0; index < str.length; index++) {
    const character = str[index];

    if (isOpening(character)) {
      stack[size] = character;
      size++;
    } else {
      if (size == 0) {
        return false;
      }

      const lastCharacterInStack = stack[size - 1];

      if (!isCorresponding(lastCharacterInStack, character)) {
        return false;
      } else {
        size--;
      }
    }
  }

  return size == 0;
}

console.log(isCorrect('[]')); //true
console.log(isCorrect('{}[()()()][]')); //true
console.log(isCorrect('(((((')); // false
console.log(isCorrect(')))()()())')); // false