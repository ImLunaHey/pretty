import { DailyTarget_03112023 } from "./daily-targets/03-11-2023";
import { DailyTarget_04112023 } from "./daily-targets/04-11-2023";

export const DailyTarget: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ children, href }) => {
  return (
    <div className="relative w-full h-[100vh]">
      {children}
      <a
        className="absolute text-sm left-2 bottom-2 font-mono p-2 bg-white border rounded"
        href={href}
      >
        {href}
      </a>
    </div>
  );
};

export const battles = [
  {
    href: "https://cssbattle.dev/play/Wu3QnyC0Fh2okPAZRzjq",
    component: DailyTarget_03112023,
  },
  {
    href: "https://cssbattle.dev/play/2S2kJuGL3a15M9HieIQ4",
    component: DailyTarget_04112023,
  },
];
