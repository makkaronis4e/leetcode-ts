import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";
import { leastInterval } from "./solution.ts";


Deno.test("621. Task Scheduler", () => {
    assertStrictEquals(leastInterval(["A","A","A","B","B","B"], 2), 8);
    assertStrictEquals(leastInterval(["A","A","A","B","B","B"], 0), 6);
    assertStrictEquals(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2), 16);
});
