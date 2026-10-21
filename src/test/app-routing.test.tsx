import { createMemoryHistory, createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: jsdom never loads the
// stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, history: createMemoryHistory() });

  it.each(["/", "/privacy", "/terms", "/disclaimer"])("matches a page for %s", (path) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("falls back to not found for unknown paths", () => {
    expect(router.matchRoutes("/nope").at(-1)?.routeId).toBe(rootRouteId);
  });
});
