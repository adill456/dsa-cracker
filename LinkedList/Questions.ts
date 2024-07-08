// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// ***************** Has Cycle *****************

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let hair: ListNode | null = head;
  let tortoise: ListNode | null = head;

  while (hair !== null && hair.next !== null) {
    hair = hair.next.next;
    // @ts-ignore
    tortoise = tortoise?.next;

    if (hair === tortoise) {
      return true;
    }
  }

  return false;
}

const cycle = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// @ts-ignore
cycle.next.next.next.next.next = cycle.next;

// ***************** Reverse the Linked List ***********************

// Revers the linked list

// Example 1:

// Input: 1->2->3->4->5
// Output: 5->4->3->2->1

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let currentNode: ListNode | null = head;
  let prevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  head = prevNode;

  return head;
}

// ***************** Add Two Numbers *******************************

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let resultantList: ListNode | null = null;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      l1 = new ListNode(0);
    }
    if (l2 === null) {
      l2 = new ListNode(0);
    }
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    if (resultantList === null) {
      resultantList = new ListNode(sum);
    } else {
      let temp = resultantList;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(sum);
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carry > 0) {
    if (resultantList === null) {
      resultantList = new ListNode(carry);
    }
    let temp = resultantList;
    while (temp?.next !== null) {
      temp = temp?.next;
    }
    temp.next = new ListNode(carry);
  }

  return resultantList;
}

// ***************** Driver Code for all Problems  *****************

// Q1
// console.log(hasCycle(cycle));
// console.log(JSON.stringify(reverseList(list)));
addTwoNumbers(
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4)))
);
