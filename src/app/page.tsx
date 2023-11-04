"use client";
import { DailyTarget, battles } from "./components/css-battles/daily-target";
import { GlowingSquares } from "./components/glowing-squares/glowing-squares";

export default function Home() {
  return (
    <main>
      <div className="snap-start">
        <GlowingSquares />
      </div>

      {battles.map(({ href, component: Component }) => {
        return (
          <div key={href} className="snap-start">
            <DailyTarget href={href}>
              <Component />
            </DailyTarget>
          </div>
        );
      })}
    </main>
  );
}
