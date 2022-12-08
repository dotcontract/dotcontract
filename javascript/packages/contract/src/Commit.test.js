import Commit from "./Commit.js";

describe("Contract", () => {
  it("should work", async () => {
    new Commit({
      method: "post",
      content: "test",
    });
    expect(() => {
      new Commit({
        method: "duck",
        content: "test",
      });
    }).toThrow();
  });
});
