"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { Glow } from "./glow";

const Square = () => {
  return <Glow width={50} height={50} />;
};

export const GlowingSquares = () => {
  const windowSize = useWindowSize();
  if (!windowSize.width || !windowSize.height) return null;

  // Get the width of the screen
  const columns = Math.floor(windowSize.width / 50);
  // Get the height of the screen
  const rows = Math.floor(windowSize.height / 50);

  // Create a grid of squares
  // The number of squares is the number of columns times the number of rows
  const squares = Array.from({ length: columns * rows }).map((_, i) => {
    return <Square key={i} />;
  });

  return (
    <div
      style={{
        color: "rgb(var(--foreground-rgb))",
        background: `linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb))`,
      }}
      className="relative w-full h-[100vh] snap-proximity"
    >
      <div
        className="w-screen h-full grid overflow-hidden justify-center"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {squares}
      </div>
    </div>
  );
};
