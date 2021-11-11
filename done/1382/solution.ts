import { TreeNode } from "../../structs/binary_tree.ts";

export function balanceBST(root: TreeNode): TreeNode | null {
    const sortedArray: number[] = [];

    function arrayFromTree(node: TreeNode) {
        if (!node) return;
        arrayFromTree(node.left as TreeNode);
        sortedArray.push(node.val);
        arrayFromTree(node.right as TreeNode);
    }

    function arrayToTree(start: number, end: number, arr: number[]): TreeNode | null {
        const mid = Math.floor((end + start) / 2);

        if (start > end) {
            return null;
        }

        const left = arrayToTree(start, mid -1, arr);
        const right = arrayToTree(mid + 1, end, arr);
        return new TreeNode(arr[mid], left, right);
    }

    arrayFromTree(root);

    return arrayToTree(0, sortedArray.length - 1, sortedArray);
};
