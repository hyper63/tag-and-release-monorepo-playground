import { assertEquals } from "https://deno.land/std@0.129.0/testing/asserts.ts";

const { test } = Deno;

test("Math.sqrt()", () => {
  assertEquals(Math.sqrt(4), 2);
  assertEquals(Math.sqrt(144), 12);
  assertEquals(Math.sqrt(2), Math.SQRT2);
});
