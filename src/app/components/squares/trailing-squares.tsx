'use client';
import { useWindowSize } from '@uidotdev/usehooks';

const Square = () => {
  return (
    <div
      className="bg-[#E2E7F0]"
      style={{
        opacity: Math.min(0.1, Math.random()),
        border: Math.random() > 0.3 ? '1px solid #a1a1a1' : 'none',
      }}
    />
  );
};

export const TrailingSquares = () => {
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
    <div className="relative w-screen h-screen bg-white">
      <div
        className="w-full h-full grid overflow-hidden justify-center"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {squares}
      </div>
    </div>
  );
};
