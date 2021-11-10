import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { minSwaps } from "./solution.ts";

Deno.test("1963. Find min swaps", () => {
    assertEquals(minSwaps("]]][[["), 2);
    assertEquals(minSwaps("]][[[[]][]]["), 1);
});
