import Commit from "./Commit.js";

describe("Contract", () => {
  it("should work", async () => {
    Commit.fromJSON({
      body: [{ method: "post", path: "/value.text", value: "hello" }],
      head: [],
    });
    expect(() => {
      Commit.fromJSON({
        body: { method: "post", path: "/value.text", value: "hello" },
        head: []
      });
    }).toThrow();
    expect(() => {
      Commit.fromJSON({
        body: [{ method: "wrong", path: "/value.text", value: "hello" }],
        head: []
      });
    }).toThrow();

    const c = new Commit();
    c.post('/value.text', 'hello');
    c.post('/value2.text', 'hello');
    expect(c.body[0].path).toBe('/value.text');
    expect(c.body.length).toBe(2);
    expect(() => {
      c.post('/value.text', 'hello again');
    }).toThrow();
  });
});
