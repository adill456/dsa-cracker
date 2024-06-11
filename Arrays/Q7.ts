// Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums: number[]): number {
  let count = 0;
  let majorElement = 0;
  let majoritySize = Math.floor(nums.length / 2);
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (count === 0) {
      majorElement = nums[i];
    }
    if (majorElement === nums[i]) {
      count++;
    }
    i++;
  }

  return majorElement > majoritySize ? majorElement : -1;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
