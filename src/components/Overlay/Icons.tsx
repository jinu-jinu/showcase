import { motion } from "framer-motion";

const Icons = () => {
  return (
    <>
      {/* record */}
      <motion.div
        transition={{
          repeat: Infinity,
          duration: 1,
          times: [0, 0.3, 0.7, 1],
        }}
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        className="fixed top-[6vmax] left-[5vmax] flex"
      >
        <div className="w-[2vmax] h-[2vmax] bg-red-500 rounded-full bg-shadow mr-[0.5vmax]" />
        <div className="text-[2vmax] leading-[2vmax] font-bold text-shadow text-red-500">REC</div>
      </motion.div>

      {/* battery */}
      <div className="fixed top-[6vmax] right-[5vmax] border-[0.15vmax] rounded-[4px] w-[4vmax] h-[2vmax] flex justify-evenly items-center">
        <div className="bg-green-300 rounded-[1px] w-[25%] h-[75%]" />
        <div className="bg-green-400 rounded-[1px] w-[25%] h-[75%]" />
        <div className="bg-green-500 rounded-[1px] w-[25%] h-[75%]" />
      </div>
    </>
  );
};

// 9 8

export default Icons;
