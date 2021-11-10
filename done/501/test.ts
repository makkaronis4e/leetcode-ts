import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { findMode } from "./solution.ts";
import { oneNodeTree, tree } from "../../structs/binary_tree.ts"

Deno.test("501. Find mode", () => {
    assertEquals(findMode(tree), [2]);
    assertEquals(findMode(oneNodeTree), [0]);
});
