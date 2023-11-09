export const Bento = () => {
  return (
    // A grid of boxes that look like a bento box
    <div className="relative w-screen h-screen bg-red-600">
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-5">
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-500"></div>
      </div>
    </div>
  );
};
