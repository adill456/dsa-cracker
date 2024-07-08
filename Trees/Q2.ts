import { TreeNode } from "./Q1";
// Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  const new_target = targetSum - root.val;

  return (
    hasPathSum(root.left, new_target) || hasPathSum(root.right, new_target)
  );
}

console.log(hasPathSum(tree, 22));
