import { Icon } from './icon';

const LeftPanel = () => {
  return <div className="bg-blue-500 h-full"></div>;
};

const MiddlePanel = () => {
  return <div className="bg-green-500 h-full min-w-[500px]"></div>;
};

const RightPanelButtons = () => {
  return (
    <div className="columns-4 p-2 w-full flex justify-between">
      <Icon name="idCard" />
      <Icon name="bell" />
      <Icon name="chatBubble" />
      <Icon name="cog" />
    </div>
  );
};

const RightPanelProfile = () => {
  return (
    <div className="bg-purple-500">
      <div className="text-white">Sophie Fortune</div>
      <div className="text-gray-500">@sophiefortune</div>
    </div>
  );
};

const RightPanelNewMembers = () => {
  return <div className="bg-orange-500"></div>;
};

const RightPanelRecentActivity = () => {
  return <div className="bg-blue-500"></div>;
};

const RightPanel = () => {
  return (
    <div className="bg-red-500 h-full">
      <RightPanelButtons />
      <RightPanelProfile />
      <RightPanelNewMembers />
      <RightPanelRecentActivity />
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-[#2D2F48] w-4/5 h-4/5 rounded-2xl grid gap-0 grid-cols-[200px_auto_200px]">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
};

export const DiscordClone = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-[#7758D1] to-[#D0A8F0] p-5 flex items-center justify-center overflow-x-scroll">
      <App />
    </div>
  );
};
