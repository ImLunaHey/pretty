import { cn } from '@/cn';
import { IconBellOutline } from './icons/bell';
import { IconChatbubbleOutline } from './icons/chat-bubble';
import { IconBxCog } from './icons/cog';
import { IconIdcard } from './icons/id-card';

const icons = {
  bell: IconBellOutline,
  cog: IconBxCog,
  chatBubble: IconChatbubbleOutline,
  idCard: IconIdcard,
};

export const Icon: React.FC<{
  name: keyof typeof icons;
}> = ({ name }) => {
  const Component = icons[name];
  if (!Component) throw new Error(`Icon "${name}" not found`);
  return <Component className={cn(`text-white fill-current`)} />;
};
