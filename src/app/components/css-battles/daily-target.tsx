import { DailyTargets_01112023 } from "./daily-targets/01-11-2023";
import { DailyTargets_02112023 } from "./daily-targets/02-11-2023";
import { DailyTargets_03112023 } from "./daily-targets/03-11-2023";
import { DailyTargets_04112023 } from "./daily-targets/04-11-2023";
import { DailyTargets_28072023 } from "./daily-targets/28-07-2023";
import { DailyTargets_30102023 } from "./daily-targets/30-10-2023";
import { DailyTargets_31102023 } from "./daily-targets/31-10-2023";

export const DailyTarget: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ children, href }) => {
  return (
    <div className="relative w-screen h-screen">
      {children}
      <a
        className="absolute text-sm left-10 bottom-10 font-mono p-2 bg-white border rounded w-min md:w-fit"
        href={href}
      >
        {href}
      </a>
    </div>
  );
};

type Battle = {
  href: string;
  component: React.FC;
};

export const battles = [
  {
    href: "https://cssbattle.dev/play/xVZiXaTbquOO8zacDDjt",
    component: DailyTargets_28072023,
  },
  {
    href: "https://cssbattle.dev/play/QGHPRtNWxdMMzt5zo4lj",
    component: DailyTargets_30102023,
  },
  {
    href: "https://cssbattle.dev/play/DEZ0vq4BzrnHgCY7ljLv",
    component: DailyTargets_31102023,
  },
  {
    href: "https://cssbattle.dev/play/QbKbsSvMnViaoahKjkya",
    component: DailyTargets_01112023,
  },
  {
    href: "https://cssbattle.dev/play/taLJyz4IamvfctMx4z3Q",
    component: DailyTargets_02112023,
  },
  {
    href: "https://cssbattle.dev/play/Wu3QnyC0Fh2okPAZRzjq",
    component: DailyTargets_03112023,
  },
  {
    href: "https://cssbattle.dev/play/2S2kJuGL3a15M9HieIQ4",
    component: DailyTargets_04112023,
  },
] satisfies Battle[];
