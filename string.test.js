const stringLength = require("./index");

test("should return 10", () => {
  expect(stringLength("microverse")).toBe(10);
});
