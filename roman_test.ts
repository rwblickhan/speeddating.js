import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { incrementRoman } from "./roman.ts";

Deno.test("incrementRoman I", () => {
  assertEquals(incrementRoman({ string: "I", increment: 1 }), {
    string: "II",
  });
});

Deno.test("incrementRoman II", () => {
  assertEquals(incrementRoman({ string: "II", increment: 1 }), {
    string: "III",
  });
});

Deno.test("incrementRoman III", () => {
  assertEquals(incrementRoman({ string: "III", increment: 1 }), {
    string: "IV",
  });
});

Deno.test("incrementRoman IV", () => {
  assertEquals(incrementRoman({ string: "IV", increment: 1 }), {
    string: "V",
  });
});

Deno.test("incrementRoman V", () => {
  assertEquals(incrementRoman({ string: "V", increment: 1 }), {
    string: "VI",
  });
});

Deno.test("incrementRoman VI", () => {
  assertEquals(incrementRoman({ string: "VI", increment: 1 }), {
    string: "VII",
  });
});

Deno.test("incrementRoman VII", () => {
  assertEquals(incrementRoman({ string: "VII", increment: 1 }), {
    string: "VIII",
  });
});

Deno.test("incrementRoman VIII", () => {
  assertEquals(incrementRoman({ string: "VIII", increment: 1 }), {
    string: "IX",
  });
});

Deno.test("incrementRoman IX", () => {
  assertEquals(incrementRoman({ string: "IX", increment: 1 }), {
    string: "X",
  });
});

Deno.test("incrementRoman X", () => {
  assertEquals(incrementRoman({ string: "X", increment: 1 }), {
    string: "XI",
  });
});
