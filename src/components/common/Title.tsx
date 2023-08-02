import * as React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Title(props: TitleProps) {
  return (
    <motion.h2
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-4xl text-left font-interBlack text-[#1e1e1e] leading-snug ${props.className}`}
    >
      {props.children}
    </motion.h2>
  );
}
