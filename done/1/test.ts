import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import { twoSum } from "./solution.ts";


Deno.test("1. Two sum", () => {
    assertStrictEquals(twoSum([2,7,11,15], 9), [0, 1]);
    assertStrictEquals(twoSum([3,2,4], 6), [1, 2]);
});
