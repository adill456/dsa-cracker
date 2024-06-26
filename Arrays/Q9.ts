// Subarray with sum 0

// Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the driver code.

// Example 1:

// Input:
// n = 5
// arr = {4,2,-3,1,6}
// Output:
// Yes
// Explanation:
// 2, -3, 1 is the subarray with sum 0.
// Example 2:

// Input:
// n = 5
// arr = {4,2,0,1,6}
// Output:
// Yes
// Explanation:
// 0 is one of the element in the array so there exist a subarray with sum 0.

function subArrayExists(nums: number[]): boolean {
  let sum = 0;
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === 0 || set.has(sum)) {
      return true;
    }
    set.add(sum);
  }
  return false;
}

const nums = [4, 2, -3, 1, 6];

console.log(subArrayExists(nums));
