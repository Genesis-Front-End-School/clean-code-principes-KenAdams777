import { describe, test } from "vitest";
import { render, screen } from "./test-utils";
import App from "../src/App";

describe("App component", () => {
  test("renders correctly", () => {
    render(<App />);
    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toBeInTheDocument();
  });

  test("renders with Error", () => {
    render(<App />);
    const errorElement = screen.getByRole("heading");
    expect(errorElement).toBeInTheDocument();
  });
});
