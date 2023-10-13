"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MobileOverLay from "./MobileOverLay";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const titles = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black opacity-100">
      <div className="flex flex-wrap items-center justify-between  px-10 py-5">
        <Link
          href={"/"}
          className="font-semibold sm:text-4xl text-lg text-white"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {isOpen ? (
            <button className="px-2 py-2" onClick={() => setOpen(!isOpen)}>
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          ) : (
            <button className="px-2 py-2" onClick={() => setOpen(!isOpen)}>
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block lg:block md:w-auto" id="navBar">
          <ul className="flex  md:flex-row md:space-x-0">
            {titles.map((title, index) => {
              return <li key={index}>{NavLink(title)}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>{isOpen && <MobileOverLay titles={titles} />}</div>
    </nav>
  );
};

export default Navbar;
