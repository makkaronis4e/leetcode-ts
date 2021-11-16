import { TreeNode } from "../../structs/binary_tree.ts";

export function smallestFromLeaf(root: TreeNode): string {

    let res: string = "{";

    function traverseTree(node: TreeNode | null, path: string) {
        if (!node) return;
        const newStr = String.fromCharCode(node.val + 97) + path;
        if (!node.left && !node.right && res > newStr) res = newStr;
        traverseTree(node.left as TreeNode, newStr);
        traverseTree(node.right as TreeNode, newStr);
    }

    traverseTree(root, "");
    return res;
};

