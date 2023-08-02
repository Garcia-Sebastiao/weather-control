import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Container(props: ContainerProps) {
  return (
    <section id={props.id} className={`${props.className} w-full sm:px-20 pt-40 xs:px-6 `}>
      {props.children}
    </section>
  );
}
