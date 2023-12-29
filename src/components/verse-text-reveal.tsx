'use client';

import { DependencyList, EffectCallback, useEffect, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{};:,./<>?';
const characters = `${letters.toUpperCase()}${letters.toLowerCase()}${numbers}${symbols} `.split('').reverse().join('');

const useDelayedEffect = (effect: EffectCallback, deps?: DependencyList | undefined, delay?: number) => {
  useEffect(() => {
    const timeoutId = setTimeout(effect, delay);
    return () => clearTimeout(timeoutId);
  }, [effect, deps, delay]);
};

const useLetterIndex = (letter: string, delay: number) => {
  const [index, setIndex] = useState(0);

  useDelayedEffect(
    () => {
      const interval = setInterval(() => {
        setIndex((currentIndex) => {
          if (characters[currentIndex] === letter) {
            clearInterval(interval);
            return currentIndex;
          }
          return currentIndex + 1;
        });
      }, 250);

      return () => clearInterval(interval);
    },
    [letter],
    delay,
  );

  return index;
};

const Letter: React.FC<{
  letter: string;
  delay?: number;
}> = ({ letter, delay = 1_000 }) => {
  const index = useLetterIndex(letter, delay);

  return <span className="text-white font-mono">{characters[index]}</span>;
};

const Reveal = ({ text }: { text: string }) => {
  return (
    <div>
      {text.split('\n').map((line, i) => {
        return line.split('').map((letter, j) => {
          return <Letter key={i} letter={letter} delay={j} />;
        });
      })}
    </div>
  );
};

export const VerseTextReveal = () => {
  return (
    <div className="text-white relative w-screen h-screen">
      <div className="w-full h-full flex overflow-hidden justify-center items-center">
        <div className="h-fit w-1/3">
          <Reveal text="HELLO WORLD" />
          <Reveal text="THIS IS A LONGER STRING" />
          <Reveal text="LOREM IPSUM DOLOR SIT AMET MUS FELIS SI NATOQUE. BLANDIT PURUS IACULIS SOLLICITUDIN QUISQUE MAGNIS. VELIT IN SEMPER SUSPENDISSE FEUGIAT CONUBIA EU ULTRICIES" />
        </div>
      </div>
    </div>
  );
};
