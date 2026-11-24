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

  return (
    <div className="grid gap-2 max-w-md mx-auto" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`}}>
      {bricks.map((brick) => (
        <button key={brick} className="bg-gray-200 rounded-2xl">{brick === 0 ? null : brick}</button>
      ))}
    </div>
  );
};

export default Puzzle;
