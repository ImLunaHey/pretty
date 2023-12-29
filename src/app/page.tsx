'use client';
import { DailyTarget, battles } from '../components/css-battles/daily-target';
import { GlowingSquares } from '../components/squares/glowing-squares';
import { Pixel } from '../components/pixel';
import { useState } from 'react';
import { VerseTextReveal } from '@/components/verse-text-reveal';

const Loading = () => {
  return (
    <div className="relative w-screen h-screen snap-start">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-sm font-mono font-bold">Loading...</div>
      </div>
    </div>
  );
};

let loadingCount = 0;
const LoadingWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // Fake the loading time
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 10 * loadingCount++);

  if (loading) return <Loading />;

  return children;
};

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dwh]">
      <div className="snap-start">
        <LoadingWrapper>
          <GlowingSquares />
        </LoadingWrapper>
      </div>

      <div className="snap-start" id="verse-text-reveal">
        <LoadingWrapper>
          <VerseTextReveal />
        </LoadingWrapper>
      </div>

      {battles
        .sort((battle) => new Date(battle.date).getTime())
        .map(({ href, component: Component, date }) => {
          return (
            <div key={href} id={href.split('/').pop()} className="snap-start">
              <LoadingWrapper>
                <DailyTarget href={href}>
                  <Component />
                </DailyTarget>
              </LoadingWrapper>
            </div>
          );
        })}

      <Pixel domain="pretty.fish.lgbt" />
    </main>
  );
}
