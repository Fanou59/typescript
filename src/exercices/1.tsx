/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type SquareProps = {
  isWinningSquare?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Square = ({ isWinningSquare, children, ...props }: SquareProps) => {
  return (
    <button
      className={clsx("square", {
        "winning-square": { isWinningSquare },
      })}
      {...props}
    >
      {children}
    </button>
  );
};
type SquareValue = "X" | "O" | null;

const getDefaultSquares = (): SquareValue[] => [
  null,
  null,
  null,
  null,
  null,
  null,
  "O",
  null,
  "X",
];

type BoardProps = {
  squares: SquareValue[];
  winningSquares?: number[];
  onclick?: (index: number) => void;

  //...
};

const Board = ({ squares, winningSquares, onclick }: BoardProps) => {
  return (
    <div className="game-board">
      {squares.map((square, index) => (
        <Square
          key={index}
          isWinningSquare={winningSquares?.includes(index)}
          onClick={() => onclick?.(index)}
        >
          {square}
        </Square>
      ))}
    </div>
  );
};

const Game = () => {
  const squares = getDefaultSquares();
  return (
    <div className="game">
      <Board squares={squares} />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>TicTacToe</h2>
      <Game />
    </div>
  );
}
