import { motion } from 'framer-motion';

export const DailyTargets_21102023 = () => {
  return (
    <motion.div className="bg-[#4f77ff] w-full h-full justify-center items-center flex">
      <div
        className="w-[100px] h-[100px] min-h-[100px] bg-white"
        style={{
          left: 'calc((100% - 100px) / 2)',
          top: 'calc((100% - 100px) / 2)',
        }}
      />
      <div
        className="absolute h-[50vh] top-[50%] w-[50vh] min-h-[200px] rounded-[100vh]"
        style={{
          background: 'rgba(40, 78, 208, 0.9)',
        }}
      />
    </motion.div>
  );
};
