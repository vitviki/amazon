"use client";

import { useDispatch } from "react-redux";
import { openMenu } from "@/app/redux/features/hamburgerMenu/hamburgerMenuSlice";
import { RiMenuFold4Line } from "react-icons/ri";
import { navbarSubCategories } from "@/utils/data";
import Link from "next/link";

const NavbarCategoriesBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1400px] w-full h-full flex items-center m-auto xl:gap-20 gap-10 xl:px-0 px-4">
      <button
        className="flex items-center gap-2"
        onClick={() => dispatch(openMenu())}
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
    </div>
  );
};

export default NavbarCategoriesBar;
