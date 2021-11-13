import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sumNumbers } from "./solution.ts";
import { tree } from "../../structs/binary_tree.ts"

Deno.test("501. Find mode", () => {
    assertEquals(sumNumbers(tree), 160981);
});
