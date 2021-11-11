import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { diagonalSum } from "./solution.ts";

const matrix1 = [[1,2,3], [4,5,6], [7,8,9]];
const matrix2 = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25]];
const matrix3 = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];

Deno.test("1963. Find min swaps", () => {
    assertEquals(diagonalSum(matrix1), 25);
    assertEquals(diagonalSum(matrix2), 117);
    assertEquals(diagonalSum(matrix3), 68);
});
