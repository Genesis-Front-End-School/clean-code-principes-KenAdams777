import { describe, test, vi } from "vitest";
import { rest } from "msw";
import { render, screen } from "../test-utils";
import CourseDetailsPage from "../../src/pages/CourseDetailsPage";
import { server } from "../mocks/server";
import { apiRouts } from "../../src/routes/apiRouts";

describe("CourseDetailsPage", () => {
  test("renders correctly", () => {
    render(<CourseDetailsPage />);

    const mainElement = screen.getByRole("main");
    // const loaderElement = screen.getByRole("status", { name: "Loading" });

    // ??! Why Loader is not into the DOM and why its not accessible with getBy??? Maybe the problem with LocalStorage if its need to be mocked.
    // TODO: Use spyOn to check if LS is called

    expect(mainElement).toBeInTheDocument();
    // expect(loaderElement).toBeInTheDocument();
  });

  // test("renders with error message", async () => {
  //   server.use(
  //     rest.get(apiRouts.GET_COURSES_PREVIEW_URL, (req, res, ctx) => {
  //       return res(ctx.status(500));
  //     }),
  //   );

  //   const errorElement = await screen.findByRole("alert", { name: "Error message" });

  //   expect(errorElement).toBeInTheDocument();
  // });
});
