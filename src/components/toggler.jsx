import { AnimatePresence, motion } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../contexts/theme-provider";
const Toggler = () => {
  const { setNightMode, nightMode } = useTheme();
  const handleMode = () => {
    localStorage.setItem("night_mode", nightMode ? false : true);
    setNightMode((p) => !p);
  };

  return (
    <AnimatePresence>
      <motion.button
        key={"button"}
        initial={{ rotate: 0 }}
        whileTap={{
          rotate: nightMode ? -30 : 30,
          transition: { duration: 0.2, type: "tween" },
        }}
        title='Toggle Theme'
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
      </motion.button>
    </AnimatePresence>
  );
};

export default Toggler;
