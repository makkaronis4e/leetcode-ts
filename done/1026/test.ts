import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxAncestorDiff } from "./solution.ts";
import { tree } from "../../structs/binary_tree.ts"

Deno.test("1026. Maximum Difference Between Node and Ancestor", () => {
    assertStrictEquals(maxAncestorDiff(tree), 54);
});
