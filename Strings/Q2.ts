// Palindrome String

// Given a string S, check if it is palindrome or not.

// Example 1:

// Input: S = "abba"
// Output: 1
// Explanation: S is a palindrome
// Example 2:

// Input: S = "abc"
// Output: 0
// Explanation: S is not a palindrome

function isPalindrome(S: string): number {
  return S === S.split("").reverse().join("") ? 1 : 0;
}

const S = "abba";

console.log(isPalindrome(S));
