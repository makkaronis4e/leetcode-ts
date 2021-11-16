import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import { mostCompetitive } from "./solution.ts";

Deno.test("1963. Find min swaps", () => {
    assertStrictEquals(mostCompetitive([2,4,3,3,5,4,9,6], 4), [2,3,3,4]);
    assertStrictEquals(mostCompetitive([3,5,2,6], 2), [2,6]);
    assertStrictEquals(mostCompetitive([3], 1), [3]);
    assertStrictEquals(mostCompetitive([65,35,89,39,25,0,42,87,15], 3), [0,42,15]);
});
