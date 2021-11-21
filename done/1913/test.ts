import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxProductDifference } from "./solution.ts";

Deno.test("1913. Maximum Product Difference Between Two Pairs", () => {
    assertEquals(maxProductDifference([5,6,2,7,4]), 34);
    assertEquals(maxProductDifference([4,2,5,9,7,4,8]), 64);
});
