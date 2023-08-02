import * as React from "react";

type FaqDropProps = {
  title: string;
  isOpen: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function FaqDrop(props: FaqDropProps) {
  return (
    <div className="flex flex-col gap-1 border-b-[1px] py-4 border-[#1e1e1e25]">
      <div className="flex justify-between items-center">
        <h3 className="text-[#1e1e1e] font-interSemiBold text-lg">
          {props.title}
        </h3>

        <button
          className="text-[#1e1e1e] font-interSemiBold"
          onClick={props.onClick}
        >
          {props.isOpen ? "-" : "+"}
        </button>
      </div>

      <div className="w-full">
        {props.isOpen ? (
          <p className="text-xs text-primary-font leading-loose text-justify">
            {props.children}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
