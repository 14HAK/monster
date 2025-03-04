import { motion } from "framer-motion";
import React from "react";

export default function AnimateCard(): React.ReactElement {
  return (
    <motion.div
      className="mx-10 my-5 flex h-40 w-64 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-xl font-bold text-white shadow-lg"
      whileHover={{
        scale: 1.1,
        rotateY: 15, // 3D rotation effect
        rotateX: -10, // Slight tilt
      }}
      whileTap={{ scale: 0.95 }} // Click effect
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      🚀 3D Card
    </motion.div>
  );
}
