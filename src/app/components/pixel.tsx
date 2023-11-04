import { useState } from "react";

export const Pixel: React.FC<{
  domain: string;
}> = ({ domain }) => {
  const [src, setSrc] = useState(`https://v.fish.lgbt/pixel.gif?id=${domain}`);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className="hidden"
      src={src}
      onError={() => {
        setSrc(
          `https://v.fish.lgbt/completely-innocent-looking-gif-nothing-to-see-here.gif?id=${domain}`
        );
      }}
    />
  );
};
