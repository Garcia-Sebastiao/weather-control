import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blackArrow } from "@/assets";

type InfoProps = {
  image: any;
  alt: string;
  href?: string;
  title: string;
  children: React.ReactNode;
};

export default function Info(props: InfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start gap-4"
    >
      <div>
        <Image className="w-10 h-10" src={props.image} alt={props.alt} />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h3 className="font-interSemiBold">{props.title}</h3>

        <span className="text-sm text-primary-font leading-loose">
          {props.children}
        </span>

        <Link
          className="flex items-center gap-2 text-xs"
          href={props.href || ""}
        >
          View more <Image src={blackArrow} alt="View more" />
        </Link>
      </div>
    </motion.div>
  );
}
