import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant: "primary" | "linear-gradient" | "black";
};

export default function Button(props: ButtonProps) {
  return (
    <Link
      href={props.href || " "}
      className={`px-6 py-4 rounded-[4px] text-white font-interMedium flex items-center gap-2 ${
        props.variant == "linear-gradient"
          ? "bg-gradient-to-r from-secondary-color to-primary-color"
          : ""
      } ${props.variant == "primary" ? "bg-primary-color" : ""}
      ${props.variant == "black" ? "bg-[#1e1e1e]" : ""}  text-sm`}
    >
      {props.children}
    </Link>
  );
}
