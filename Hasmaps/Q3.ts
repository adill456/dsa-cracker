// Count the number of words and letters in a string

// Given a string s, return the number of words and letters in the string.

// Example 1:

// Input: s = "Hello World"

// Output: {H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1,Hello: 1, World: 1}

// Example 2:

// Input: s = "Hello World, I am here"

// Output: {H: 1, e: 3, l: 3, o: 2, W: 1, r: 2, d: 1, I: 1, a: 1, m: 1, h: 1,Hello: 1, World: 1, I: 1, am: 1, here: 1}

function countWordsAndLetters(s: string): Map<string, number> {
  let result = new Map<string, number>();

  const words = s.split(" ");

  for (let word of words) {
    if (result.has(word)) {
      result.set(word, result.get(word)! + 1);
    } else {
      result.set(word, 1);
    }
  }

  const letters = s.split("");

  for (let letter of letters) {
    if (letter === " ") {
      continue;
    }
    if (result.has(letter)) {
      result.set(letter, result.get(letter)! + 1);
    } else {
      result.set(letter, 1);
    }
  }

  return result;
}

const s = "My name is Muhammad Adil!";

console.log(countWordsAndLetters(s));
