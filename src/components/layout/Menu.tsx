import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  blackLogo,
  menuBlack,
  smDownArrow,
  smRightArrow,
  user,
} from "@/assets";

type MenuProps = {
  onClick: () => void;
  className: string;
};

export default function Menu(props: MenuProps) {
  return (
    <nav
      className={`xs:absolute xs:top-0 xs:left-0 bg-white h-[200rem] z-10 w-full lg:hidden transition duration-150 ${props.className}`}
    >
      <header className="w-full flex items-center justify-between px-6 py-5">
        <a href="#">
          <Image className="" src={blackLogo} alt="Logo" />
        </a>

        <button onClick={props.onClick}>
          <Image src={menuBlack} alt="Close Menu" />
        </button>
      </header>
      <ul className="flex flex-col items-start">
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <Link
            onClick={props.onClick}
            className={`text-xl text-[#1e1e1e] font-interSemiBold`}
            href="#"
          >
            Home
          </Link>

          <Image src={smRightArrow} alt=""></Image>
        </li>
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <Link
            onClick={props.onClick}
            className={`text-xl text-[#1e1e1e] font-interSemiBold`}
            href="#our_services"
          >
            Our Services
          </Link>

          <Image src={smDownArrow} alt=""></Image>
        </li>
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <Link
            onClick={props.onClick}
            className={`text-xl text-[#1e1e1e] font-interSemiBold`}
            href="#how_plataform_works"
          >
            How the platform works
          </Link>

          <Image src={smRightArrow} alt=""></Image>
        </li>
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <Link
            onClick={props.onClick}
            className={`text-xl text-[#1e1e1e] font-interSemiBold`}
            href="#about_us"
          >
            About us
          </Link>

          <Image src={smRightArrow} alt=""></Image>
        </li>
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <Link
            onClick={props.onClick}
            className={`text-xl text-[#1e1e1e] font-interSemiBold`}
            href="#contacts"
          >
            Contacts
          </Link>

          <Image src={smRightArrow} alt=""></Image>
        </li>
        <li className="flex items-center justify-between gap-4 py-5 px-6 border-t-[1px] border-[#e0e0e0] w-full hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25]">
          <div className="flex items-center gap-3">
            <Image src={user} alt=""></Image>
            <Link
              onClick={props.onClick}
              className={`text-base text-[#1e1e1e] font-interSemiBold`}
              href=""
            >
              Login / Create account
            </Link>
          </div>

          <Image src={smRightArrow} alt=""></Image>
        </li>
      </ul>
    </nav>
  );
}
