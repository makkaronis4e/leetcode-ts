import { TreeNode } from "../../structs/binary_tree.ts";

export function isSymmetric(root: TreeNode): boolean {

    function compareNodes(root1: TreeNode, root2: TreeNode): boolean {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        return root1.val === root2.val &&
            compareNodes(root1.left as TreeNode, root2.right as TreeNode) &&
            compareNodes(root1.right as TreeNode, root2.left as TreeNode);
    }

    if (!root) {
        return true;
    }

    return compareNodes(root.left as TreeNode, root.right as TreeNode)
};




