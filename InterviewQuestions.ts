class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Question:1
// You have an array to find the frequency of each element in it.

//   Example:
//   Input: [1, 2, 3, 1, 2, 1]
// Output: {1: 3, 2: 2, 3: 1}

function frequencyOfElement(nums: number[]): Map<number, number> {
  const frequencyMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) ?? 0) + 1);
    } else {
      frequencyMap.set(nums[i], 1);
    }
  }
  return frequencyMap;
}

// Question:2
// You have an array to find the frequency and maximum frequency of elements in the array.Not allowed to use more than one loop.
//   Example:
//   Input: [1, 2, 3, 1, 2, 1]
// Output: {1: 3, 2: 2, 3: 1} and 3

function frequencyOfElementWithMax(nums: number[]): {
  frequencyMapy: Map<number, number>;
  maxFrequency: number;
} {
  const frequencyMap: Map<number, number> = new Map();
  let maxFrequency = 0;
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) ?? 0) + 1);
    } else {
      frequencyMap.set(nums[i], 1);
    }
    maxFrequency = Math.max(maxFrequency, frequencyMap.get(nums[i]) ?? 0);
  }
  console.log(maxFrequency);
  return {
    frequencyMapy: frequencyMap,
    maxFrequency: maxFrequency,
  };
}

// Question:3

// You have an array to find out the second max in the array and you are not allowed to use more than one loop

function secondMaxElement(nums: number[]): number {
  let maxElement = Infinity,
    secondMaxElement = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxElement) {
      secondMaxElement = maxElement;
      maxElement = nums[i];
    } else if (nums[i] > secondMaxElement && nums[i] !== maxElement) {
      secondMaxElement = nums[i];
    }
  }
  return secondMaxElement;
}

// Question:4
// Valid bracket

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function validBrackets(statement: string): boolean {
  const stack: string[] = [];

  const bracketMap: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < statement.length; i++) {
    if (statement[i] === "(" || statement[i] === "{" || statement[i] === "[") {
      stack.push(statement[i]);
    } else {
      const lastBracket = stack.pop();
      if (statement[i] !== bracketMap[lastBracket as string]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Question:5
//  Find out the third max element in an array
// why {1,1,1} is not the answer for this question?

function thirdMaxElement(nums: number[]): number {
  let firstMax = -Infinity,
    secondMax = -Infinity,
    thirdMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax && nums[i] !== firstMax) {
      thirdMax = secondMax;
      secondMax = nums[i];
    } else {
      thirdMax = nums[i];
    }
  }
  return thirdMax;
}

function insertIntoSortedArray(nums: number[], target: number): number[] {
  let i = 0;
  while (i < nums.length && nums[i] < target) {
    i++;
  }
  nums.splice(i, 0, target);
  return nums;
}

function swapWithoutThirdVar(a: number, b: number): [number, number] {
  // a = a + b;
  // b = a - b;
  // a = a - b;
  // return [a, b]

  [a, b] = [b, a];
  return [a, b];
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let p1: ListNode | null = head;
  let newHead = head.next;

  let prev: ListNode | null = null;

  while (p1 !== null && p1.next !== null) {
    let temp: ListNode | null = p1.next;

    p1.next = temp.next;
    temp.next = p1;

    if (prev !== null) {
      prev.next = temp;
    }

    prev = p1;

    p1 = p1.next;
  }

  return newHead;
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  let next: ListNode | null = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next; // move to the next node
  }
  head = prev;
  return head;
}

function searchKey(head: ListNode | null, key: number): boolean {
  let current = head;

  while (current && current.next !== null) {
    if (current.val === key) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function moveZeros(nums: number[]): number[] {
  let nonZeroPositiveIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      [nums[i], nums[nonZeroPositiveIndex]] = [
        nums[nonZeroPositiveIndex],
        nums[i],
      ];
      nonZeroPositiveIndex++;
    }
  }
  return nums;
}

function circularListLength(head: ListNode | null): number {
  if (head === null) {
    return 0;
  }

  let current: ListNode | null = head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
    if (current === head) {
      break;
    }
  }

  return count;
}

function productExceptSelf(nums: number[]): number[] {
  let prefixProduct: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
  }

  let suffixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prefixProduct[i] = prefixProduct[i] * suffixProduct;
    suffixProduct = suffixProduct * nums[i];
  }

  return prefixProduct;
}

function largestAltitude(gain: number[]): number {
  let maxAltitude = 0;
  let prefixSum = 0;

  for (let i = 0; i < gain.length; i++) {
    prefixSum += gain[i];
    maxAltitude = Math.max(maxAltitude, prefixSum);
  }
  return maxAltitude;
}

function pivotIndex(nums: number[]): number {
  let sumLeft = new Array(nums.length).fill(0);
  let sumRight = new Array(nums.length).fill(0);

  sumLeft[0] = nums[0];
  let j = nums.length - 1;
  sumRight[j] = nums[j];

  for (let i = 1; i < nums.length; i++) {
    sumLeft[i] = sumLeft[i - 1] + nums[i];
    sumRight[j - 1] = sumRight[j] + nums[j - 1];
    j--;
  }
  for (let i = 0; i < nums.length; i++) {
    if (sumLeft[i] === sumRight[i]) return i;
  }
  return -1;
}

console.log(pivotIndex([2, 1, -1]));
