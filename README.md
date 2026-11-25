# 15-puzzle

**Live:** https://15-pussel.vercel.app/

## Run it

```bash
npm install
npm run dev      # start locally
npm run build    # production build
npm test         # run unit tests
npm run lint     # run ESLint
```

## Change the grid size

Edit `ROWS` and `COLS` in `src/config.ts`. The grid, the shuffle and the move logic all adapt.

Note: the unit tests are written for a 3×5 grid, so the expected values in the tests need to be updated if the size changes.

## Choices

The puzzle is shuffled by making random valid moves from the solved state, since a fully random order is unsolvable about half of the time. All game logic lives in `src/utils/puzzle.ts`, separate from React.

## Tech

React, TypeScript, Vite, Tailwind CSS, Motion, Vitest