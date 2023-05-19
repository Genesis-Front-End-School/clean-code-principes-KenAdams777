import { describe, test } from "vitest";
import { rest } from "msw";
import { getToken } from "../../src/helpers/tokenHandler";
import { mockedToken } from "../mocks/data";
import { server } from "../mocks/server";
import { GET_TOKEN_URL } from "../mocks/handlers";

describe("TokenHandler helper", () => {
  const { signal } = new AbortController();

  test("return token", async () => {
    const token = await getToken(GET_TOKEN_URL, signal);
    console.log({ token });

    expect(token).toEqual(mockedToken);
  });

  test("throws error", async () => {
    server.use(
      rest.get(GET_TOKEN_URL, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const error = await getToken(GET_TOKEN_URL, signal);
    console.log({ error });

    expect(error).toBe("Request failed with status code 500");
  });
});
