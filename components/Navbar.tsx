import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import NavbarIcons from "./NavbarIcons";
import NavbarCategoriesBar from "./NavbarCategories";

const Navbar = () => {
  return (
    <nav className="md:h-40 sm:h-32 h-48">
      {/* Top Portion */}
      <div className="w-full bg-primary h-[70%] flex flex-col justify-center pb-3 sm:pb-0">
        <div className="max-w-[1400px] w-full h-full m-auto flex items-center 2xl:p-0 pr-3">
          {/* Left */}
          <div className="w-[25%]">
            <Link href="/">
              <Image
                src="/amaze_logo.png"
                alt="logo"
                width={144}
                height={98}
                className="min-w-[144px]"
              />
            </Link>
          </div>

          {/* Right */}
          <div className="w-[75%] flex items-center justify-end lg:gap-14 gap-10">
            <div className="hidden sm:flex flex-1">
              <Searchbar />
            </div>
            <NavbarIcons />
          </div>
        </div>

        {/* Search bar for mobile devices */}
        <div className="sm:hidden flex mx-3">
          <Searchbar />
        </div>
      </div>

      {/* Bottom Portion */}
      <div className="h-[30%] w-full hidden lg:flex bg-secondary">
        <NavbarCategoriesBar />
      </div>
    </nav>
  );
};

export default Navbar;
