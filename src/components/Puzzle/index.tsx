import { useState } from "react";
import { COLS, EMPTY } from "../../config";
import { createPuzzle, shufflePuzzle, moveBricks } from "../../utils/puzzle";

const Puzzle = () => {
  const [bricks, setBricks] = useState<number[]>(shufflePuzzle);

  const handleClick = (index: number) => {
    setBricks(moveBricks(bricks, index));
  };

  const isSolved = bricks.join() === createPuzzle().join();

  const handleShuffle = () => {
    setBricks(shufflePuzzle());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <p>Click on a brick in the same row or column as the empty space.</p>
      <div
        className="grid gap-2 w-full max-w-md"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {bricks.map((brick, index) =>
          brick === 0 ? (
            <div key={brick} />
          ) : (
            <button
              key={brick}
              onClick={() => handleClick(index)}
              disabled={isSolved}
              className="aspect-square bg-gray-200 rounded-2xl text-2xl cursor-pointer hover:bg-gray-300"
            >
              {brick === EMPTY ? null : brick}
            </button>
          ),
        )}
      </div>
      <button
        onClick={handleShuffle}
        className="cursor-pointer rounded-full bg-gray-800 text-white px-6 py-2 hover:bg-gray-700"
      >
        Shuffle
      </button>
      {isSolved && <p>Congrats, you solved the puzzle</p>}
    </div>
  );
};

export default Puzzle;
