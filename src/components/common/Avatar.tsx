import * as React from "react";
import { motion } from "framer-motion";

type AvatarProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Avatar(props: AvatarProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 2 },
      }}
      className={`absolute rounded-full border-2 ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
}
