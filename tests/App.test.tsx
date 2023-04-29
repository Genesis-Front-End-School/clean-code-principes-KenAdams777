import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    const appElement = screen.getByRole("main");
    expect(appElement).toBeInTheDocument();
  });
});
