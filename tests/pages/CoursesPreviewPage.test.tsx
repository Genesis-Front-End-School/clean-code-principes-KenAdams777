import { describe, test } from "vitest";
// import { render, screen } from "../test-utils";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import CoursesPreviewPage from "../../src/pages/CoursesPreviewPage";
import { createReduxStore } from "../../src/redux/store";

describe("CoursesPreviewPage", () => {
  test("renders correctly", () => {
    const store = createReduxStore();
    const component = (
      <Provider store={store}>
        <MemoryRouter>
          <CoursesPreviewPage />
        </MemoryRouter>
      </Provider>
    );

    render(component);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
