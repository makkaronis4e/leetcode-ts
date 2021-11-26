import { TreeNode } from "../../structs/binary_tree.ts";

export function maxAncestorDiff(root: TreeNode | null): number {

    if (!root) {
        return 0;
    }

    function traverseTree(node: TreeNode, min: number, max: number): number {
        if (!node) return 0;

        const newMin = Math.min(min, node.val);
        const newMax = Math.max(max, node.val);

        const left = traverseTree(node.left as TreeNode, newMin, newMax);
        const right = traverseTree(node.right as TreeNode, newMin, newMax);

        return Math.max(newMax - newMin, left, right);
    }

    return traverseTree(root, root.val, root.val);
};
