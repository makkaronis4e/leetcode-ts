import { TreeNode, tree } from "../../structs/binary_tree.ts";

export function sumNumbers(root: TreeNode): number {
    let res = 0;

    function traverseTree(node: TreeNode, val: string): boolean {

        if (!node) {
            return false;
        }
        val += node.val
        const l = traverseTree(node.left as TreeNode, val);
        const r = traverseTree(node.right as TreeNode, val);

        if (!l && !r) {
            res += +val;
            return true;
        }
        return true
    }

    traverseTree(root, "");
    return res;
};



