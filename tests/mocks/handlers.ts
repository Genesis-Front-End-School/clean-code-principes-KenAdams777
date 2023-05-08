import { rest } from "msw";
import { mockedCourses, mockedToken } from "./data";
import { apiRouts } from "../../src/routes/apiRouts";

// Resolving [MSW] Found a redundant usage of query parameters in the request handler URL
export const GET_TOKEN_URL = apiRouts.GET_TOKEN_URL.slice(0, apiRouts.GET_TOKEN_URL.indexOf("?"));
const SEARCH_PARAMS = apiRouts.GET_TOKEN_URL.slice(apiRouts.GET_TOKEN_URL.indexOf("?") + 1);

export const handlers = [
  rest.get(GET_TOKEN_URL, (req, res, ctx) => {
    req.url.searchParams.get(SEARCH_PARAMS);

    return res(ctx.status(200), ctx.json(mockedToken), ctx.delay(150));
  }),

  rest.get(apiRouts.GET_COURSES_PREVIEW_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedCourses), ctx.delay(150));
  }),
];
