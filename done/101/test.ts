import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { symmetricTree, tree, TreeNode } from "../../structs/binary_tree.ts"
import { isSymmetric } from "./solution.ts";

export const tree2: TreeNode = {
    val: 1,
    left: {
        val: 2,
        right: {
            val: 3,
        },
        left: null,
    },
    right: {
        val: 2,
        right: {
            val: 3,
        },
        left: null,
    }
}

export const tree3: TreeNode = {
    val: 1,
    left: {
        val: 2,
        right: {
            val: 3,
        },
        left: null,
    },
    right: {
        val: 2,
        left: {
            val: 3,
        },
        right: null,
    }
}

Deno.test("501. Is tree symmetric", () => {
    assertEquals(isSymmetric(tree), false);
    assertEquals(isSymmetric(symmetricTree), true);
    assertEquals(isSymmetric(tree2), false);
    assertEquals(isSymmetric(tree3), true);
});
