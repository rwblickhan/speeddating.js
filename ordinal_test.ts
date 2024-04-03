import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { incrementOrdinal, ordinalHandler } from "./ordinal.ts";

Deno.test("incrementOrdinal -2", () => {
  assertEquals(incrementOrdinal({ string: "-2", increment: 1 }), {
    string: "-1st",
  });
});

Deno.test("incrementOrdinal -1", () => {
  assertEquals(incrementOrdinal({ string: "-1", increment: 1 }), {
    string: "0th",
  });
});

Deno.test("incrementOrdinal 0", () => {
  assertEquals(incrementOrdinal({ string: "0", increment: 1 }), {
    string: "1st",
  });
});

Deno.test("incrementOrdinal 1", () => {
  assertEquals(incrementOrdinal({ string: "1", increment: 1 }), {
    string: "2nd",
  });
});

Deno.test("incrementOrdinal 2", () => {
  assertEquals(incrementOrdinal({ string: "2", increment: 1 }), {
    string: "3rd",
  });
});

Deno.test("incrementOrdinal 3", () => {
  assertEquals(incrementOrdinal({ string: "3", increment: 1 }), {
    string: "4th",
  });
});

Deno.test("incrementOrdinal 10", () => {
  assertEquals(incrementOrdinal({ string: "10", increment: 1 }), {
    string: "11th",
  });
});

Deno.test("incrementOrdinal 11", () => {
  assertEquals(incrementOrdinal({ string: "11", increment: 1 }), {
    string: "12th",
  });
});

Deno.test("incrementOrdinal 12", () => {
  assertEquals(incrementOrdinal({ string: "12", increment: 1 }), {
    string: "13th",
  });
});

Deno.test("incrementOrdinal 13", () => {
  assertEquals(incrementOrdinal({ string: "13", increment: 1 }), {
    string: "14th",
  });
});

Deno.test("incrementOrdinal 20", () => {
  assertEquals(incrementOrdinal({ string: "20", increment: 1 }), {
    string: "21st",
  });
});

Deno.test("incrementOrdinal 21", () => {
  assertEquals(incrementOrdinal({ string: "21", increment: 1 }), {
    string: "22nd",
  });
});

Deno.test("incrementOrdinal 22", () => {
  assertEquals(incrementOrdinal({ string: "22", increment: 1 }), {
    string: "23rd",
  });
});

Deno.test("incrementOrdinal 111", () => {
  assertEquals(incrementOrdinal({ string: "111", increment: 1 }), {
    string: "112th",
  });
});

Deno.test("incrementOrdinal 112", () => {
  assertEquals(incrementOrdinal({ string: "112", increment: 1 }), {
    string: "113th",
  });
});

Deno.test("incrementOrdinal 113", () => {
  assertEquals(incrementOrdinal({ string: "113", increment: 1 }), {
    string: "114th",
  });
});

Deno.test("incrementOrdinal 1, increment by 2", () => {
  assertEquals(incrementOrdinal({ string: "1", increment: 2 }), {
    string: "3rd",
  });
});

Deno.test("ordinalHandler matches 1st", () => {
  assertEquals("1st".match(ordinalHandler.regex)?.[1], "1");
});

Deno.test("ordinalHandler matches 2nd", () => {
  assertEquals("2nd".match(ordinalHandler.regex)?.[1], "2");
});

Deno.test("ordinalHandler matches 3rd", () => {
  assertEquals("3rd".match(ordinalHandler.regex)?.[1], "3");
});

Deno.test("ordinalHandler matches 21st", () => {
  assertEquals("21st".match(ordinalHandler.regex)?.[1], "21");
});

Deno.test("ordinalHandler matches -1st", () => {
  console.log("-1st".match(ordinalHandler.regex));
  assertEquals("-1st".match(ordinalHandler.regex)?.[1], "-1");
});

Deno.test("ordinalHandler does not match 1", () => {
  assertEquals(ordinalHandler.regex.test("1"), false);
});

Deno.test("ordinalHandler does not match 1stk", () => {
  assertEquals(ordinalHandler.regex.test("1stk"), false);
});

Deno.test("ordinalHandler does not match k1st", () => {
  assertEquals(ordinalHandler.regex.test("k1st"), false);
});
