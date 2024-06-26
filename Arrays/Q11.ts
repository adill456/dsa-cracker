// Move all the negative elements to one side of the array

// Given an unsorted array arr[] of size n having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.

// Example 1:

// Input :
// n = 8
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output :
// 1  3  2  11  6  -1  -7  -5

// Example 2:

// Input :
// n = 8
// arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
// Output :
// 7  9  10  11  -5  -3  -4  -1

function moveNegativeElements(arr: number[]): number[] {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

console.log(moveNegativeElements([1, -1, 3, 2, -7, -5, 11, 6]));
