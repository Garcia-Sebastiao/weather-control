"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// IMAGES
import {
  appImage01,
  appImage02,
  arrowDown,
  avatar02,
  avatar03,
  blackLogo,
  check,
  heroBackground,
  logo01,
  logo02,
  logo03,
  logo04,
  managmenticon,
  menu,
  menuBlack,
  monabelleLogo,
  paymentIcon,
  reportIcon,
  rightArrow,
  transactionIcon,
  vetor,
} from "@/assets";

// COMPONENTS
import Menu from "@/components/layout/Menu";
import Drop from "@/components/common/Drop";
import Info from "@/components/common/Info";
import Title from "@/components/common/Title";
import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import Service from "@/components/common/Service";
import FaqDrop from "@/components/common/FaqDrop";
import Container from "@/components/layout/Container";
import ParallaxText from "@/components/layout/ParallaxText";

import { use, useEffect, useState } from "react";

import { drops, faqdrops } from "@/utils/Drops";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [dropdowns, setDropdowns] = useState([...drops]);
  const [faqdropdowns, setFaqDropdowns] = useState([...faqdrops]);

  function toggleDropdowns(index: number) {
    const updatedDropdowns = dropdowns.map((dropdown, i) => {
      if (i === index) {
        return { ...dropdown, isOpen: !dropdown.isOpen };
      } else {
        return { ...dropdown, isOpen: false };
      }
    });
    setDropdowns(updatedDropdowns);
  }

  function toggleFaqDropdowns(index: number) {
    const updatedFaqDropdowns = faqdropdowns.map((faqdropdown, i) => {
      if (i === index) {
        return { ...faqdropdown, isOpen: !faqdropdown.isOpen };
      } else {
        return { ...faqdropdown, isOpen: false };
      }
    });
    setFaqDropdowns(updatedFaqDropdowns);
  }

  function toggleMenu() {
    setMenuToggle(!menuToggle);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setShowHeader(true) : setShowHeader(false);
    });
  }, []);

  return (
    <div
      className={`overflow-x-hidden ${
        menuToggle ? "h-screen overflow-y-hidden" : ""
      }`}
    >
      <section className="w-full pb-40 relative">
        <Image
          className="-z-10 absolute w-full h-full top-0 left-0"
          src={heroBackground}
          alt="Background Hero"
        />

        <header
          className={`w-full transition duration-150 sm:px-20 flex items-center justify-between xs:px-6 ${
            showHeader
              ? "fixed top-0 left-0 shadow-md py-4 z-10 bg-white"
              : "py-8"
          } `}
        >
          <Link href="#">
            <Image
              src={showHeader ? blackLogo : monabelleLogo}
              alt="Monabelle"
              className=""
            />
          </Link>

          <nav className="xs:hidden lg:block">
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-4 px-3 py-2 rounded-[4px] hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25] backdrop-blur-sm">
                <Link
                  className={`text-sm font-medium ${
                    showHeader ? "text-[#1e1e1e]" : "text-white"
                  }`}
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-4 px-3 py-2 rounded-[4px] hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25] backdrop-blur-sm">
                <Link
                  className={`text-sm font-medium ${
                    showHeader ? "text-[#1e1e1e]" : "text-white"
                  }`}
                  href="#our_services"
                >
                  Our Services
                </Link>
              </li>
              <li className="flex items-center gap-4 px-3 py-2 rounded-[4px] hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25] backdrop-blur-sm">
                <Link
                  className={`text-sm font-medium ${
                    showHeader ? "text-[#1e1e1e]" : "text-white"
                  }`}
                  href="#how_plataform_works"
                >
                  How the platform works
                </Link>
              </li>
              <li className="flex items-center gap-4 px-3 py-2 rounded-[4px] hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25] backdrop-blur-sm">
                <Link
                  className={`text-sm font-medium ${
                    showHeader ? "text-[#1e1e1e]" : "text-white"
                  }`}
                  href="#about_us"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-4 px-3 py-2 rounded-[4px] hover:bg-[#ffffff25] transition duration-150 focus:bg-[#ffffff25] backdrop-blur-sm">
                <Link
                  className={`text-sm font-medium ${
                    showHeader ? "text-[#1e1e1e]" : "text-white"
                  }`}
                  href="#contacts"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="flex items-center gap-2 xs:hidden lg:flex">
            <li
              className={`flex items-center gap-4 px-4 py-3 rounded-[4px] hover:brightness-75 ${
                showHeader ? "bg-secondary-color" : "bg-[#ffffff25]"
              }`}
            >
              <Link href="" className={`text-sm font-medium text-white`}>
                Sign In
              </Link>
            </li>
            <li className="flex items-center gap-4 px-4 py-3 rounded-[4px] hover:brightness-75 bg-primary-color">
              <Link href="" className="text-white text-sm font-medium">
                Sign Up
              </Link>
            </li>
          </ul>

          <ul className="lg:hidden">
            <li>
              <button onClick={toggleMenu}>
                <Image src={showHeader ? menuBlack : menu} alt="" />
              </button>
            </li>
          </ul>
        </header>

        <Menu
          onClick={toggleMenu}
          className={menuToggle ? "translate-x-0" : "-translate-x-full"}
        />

        <div className="flex flex-col items-center gap-8 pt-20 justify-center sm:px-10 xs:px-6 ">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{
              scale: [0.5, 0.75, 0.5],
              transition: { repeat: Infinity, duration: 5 },
            }}
            className="px-6 lg:py-2 xs:py-3 font-interMedium rounded-full bg-[#250E47]"
          >
            <span className="text-sm text-white">
              I wonder if you already knew how? 🤔
            </span>
          </motion.div>
          <h2 className="text-white text-5xl leading-snug text-center font-interBlack xs:text-4xl">
            Enjoy a magical and easy way to <br />
            <span className="text-primary-color font-interBlack">
              exchange money
            </span>{" "}
            without <br />
            leaving home and fast
          </h2>

          <p className="text-white text-sm text-center leading-relaxed">
            t is a long established fact that a reader will be distracted by the
            readable content of a page <br /> when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal{" "}
            <br /> distribution of letters, as opposed
          </p>

          <Button variant="linear-gradient">
            Let’s start the value exchanges <Image src={rightArrow} alt="" />
          </Button>

          <div className="pt-8">
            <Image src={arrowDown} alt="" />
          </div>
        </div>

        <ParallaxText
          baseVelocity={5}
          className="bg-primary-color py-4 -rotate-[4deg]"
        >
          <h2 className="text-2xl font-interBlack text-white flex-none">
            MONABELE®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Ever On
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            MONABELE®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Ever On®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            The easy way to get money
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Value exchanges®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Ever On®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            The easy way to get money
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Value exchanges®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
        </ParallaxText>

        <ParallaxText
          baseVelocity={-5}
          className="bg-secondary-color py-4 lg:rotate-[3.147deg] xs:rotate-12"
        >
          <h2 className="text-2xl font-interBlack text-white flex-none">
            MONABELE®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Ever On
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            MONABELE®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Ever On®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            The easy way to get money
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Value exchanges®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Ever On®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            The easy way to get money
          </h3>
          <h2 className="text-2xl font-interBlack text-white flex-none">
            Value exchanges®
          </h2>
          <h3 className="text-white flex-none text-xl font-interBlack">
            Try and trust
          </h3>
        </ParallaxText>
      </section>

      <Container className="flex flex-col items-center gap-12">
        <span className="text-primary-font font-interMedium text-center leading-relaxed">
          Meet some of the partners who trusted monabele's service with the
          impact it could make.
        </span>

        <motion.div
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center flex-wrap gap-16"
        >
          <Image src={logo01} alt="" />
          <Image src={logo02} alt="" />
          <Image src={logo03} alt="" />
          <Image src={logo04} alt="" />
        </motion.div>
      </Container>

      <Container
        id="about_us"
        className="flex items-center justify-between relative xs:flex-wrap-reverse lg:flex-nowrap xs:gap-8 lg:gap-0"
      >
        <motion.div
          initial={{ x: -300, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-8"
        >
          <Title>
            Find out More About Us <br /> and our View on the Market
          </Title>
          <p className="text-primary-font leading-loose">
            t is a long established fact that a reader will be distracted by the{" "}
            <br /> readable content of a page when looking at its layout. The
            point <br /> of using Lorem Ipsum is that it has a more-or-less
            normal <br />
            distribution of letters, as opposed
          </p>

          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-4">
              <Image src={check} alt="" />
              <span className="text-primary-font">
                by the readable content of a page when looking at its layout.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Image src={check} alt="" />
              <span className="text-primary-font">
                by the readable content of a page when looking at its layout.
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Image src={check} alt="" />
              <span className="text-primary-font">
                by the readable content of a page when looking at its layout.
              </span>
            </li>
          </ul>

          <Button variant="primary">
            Know more about us <Image src={rightArrow} alt="" />
          </Button>
        </motion.div>

        <motion.div
          animate={{ x: 300, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:-mr-32 flex items-center justify-center w-[45rem] top-0 "
        >
          <Image
            className="w-full h-full object-cover object-center"
            src={appImage01}
            alt=""
          />
        </motion.div>
      </Container>

      <Container>
        <div className="flex w-full justify-between xs:flex-wrap gap-4">
          <Title>
            Get Many Advantages <br /> with our Platform
          </Title>

          <motion.div
            animate={{ x: 300, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-start flex-col gap-4"
          >
            <p className="text-primary-font">
              t is a long established fact that a reader will be distracted by
              the <br />
              readable content of a page when looking at its layout normal
            </p>

            <Link
              href=""
              className="flex items-center gap-2 py-3 px-6 rounded-[4px] bg-[#1e1e1e] text-white text-sm"
            >
              View more <Image src={rightArrow} alt="" />
            </Link>
          </motion.div>
        </div>
      </Container>

      <Container>
        <div className="flex items-start w-full gap-12 xs:flex-wrap xl:flex-nowrap">
          <Info image={paymentIcon} alt="Payment" title="Payment">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout normal
          </Info>

          <Info image={managmenticon} alt="Management" title="Management">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout normal
          </Info>

          <Info image={transactionIcon} alt="Transactions" title="Transactions">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout normal
          </Info>

          <Info image={reportIcon} alt="Reporting" title="Reporting">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout normal
          </Info>
        </div>
      </Container>

      <Container
        id="how_plataform_works"
        className="lg:pt-16 xs:pt-14 py-16 mt-40 bg-[#1e1e1e] flex items-center xs:flex-wrap lg:flex-nowrap gap-20"
      >
        <motion.div
          initial={{ x: -300, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:-ml-32 lg:flex-none flex items-center justify-center w-[35rem] top-0 xs:hidden lg:block"
        >
          <Image
            className="w-full h-full object-cover object-center"
            src={appImage02}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-7"
        >
          <h2 className="text-white text-3xl font-interBlack leading-normal">
            Learn how the platform works and <br /> achieve your goal of making
            money
          </h2>

          <p className="text-sm text-primary-font">
            t is a long established fact that a reader will be distracted by the
            readable content <br /> of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has
          </p>

          <div className="w-full flex flex-col gap-1">
            {dropdowns.map((dropdown, index) => (
              <Drop
                key={index}
                title={dropdown.title}
                isOpen={dropdown.isOpen}
                onClick={() => toggleDropdowns(index)}
              >
                {dropdown.text}
              </Drop>
            ))}
          </div>
        </motion.div>
      </Container>

      <Container id="our_services" className="flex flex-col gap-14">
        <Title>Our Services</Title>

        <div className="w-full flex items-center gap-4 xs:flex-wrap lg:flex-nowrap">
          <Service title="Join people who believe in monabele to exchange values">
            t is a long established fact that a reader will be distracted <br />{" "}
            by the readable content of a page when looking at its layout. <br />{" "}
            The point of using Lorem Ipsum is that it has
          </Service>

          <Service title="Join people who believe in monabele to exchange values">
            t is a long established fact that a reader will be distracted <br />{" "}
            by the readable content of a page when looking at its layout. <br />{" "}
            The point of using Lorem Ipsum is that it has
          </Service>
        </div>
      </Container>

      <Container className="relative h-screen xs:hidden lg:block">
        <div className="gradient z-10"></div>

        <Avatar className="border-primary-color top-16 right-[50%] rotate-45">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar02}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="right-64 top-36 rotate-45  border-secondary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="left-64 w-12 h-12 top-64 -rotate-6 border-primary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="w-16 h-16 left-16 top-96 -rotate-12 border-primary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="w-9 h-9 absolute left-96 top-[28rem] -rotate-12 rounded-full border-2 border-primary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="right-16 top-64 rotate-12 border-primary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <Avatar className="right-96 top-[25rem] rotate-12 border-primary-color">
          <Image
            className="w-full h-full rouded-full object-cover object-center"
            src={avatar03}
            alt="Avatar"
          />
        </Avatar>

        <div className="relative flex flex-col gap-4 items-center">
          <Title className="text-center">
            Join people who believe <br /> in monabele to exchange values
          </Title>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary-font pb-6"
          >
            t is a long established fact that a reader will be distracted by the
            readable content <br /> of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has
          </motion.p>

          <Button variant="primary">
            Joining the monabele agents <Image src={rightArrow} alt="" />
          </Button>

          <Image
            className="absolute -z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-3/5"
            src={vetor}
            alt="Vetor"
          />
        </div>
      </Container>

      <Container className="flex flex-col gap-8 pb-40">
        <Title>FAQ’s</Title>

        <div className="flex flex-col gap-1">
          {faqdropdowns.map((faqdropdown, index) => (
            <FaqDrop
              key={index}
              title={faqdropdown.title}
              isOpen={faqdropdown.isOpen}
              onClick={() => toggleFaqDropdowns(index)}
            >
              {faqdropdown.text}
            </FaqDrop>
          ))}
        </div>
      </Container>
      <br />
      <br />
      <br />
      <footer
        id="contacts"
        className="w-full flex flex-col bg-[#1e1e1e] lg:px-20 lg:py-28 gap-8 xs:px-6 xs:py-16"
      >
        <div className="flex lg:flex-nowrap justify-between items-start lg:gap-0 lg:pb-20 xs:flex-wrap xs:gap-8 xs>pb-10">
          <div className="flex flex-col gap-8">
            <a href="/">
              <Image src={monabelleLogo} alt="Monabelle" className="" />
            </a>

            <p className="text-[#656666] leading-loose text-xs">
              It is a long established fact that a reader will be <br />{" "}
              distracted by the readable content of a page <br /> when looking
              at its layout.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-interSemiBold">Site Map</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Our Services
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  How the platform works
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-interSemiBold">Join Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Participate in mentoring
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  To be partner
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-interSemiBold">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="text-[#656666] text-xs">
                  support@monabele.co.ao
                </span>
              </li>
              <li>
                <span className="text-[#656666] text-xs">+244 924545665</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-interSemiBold">Terms</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Policies and privacity
                </Link>
              </li>
              <li>
                <Link className="text-[#656666] text-xs" href="">
                  Recognition
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#f0f0f020]"></div>

        <div className="flex lg:flex-row lg:gap-0 items-center w-full justify-between xs:flex-col-reverse xs:gap-4">
          <span className="text-xs text-[#656666]">
            © 2023 Monabele. All rights reserved
          </span>

          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-xs text-[#656666]" href="">
                LinkeIn
              </Link>
            </li>
            <li>
              <Link className="text-xs text-[#656666]" href="">
                Github
              </Link>
            </li>
            <li>
              <Link className="text-xs text-[#656666]" href="">
                Google Drive
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
