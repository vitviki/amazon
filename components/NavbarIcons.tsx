"use client";

import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-8">
      <RxHamburgerMenu
        className="lg:hidden flex text-white md:text-3xl text-2xl cursor-pointer"
        title="Menu"
      />
      <IoIosHeartEmpty
        className="text-white md:text-3xl text-2xl cursor-pointer"
        title="Wishlist"
      />
      <CiUser
        className="text-white md:text-3xl text-2xl cursor-pointer"
        title="Profile"
      />
      <CiShoppingCart
        className="text-white md:text-3xl text-2xl cursor-pointer"
        title="Cart"
      />
    </div>
  );
};

export default NavbarIcons;
