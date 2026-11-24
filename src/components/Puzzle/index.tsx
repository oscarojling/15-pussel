import { useState } from "react";

const ROWS = 3;
const COLS = 5;
const TOTAL = ROWS * COLS;

const createPuzzle = () => {
  const numbers = Array.from({ length: TOTAL - 1 }, (_, i) => i + 1);
  numbers.push(0);
  return numbers;
};

const getRow = (index: number) => Math.floor(index / COLS);
const getCol = (index: number) => index % COLS;

const Puzzle = () => {
  const [bricks, setBricks] = useState<number[]>(createPuzzle);

  const handleClick = (index: number) => {
    const emptyIndex = bricks.indexOf(0);
    const row = getRow(index);
    const col = getCol(index);
    const emptyRow = getRow(emptyIndex);
    const emptyCol = getCol(emptyIndex);

    const isNext =
      (row === emptyRow && (col === emptyCol - 1 || col === emptyCol + 1)) ||
      (col === emptyCol && (row === emptyRow - 1 || row === emptyRow + 1));

    if (!isNext) return;

    const newBricks = [...bricks];
    [newBricks[index], newBricks[emptyIndex]] = [
      newBricks[emptyIndex],
      newBricks[index],
    ];
    setBricks(newBricks);
  };

  return (
    <div
      className="grid gap-2 max-w-md mx-auto"
      style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
    >
      {bricks.map((brick, index) => (
        <button
          key={brick}
          onClick={() => handleClick(index)}
          className="bg-gray-200 rounded-2xl"
        >
          {brick === 0 ? null : brick}
        </button>
      ))}
    </div>
  );
};

export default Puzzle;
