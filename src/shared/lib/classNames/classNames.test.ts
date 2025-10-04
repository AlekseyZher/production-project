import { classNames } from "./classNames"

describe("classNames", () => {
  test("only params", () => {
    expect(classNames("someClass")).toBe("someClass")
  })
  test("additional class", () => {
    expect(classNames("someClass", {}, ["params1", "params2"]))
      .toBe("someClass params1 params2")
  })
  test("mods true", () => {
    expect(classNames("someClass", {"cls1": true, "cls2": true}, ["params1", "params2"]))
      .toBe("someClass params1 params2 cls1 cls2")
  })
  test("mods false", () => {
    expect(classNames("someClass", {"cls1": false, "cls2": true}, ["params1", "params2"]))
      .toBe("someClass params1 params2 cls2")
  })
  test("mods undefinde", () => {
    expect(classNames("someClass", {"cls1": undefined, "cls2": true}, ["params1", "params2"]))
      .toBe("someClass params1 params2 cls2")
  })
})