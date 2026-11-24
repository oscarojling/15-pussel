import { useState } from "react";

const ROWS = 4;
const COLS = 4;
const TOTAL = ROWS * COLS;

const createPuzzle = () => {
  const numbers = Array.from({ length: TOTAL - 1 }, (_, i) => i + 1);
  numbers.push(0);
  return numbers;
};

const Puzzle = () => {
  const [bricks, setBricks] = useState<number[]>(createPuzzle);
  console.log(bricks);

  return <></>;
};

export default Puzzle;
