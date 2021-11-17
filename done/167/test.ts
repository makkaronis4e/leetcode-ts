import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { twoSum } from "./solution.ts";


Deno.test("167. Two sum 2", () => {
    assertEquals(twoSum([2,7,11,15], 9), [1,2]);
    assertEquals(twoSum([2,3,4], 6), [1, 3]);
    assertEquals(twoSum([-1,0], -1), [1, 2]);
    assertEquals(twoSum([5,25,75], 100), [2, 3]);
    assertEquals(twoSum([-3,3,4,90], 0), [1, 2]);
});
