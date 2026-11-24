import { useState } from "react";
import { motion } from "motion/react";
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
    <main className="min-h-dvh flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 bg-white text-black">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">15-puzzle</h1>
        <p className="text-gray-600">Code test for Grebban</p>
      </header>
      <p className="text-center text-balance text-sm sm:text-base">
        Click on a brick in the same row or column as the empty space.
      </p>
      <div
        className="grid gap-1.5 sm:gap-2 w-full max-w-md md:max-w-lg"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {bricks.map((brick, index) =>
          brick === EMPTY ? (
            <motion.div layout key={brick} />
          ) : (
            <motion.button
              layout
              key={brick}
              onClick={() => handleClick(index)}
              disabled={isSolved}
              className="aspect-square bg-black text-white rounded-md text-lg sm:text-2xl font-semibold cursor-pointer sm:hover:bg-gray-800"
            >
              {brick}
            </motion.button>
          ),
        )}
      </div>
      <button
        onClick={handleShuffle}
        className="cursor-pointer rounded-full border border-black px-6 py-2 font-semibold hover:bg-black hover:text-white"
      >
        Shuffle
      </button>
      {isSolved && (
        <p className="text-xl font-semibold">
          Congrats, you solved the puzzle!
        </p>
      )}
    </main>
  );
};

export default Puzzle;
