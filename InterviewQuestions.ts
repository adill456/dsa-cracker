class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
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
    frequencyMapy: Map<number, number>,
    maxFrequency: number
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
        maxFrequency: maxFrequency
    };
}


// Question:3

// You have an array to find out the second max in the array and you are not allowed to use more than one loop


function secondMaxElement(nums: number[]): number {
    let maxElement = Infinity, secondMaxElement = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxElement) {
            secondMaxElement = maxElement;
            maxElement = nums[i];
        } else if (nums[i] > secondMaxElement && nums[i] !== maxElement) {
            secondMaxElement = nums[i];
        }
    }
    return secondMaxElement
}

// Question:4
// Valid bracket

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.



function validBrackets(statement: string): boolean {
    const stack: string[] = [];

    const bracketMap: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < statement.length; i++) {
        if (statement[i] === '(' || statement[i] === '{' || statement[i] === '[') {
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
    let firstMax = -Infinity, secondMax = -Infinity, thirdMax = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (
            nums[i] > secondMax && nums[i] !== firstMax
        ) {
            thirdMax = secondMax;
            secondMax = nums[i];
        } else {
            thirdMax = nums[i]
        }

    }
    return thirdMax
}


function insertIntoSortedArray(nums: number[], target: number): number[] {
    let i = 0;
    while (i < nums.length && nums[i] < target) {
        i++;
    }
    nums.splice(i, 0, target);
    return nums
}

function swapWithoutThirdVar(a: number, b: number): [number, number] {
    // a = a + b;
    // b = a - b;
    // a = a - b;
    // return [a, b]

    [a, b] = [b, a];
    return [a, b]
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




const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))

console.log(swapPairs(node))