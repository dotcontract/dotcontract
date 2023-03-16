import Commit from "./Commit.js";

describe("Contract", () => {
  it("should work", async () => {
    Commit.fromJSON({
      body: [{ method: "post", path: "/", value: "hello" }],
      head: [],
    });
    expect(() => {
      Commit.fromJSON({
        body: { method: "post", path: "/", value: "hello" },
        head: []
      });
    }).toThrow();
    expect(() => {
      Commit.fromJSON({
        body: [{ method: "wrong", path: "/", value: "hello" }],
        head: []
      });
    }).toThrow();

    const c = new Commit();
    c.post('/', 'hello');
    c.post('/2', 'hello');
    expect(c.body[0].path).toBe('/');
    expect(c.body.length).toBe(2);
    expect(() => {
      c.post('/', 'hello again');
    }).toThrow();
  });
});
