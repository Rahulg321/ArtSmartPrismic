"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

type HeaderProps = {
  classname?: string;
};

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <header className={clsx("relative px-2 py-4", classname)}>
      <nav aria-label="Main-navigation">
        <ul className="flex flex-col justify-between md:m-4 md:flex-row md:items-center md:rounded-xl">
          <div className="flex items-center justify-between">
            <NameLogo />
            <button
              aria-label="Open menu"
              className="block text-2xl text-black md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
          <div
            className={clsx(
              "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
              isOpen ? "translate-x-0" : "translate-x-[100%]"
            )}
          >
            <button
              aria-label="Close menu"
              className="fixed right-4 top-3 block p-2 text-2xl text-black md:hidden "
              onClick={() => setIsOpen(false)}
            >
              <MdClose />
            </button>
            <Link
              className={clsx("text-2xl font-semibold", {
                "active-link": pathname === "/",
              })}
              href={"/"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              className={clsx("text-2xl font-semibold", {
                "active-link": pathname === "/products",
              })}
              href={"/products"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Products
            </Link>
            <Link
              className={clsx("text-2xl font-semibold", {
                "active-link": pathname === "/about",
              })}
              href={"/about"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </Link>
            <Link
              className={clsx("text-2xl font-semibold", {
                "active-link": pathname === "/contact",
              })}
              href={"/contact"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
          <DesktopMenu />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

function NameLogo({}: {}) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-2xl font-extrabold md:text-3xl"
    >
      Art Smart
    </Link>
  );
}

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-4 md:flex">
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/",
        })}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/about",
        })}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/products",
        })}
        href={"/products"}
      >
        Products
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/contact",
        })}
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
}
