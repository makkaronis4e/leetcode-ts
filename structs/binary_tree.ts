export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export const oneNodeTree: TreeNode = {val: 0, left: null, right: null};

export const tree: TreeNode = {
    val: 3,
    left: {
        val: 2,
        right: {
            val: 2,
            left: null,
            right: {
                val: 10,
                left: null,
                right: null
            }
        },
        left: {
            val: 2,
            left: {
                val: 3,
                left: {
                    val: 220,
                    left: null,
                    right: null
                },
                right: {
                    val: 0,
                    left: null,
                    right: null
                }
            },
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: {
                val: 10,
                left: null,
                right: null
            }
        },
        right: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: {
                    val: 10,
                    left: null,
                    right: null
                }
            },
            right: null
        }
    }
};

