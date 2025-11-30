import React from "react";
import { motion } from "motion/react";

const Title = ({ title, desc }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-medium"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-lg text-center to-gray-500 dark:to-white/75 mb-6"
      >
        {desc}
      </motion.p>
    </>
  );
};

export default Title;
