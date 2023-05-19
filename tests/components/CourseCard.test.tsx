import { describe, test, vi } from "vitest";
import user from "@testing-library/user-event";
import { render, screen } from "../test-utils";
import CourseCard from "../../src/components/CourseCard";
import { mockedCourses } from "../mocks/data";

describe("CourseCard", () => {
  test("renders correctly", async () => {
    render(<CourseCard course={mockedCourses.courses[0]} />);
    const cardElement = await screen.findByRole("article");
    expect(cardElement).toBeInTheDocument();
  });

  test("has correct href", async () => {
    render(<CourseCard course={mockedCourses.courses[0]} />);
    const linkElement = await screen.findByRole("link", { name: /Link to the course page/i });
    expect(linkElement).toHaveAttribute("href", "/courses/352be3c6-848b-4c19-9e7d-54fe68fef183");
  });
});

describe("Preview Video", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders correctly", async () => {
    render(<CourseCard course={mockedCourses.courses[0]} />);
    const videoElement = await screen.findByRole("video");
    expect(videoElement).toBeInTheDocument();
  });

  test("plays on hover", async () => {
    user.setup();
    const spy = vi
      .spyOn(window.HTMLVideoElement.prototype, "play")
      .mockImplementation(async () => {});

    render(<CourseCard course={mockedCourses.courses[0]} />);
    const videoElement = await screen.findByRole("video");

    await user.hover(videoElement);

    expect(videoElement).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("pauses on unhover", async () => {
    user.setup();
    const spy = vi
      .spyOn(window.HTMLVideoElement.prototype, "pause")
      .mockImplementation(async () => {});

    render(<CourseCard course={mockedCourses.courses[0]} />);
    const videoElement = await screen.findByRole("video");

    await user.unhover(videoElement);

    expect(videoElement).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("Preview Image", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  test("fades away", async () => {
    user.setup();
    const spy = vi
      .spyOn(window.HTMLVideoElement.prototype, "play")
      .mockImplementation(async () => {});

    render(<CourseCard course={mockedCourses.courses[0]} />);
    const imageElement = await screen.findByRole("img");

    expect(spy).not.toHaveBeenCalled();

    await user.hover(imageElement);

    vi.advanceTimersByTime(800);

    expect(spy).toBeCalledTimes(1);
    expect(imageElement).toHaveStyle({
      opacity: 0,
    });
  });
});
