import { describe, it, expect } from "vitest";
import { createPuzzle, getRow, getCol, moveBricks } from "./puzzle";

describe("createPuzzle", () => {
  it("creates a solved board with a empty space last", () => {
    expect(createPuzzle()).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0,
    ]);
  });
});

describe("getRow and getCol", () => {
  it("find the row and column of a position", () => {
    expect(getRow(7)).toBe(1);
    expect(getCol(7)).toBe(2);
  });
});

describe("moveBricks", () => {
  it("moves a whole row towards the empty space", () => {
    const result = moveBricks(createPuzzle(), 10);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 11, 12, 13, 14]);
  });

  it("does nothing when clicking a brick that cant move", () => {
    const bricks = createPuzzle();
    expect(moveBricks(bricks, 0)).toBe(bricks);
  });
});
