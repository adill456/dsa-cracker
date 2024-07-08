import { TreeNode } from "./Q1";
// Count Tree Nodes

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

function countNodes(root: TreeNode | null): number {
  let nodes = 0;
  while (root !== null) {
    root = root?.left;
    nodes++;
  }

  while (root !== null) {
    root = root?.right;
    nodes++;
  }
  return nodes;
}

const newTree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
);

console.log(countNodes(newTree));
