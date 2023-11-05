"use client";
import { DailyTarget, battles } from "./components/css-battles/daily-target";
import { GlowingSquares } from "./components/glowing-squares/glowing-squares";
import { Pixel } from "./components/pixel";

export default function Home() {
  return (
    <main>
      <div className="snap-start">
        <GlowingSquares />
      </div>

      {battles.map(({ href, component: Component }) => {
        return (
          <div key={href} id={href.split("/").pop()} className="snap-start">
            <DailyTarget href={href}>
              <Component />
            </DailyTarget>
          </div>
        );
      })}

      <Pixel domain="pretty.fish.lgbt" />
    </main>
  );
}
