"use client";
import { DailyTarget, battles } from "./components/css-battles/daily-target";
import { GlowingSquares } from "./components/glowing-squares/glowing-squares";

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] w-[100vw] snap-start">
        <GlowingSquares />
      </div>

      {battles.map(({ href, component: Component }) => {
        return (
          <div key={href} className="h-[100vh] w-[100vw] snap-start">
            <DailyTarget href={href}>
              <Component />
            </DailyTarget>
          </div>
        );
      })}
    </main>
  );
}
