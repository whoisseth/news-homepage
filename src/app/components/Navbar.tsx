/** @format */
"use client";

import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};

const links = [
  {
    href: "#",
    title: "Home"
  },
  {
    href: "#",
    title: "New"
  },
  {
    href: "#",
    title: "Popular"
  },
  {
    href: "#",
    title: "Trending"
  },
  {
    href: "#",
    title: "Categories"
  }
];

export default function Navbar({}: Props) {
  const [animationParent] = useAutoAnimate();
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div
      ref={animationParent}
      className="flex justify-between py-4 items-center "
    >
      <Image src={logo} alt="logo" />
      {/* links */}
      <div className=" items-center gap-4 hidden sm:flex ">
        {links.map((d, i) => (
          <Link
            className=" hover:text-orange-300  transition-all "
            key={i}
            href={d.href}
          >
            {d.title}
          </Link>
        ))}
      </div>
      {isMenuOpen && <MoblieNavLinks setMenu={setMenu} />}

      <IoMdMenu
        onClick={() => setMenu(true)}
        className="text-4xl cursor-pointer sm:hidden"
      />
    </div>
  );
}

type MobileNavType = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function MoblieNavLinks({ setMenu }: MobileNavType) {
  return (
    <div className="fixed flex h-screen justify-end  top-0 left-0  bg-black/50 w-full sm:hidden ">
      {/* <div className="w-[40%] h-ful" /> */}

      {/* white container */}
      <div className="flex flex-col gap-4 bg-white h-full  w-[60%] px-5 py-6 ">
        <div className="flex justify-end w-full ">
          <GrClose
            onClick={() => setMenu(false)}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          {links.map((d, i) => (
            <Link
              className=" hover:text-orange-300  transition-all "
              key={i}
              href={d.href}
            >
              {d.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
