import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { ordinalize } from "./ordinal.ts";

Deno.test("ordinalize first", () => {
  assertEquals(ordinalize(1), "1st");
});

Deno.test("ordinalize second", () => {
  assertEquals(ordinalize(2), "2nd");
});

Deno.test("ordinalize third", () => {
  assertEquals(ordinalize(3), "3rd");
});

Deno.test("ordinalize fourth", () => {
  assertEquals(ordinalize(4), "4th");
});

Deno.test("ordinalize fifth", () => {
  assertEquals(ordinalize(5), "5th");
});

Deno.test("ordinalize sixth", () => {
  assertEquals(ordinalize(6), "6th");
});

Deno.test("ordinalize seventh", () => {
  assertEquals(ordinalize(7), "7th");
});

Deno.test("ordinalize eighth", () => {
  assertEquals(ordinalize(8), "8th");
});

Deno.test("ordinalize ninth", () => {
  assertEquals(ordinalize(9), "9th");
});

Deno.test("ordinalize tenth", () => {
  assertEquals(ordinalize(10), "10th");
});

Deno.test("ordinalize eleventh", () => {
  assertEquals(ordinalize(11), "11th");
});

Deno.test("ordinalize twelfth", () => {
  assertEquals(ordinalize(12), "12th");
});

Deno.test("ordinalize thirteenth", () => {
  assertEquals(ordinalize(13), "13th");
});

Deno.test("ordinalize fourteenth", () => {
  assertEquals(ordinalize(14), "14th");
});

Deno.test("ordinalize twenty-first", () => {
  assertEquals(ordinalize(21), "21st");
});

Deno.test("ordinalize twenty-second", () => {
  assertEquals(ordinalize(22), "22nd");
});

Deno.test("ordinalize twenty-third", () => {
  assertEquals(ordinalize(23), "23rd");
});

Deno.test("ordinalize one hundred eleventh", () => {
  assertEquals(ordinalize(111), "111th");
});

Deno.test("ordinalize one hundred twelfth", () => {
  assertEquals(ordinalize(112), "112th");
});

Deno.test("ordinalize one hundred thirteenth", () => {
  assertEquals(ordinalize(113), "113th");
});
