import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

import { motion } from "framer-motion";

import { rightArrow } from "@/assets";
import { appImage03 } from "@/assets";

type ServiceProps = {
  title: string;
  children: React.ReactNode;
};

export default function Service(props: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sm:p-12 xs:p-6 rounded-lg border-[1px] lg:pb-48 relative flex-1 border-[#e0e0e0e0]"
    >
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-3xl text-left font-interBlack text-[#1e1e1e] leading-snug max-w-sm">
          {props.title}
        </h2>
        <p className="text-primary-font text-sm leading-loose">
          {props.children}
        </p>

        <Link
          href=""
          className="flex items-center gap-2 py-3 px-6 rounded-[4px] bg-[#1e1e1e] text-white text-sm hover:brightness-75 transition duration-150 font-interMedium"
        >
          View more <Image src={rightArrow} alt="" />
        </Link>
      </div>

      <div className="absolute right-0 bottom-0">
        <Image className="w-72 xs:hidden lg:block" src={appImage03} alt="App" />
      </div>
    </motion.div>
  );
}
