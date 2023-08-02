import * as React from "react";

type DropProps = {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export default function Drop(props: DropProps) {
  return (
    <div className="w-full flex flex-col gap-1 border-b-[1px] py-4 border-[#ffffff25]">
      <div className="w-full flex justify-between items-center">
        <h3
          className={`${
            props.isOpen ? "text-[#e0e0e0] " : "text-[#ffffff25]"
          } font-interSemiBold text-lg`}
        >
          {props.title}
        </h3>

        <button
          className={`${
            props.isOpen ? "text-white" : "text-[#ffffff25]"
          } font-interSemiBold`}
          onClick={props.onClick}
        >
          {props.isOpen ? "-" : "+"}
        </button>
      </div>

      <div className="w-full">
        {props.isOpen ? (
          <p className="text-xs text-primary-font leading-loose">
            {props.children}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
