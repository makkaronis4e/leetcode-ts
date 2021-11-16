import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { smallestFromLeaf } from "./solution.ts";
import { tree } from "../../structs/binary_tree.ts"

Deno.test("988. Smallest String Starting From Leaf", () => {
    assertEquals(smallestFromLeaf(tree), "adccb");
});
