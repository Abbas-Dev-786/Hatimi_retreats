import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const PagePreLoader = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Outlet />
    </motion.main>
  );
};

export default PagePreLoader;
