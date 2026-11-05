import { describe, expect, it } from "vitest";

import {
  ASSISTANCE_PHONE_DISPLAY,
  ASSISTANCE_PHONE_HREF,
  countDaysBetween,
} from "@/lib/core-support";

describe("Core Support visitor tools", () => {
  it("uses the Core Support phone number and the matching call link", () => {
    expect(ASSISTANCE_PHONE_DISPLAY).toBe("(888) 394-3037");
    expect(ASSISTANCE_PHONE_HREF).toBe("tel:+18883943037");
  });

  it("counts whole calendar days between dates regardless of order", () => {
    expect(countDaysBetween("2026-10-01", "2026-10-11")).toBe(10);
    expect(countDaysBetween("2026-10-11", "2026-10-01")).toBe(10);
    expect(countDaysBetween("", "2026-10-01")).toBeNull();
  });
});
