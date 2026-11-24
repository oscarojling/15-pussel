import { COLS, TOTAL, EMPTY, SHUFFLE_MOVES } from "../config";

export const createPuzzle = () => {
  const numbers = Array.from({ length: TOTAL - 1 }, (_, i) => i + 1);
  numbers.push(EMPTY);
  return numbers;
};

export const getRow = (index: number) => Math.floor(index / COLS);
export const getCol = (index: number) => index % COLS;

export const isNext = (a: number, b: number) => {
  const rowSteps = Math.abs(getRow(a) - getRow(b));
  const colSteps = Math.abs(getCol(a) - getCol(b));
  return rowSteps + colSteps === 1;
};

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

export const shufflePuzzle = () => {
  const numbers = createPuzzle();

  for (let i = 0; i < SHUFFLE_MOVES; i++) {
    const emptyIndex = numbers.indexOf(EMPTY);

    const neighbours = numbers
      .map((_, index) => index)
      .filter((index) => isNext(index, emptyIndex));

    const randomIndex =
      neighbours[Math.floor(Math.random() * neighbours.length)];
    swap(numbers, randomIndex, emptyIndex);
  }
  return numbers;
};

export const moveBricks = (bricks: number[], index: number) => {
  const emptyIndex = bricks.indexOf(EMPTY);

  const sameRow = getRow(index) === getRow(emptyIndex);
  const sameCol = getCol(index) === getCol(emptyIndex);

  if (index === emptyIndex || (!sameRow && !sameCol)) return bricks;

  const direction = index < emptyIndex ? -1 : 1;
  const step = sameRow ? direction : direction * COLS;

  const newBricks = [...bricks];
  let current = emptyIndex;

  while (current !== index) {
    const next = current + step;
    [newBricks[current], newBricks[next]] = [
      newBricks[next],
      newBricks[current],
    ];
    current = next;
  }
  return newBricks;
};
