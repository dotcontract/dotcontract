import Commit from "./Commit.js";

describe("Contract", () => {
  it("should work", async () => {
    new Commit({
      body: [{ method: "post", path: "/", value: "hello" }],
      head: [],
    });
    expect(() => {
      new Commit({
        body: { method: "post", path: "/", value: "hello" },
        head: []
      });
    }).toThrow();
  });
});
