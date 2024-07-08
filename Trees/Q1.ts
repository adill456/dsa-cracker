// Max Path Sum

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:

// Input: root = [1,2,3]

// Output: 6

// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:

// Input: root = [-10,9,20,null,null,15,7]

// Output: 42

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxPathSumHelper(
  node: TreeNode | null,
  max_sum: { value: number }
): number {
  if (node === null) {
    return 0;
  }

  const left = Math.max(maxPathSumHelper(node.left, max_sum), 0);
  const right = Math.max(maxPathSumHelper(node.right, max_sum), 0);

  const current_sum = node.val + left + right;

  max_sum.value = Math.max(max_sum.value, current_sum);

  return node.val + Math.max(left, right);
}

function maxPathSum(root: TreeNode | null): number {
  const max_sum = { value: -Infinity };
  maxPathSumHelper(root, max_sum);
  return max_sum.value;
}

const tree = new TreeNode(
  -10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxPathSum(tree)); // Output should be 42
