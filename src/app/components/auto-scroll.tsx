import { useRef } from "react";

export const AutoScroll: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  ref.current?.scrollIntoView({ behavior: "smooth" });
  return <div ref={ref}>{children}</div>;
};
