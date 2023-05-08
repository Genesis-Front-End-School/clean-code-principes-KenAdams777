import { describe, test } from "vitest";
import { rest } from "msw";
import { render, screen } from "../test-utils";
import CoursesPreviewPage from "../../src/pages/CoursesPreviewPage";
import { server } from "../mocks/server";
import { apiRouts } from "../../src/routes/apiRouts";
import { mockedCourses } from "../mocks/data";

describe("CoursesPreviewPage", () => {
  test("renders correctly", () => {
    render(<CoursesPreviewPage />);

    const mainElement = screen.getByRole("main");
    const loaderElement = screen.getByRole("status", { name: "Loading" });

    expect(mainElement).toBeInTheDocument();
    expect(loaderElement).toBeInTheDocument();
  });

  test("renders a list of courses", async () => {
    render(<CoursesPreviewPage />);

    const loaderElement = screen.queryByRole("status", { name: "Loading" });
    const courses = await screen.findAllByRole("article");

    expect(courses.length).toBe(mockedCourses.courses.length);
    expect(loaderElement).not.toBeInTheDocument();
  });

  test("renders with error message", async () => {
    server.use(
      rest.get(apiRouts.GET_COURSES_PREVIEW_URL, (req, res, ctx) => {
        return res(ctx.status(500), ctx.delay(100));
      }),
    );

    // TODO: Find out why its fails from time to time

    render(<CoursesPreviewPage />);

    const loaderElement = screen.queryByRole("status", { name: "Loading" });
    const errorElement = await screen.findByRole("alert", { name: "Error message" });

    expect(errorElement).toBeInTheDocument();
    expect(loaderElement).not.toBeInTheDocument();
  });
});
