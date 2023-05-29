"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import navlinks from "@/data/navlink";
import { BiChevronDown } from 'react-icons/bi';
import Logo from "./Logo";
import Button from "../ui/Button";


const Navbar: FC = () => {
  const [navColor, setNavColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 250) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <NavigationMenu.Root className={`navbar flex items-center justify-between px-3 text-white h-20 border-b ${navColor ? "bg-[#00000070]" : "bg-transparent"}`} >
      
      {/* Nav Bar Logo */}
      <div className="logo h-full flex items-center">
        <Logo />
      </div>

      {/* Nav Bar Right Side */}
      <div className="navbar flex items-center gap-8">
        <NavigationMenu.List className="hidden md:hidden lg:hidden  xl:hidden 2xl:flex  3xl:flex  4xl:flex  5xl:flex  6xl:flex  flex-row gap-5 list-none h-[80px] items-center ">
          {
            navlinks?.map((navlink,index) => (
              <div key={index}>
                {
                  navlink.sublinks ? (
                    <NavigationMenu.Item className="h-full flex items-center hover:text-caribbeangreen">
                      <NavigationMenu.Trigger className="h-full select-none leading-none outline-none group flex items-center gap-2">
                        <Link href={navlink.link}>
                          {navlink.name}
                        </Link>
                        <BiChevronDown
                        className=" relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                        aria-hidden
                      />
                      </NavigationMenu.Trigger>

                      {/* Nav Bar Drop Down */}
                      <NavigationMenu.Content className="absolute top-20 bg-white min-w-[350px] animate-fade-in-down">
                        <ul className="m-0 list-none flex flex-col">
                          {navlink.sublinks?.map((subnavlink)=>(
                            <li className="text-darkblue hover:text-white hover:bg-darkblue p-4 border-b border-black h-full w-full" key={subnavlink.name} >
                              <Link href={subnavlink.link} className="h-full w-full">
                                {subnavlink.name}
                              </Link>
                            </li>

                          ))}
                        </ul>
                      </NavigationMenu.Content>

                    </NavigationMenu.Item>
                  ) : (
                    <NavigationMenu.Item className="hover:text-caribbeangreen" key={navlink.name}>
                      <Link href={navlink.link} >
                        {navlink.name}
                      </Link>
                    </NavigationMenu.Item>
                  )
                }
              </div>
            ))
          }
        </NavigationMenu.List>

        <Button variant="Green">Request Info</Button>
      </div>

    </NavigationMenu.Root>
  )
};

export default Navbar;