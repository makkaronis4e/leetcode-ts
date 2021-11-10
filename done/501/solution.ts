import { TreeNode } from "../../structs/binary_tree.ts";

export function findMode(root: TreeNode | null): (number | null)[] {
    const dict: {[key: string]: number} = {};

    if (root === null || root.val === null && !root.right && !root.left) {
        return [null];
    }

    function traverseTree(node: TreeNode) {
        if (!node) return;

        dict[node.val] = dict[node.val] ? dict[node.val] + 1 : 1;

        traverseTree(node.left as TreeNode);
        traverseTree(node.right as TreeNode);
    }

    traverseTree(root);

    let result: {
        mode: (number | null)[];
        count: number;
    } = {mode: [null], count: 0};
    for (const prop in dict) {
        if (!result.mode || result.count < dict[prop]) {
            result.mode = [+prop];
            result.count = dict[prop];
        } else if (result.count === dict[prop]) {
            result.mode.push(+prop);
        }
    }
    return result.mode;
};




