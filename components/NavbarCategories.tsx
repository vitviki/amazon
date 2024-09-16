"use client";

import { RiMenuFold4Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { navbarSubCategories } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";

const NavbarCategoriesBar = () => {
  const [openCategories, setOpenCategories] = useState(false);
  return (
    <div className="max-w-[1400px] w-full h-full flex items-center m-auto xl:gap-20 gap-10 xl:px-0 px-4">
      <button
        className="flex items-center gap-2"
        onClick={() => setOpenCategories(true)}
      >
        <RiMenuFold4Line className="text-white text-2xl" />
        <span className="text-white text-lg font-mono">Categories</span>
      </button>
      <div className="flex items-center xl:gap-10 gap-6">
        {navbarSubCategories.map((item) => (
          <Link
            href={`/${item._id}`}
            key={item._id}
            className="text-white font-montserrat"
          >
            {item.title}
          </Link>
        ))}
      </div>
      {openCategories && (
        <div className="absolute z-10 bg-black bg-opacity-40 w-full h-full inset-0 flex">
          <div className="w-[25%] bg-white h-full overflow-y-scroll flex flex-col gap-10">
            <Link
              href="/sign-in"
              className="bg-secondary w-full flex items-center gap-4 justify-center text-xl text-white py-3"
            >
              <FaUser />
              <h3>Hi, Sign In</h3>
            </Link>
            <div className="flex flex-col gap-4 px-8 mb-5">
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Trending</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Best Sellers</Link>
                  </li>
                  <li>
                    <Link href="/">New Releases</Link>
                  </li>
                  <li>
                    <Link href="/">Movers & Shakers</Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Shop by Category</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Mobile</Link>
                  </li>
                  <li>
                    <Link href="/">Computers</Link>
                  </li>
                  <li>
                    <Link href="/">TV & Appliances</Link>
                  </li>
                  <li>
                    <Link href="/">Men's Fashion</Link>
                  </li>
                  <li>
                    <Link href="/">Women's Fashion</Link>
                  </li>
                  <li>
                    <Link href="/">Sports & Fitness</Link>
                  </li>
                  <li>
                    <Link href="/">Books</Link>
                  </li>
                  <li>
                    <Link href="/">Movies, Music & Video Games</Link>
                  </li>
                  <li>
                    <Link href="/">Books</Link>
                  </li>
                  <li>
                    <Link href="/">Beauty & Make-up</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">
                  Digital Content & Devices
                </h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Amazon miniTV</Link>
                  </li>
                  <li>
                    <Link href="/">Echo & Alexa</Link>
                  </li>
                  <li>
                    <Link href="/">Fire TV</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Video</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Music</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">
                  Digital Content & Devices
                </h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Amazon miniTV</Link>
                  </li>
                  <li>
                    <Link href="/">Echo & Alexa</Link>
                  </li>
                  <li>
                    <Link href="/">Fire TV</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Video</Link>
                  </li>
                  <li>
                    <Link href="/">Amazon Prime Music</Link>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="flex flex-col gap-5 justify-start">
                <h3 className="text-xl font-semibold">Help & Settings</h3>
                <ul className="flex flex-col gap-8 font-light text-sm leading-5 font-mono tracking-wider">
                  <li>
                    <Link href="/">Your Account</Link>
                  </li>
                  <li>
                    <Link href="/">Customer Service</Link>
                  </li>
                  <li>
                    <Link href="/">Sign In</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="w-[75%] h-full"
            onClick={() => setOpenCategories((prev) => !prev)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default NavbarCategoriesBar;
