import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { mostCompetitive } from "./solution.ts";

Deno.test("1963. Find min swaps", () => {
    assertEquals(mostCompetitive([2,4,3,3,5,4,9,6], 4), [2,3,3,4]);
    assertEquals(mostCompetitive([3,5,2,6], 2), [2,6]);
    assertEquals(mostCompetitive([3], 1), [3]);
    assertEquals(mostCompetitive([65,35,89,39,25,0,42,87,15], 3), [0,42,15]);
});
