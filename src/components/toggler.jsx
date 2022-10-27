import { AnimatePresence, motion } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../contexts/theme-provider";
const Toggler = () => {
  const { setNightMode, nightMode } = useTheme();
  const handleMode = () => {
    setNightMode((p) => !p);
  };

  return (
    <AnimatePresence>
      <button
        onClick={handleMode}
        className='w-20 h-10 rounded-full p-3 bg-indigo-700 dark:bg-indigo-100 flex text-2xl items-center mx-2'
      >
        {!nightMode ? (
          <motion.div
            key={"left"}
            className='text-yellow-300'
            initial={{ opacity: 0.5, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BsFillSunFill />
          </motion.div>
        ) : (
          <motion.div
            key={"right"}
            initial={{ opacity: 0.5, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            className='ml-auto text-cyan-400'
          >
            <BsFillMoonFill />
          </motion.div>
        )}
      </button>
    </AnimatePresence>
  );
};

export default Toggler;
