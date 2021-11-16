import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import { findMode } from "./solution.ts";
import { oneNodeTree, tree } from "../../structs/binary_tree.ts"

Deno.test("501. Find mode", () => {
    assertStrictEquals(findMode(tree), [2]);
    assertStrictEquals(findMode(oneNodeTree), [0]);
});
