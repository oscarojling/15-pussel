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

const isNext = (a: number, b: number) => {
  const rowSteps = Math.abs(getRow(a) - getRow(b));
  const colSteps = Math.abs(getCol(a) - getCol(b));
  return rowSteps + colSteps === 1;
};

const shufflePuzzle = () => {
  const numbers = createPuzzle();

  for (let i = 0; i < 200; i++) {
    const emptyIndex = numbers.indexOf(0);

    const neighbours = numbers
      .map((_, index) => index)
      .filter((index) => isNext(index, emptyIndex));

    const randomIndex =
      neighbours[Math.floor(Math.random() * neighbours.length)];
    [numbers[randomIndex], numbers[emptyIndex]] = [
      numbers[emptyIndex],
      numbers[randomIndex],
    ];
  }
  return numbers;
};

const Puzzle = () => {
  const [bricks, setBricks] = useState<number[]>(shufflePuzzle);

  const handleClick = (index: number) => {
    const emptyIndex = bricks.indexOf(0);

    if (!isNext(index, emptyIndex)) return;

    const newBricks = [...bricks];
    [newBricks[index], newBricks[emptyIndex]] = [
      newBricks[emptyIndex],
      newBricks[index],
    ];
    setBricks(newBricks);
  };

  const isSolved = bricks.join() === createPuzzle().join();

  const handleShuffle = () => {
    setBricks(shufflePuzzle())
  }

  return (
    <div className="max-w-md mx-auto flex flex-col gap-4">
      <div
        className="grid gap-2"
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
      <button onClick={handleShuffle}>Shuffle</button>
      {isSolved && <p>Congrats, you solved the puzzle</p>}
    </div>
  );
};

export default Puzzle;
