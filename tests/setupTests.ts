import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import { server } from "./mocks/server";

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Resolving jsdom: Error: Not implemented: window.scrollTo
const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
