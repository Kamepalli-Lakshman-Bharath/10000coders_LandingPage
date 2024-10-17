"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TenKLogoHeader } from "@/shared/svgIcons/navbarSvg";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { open_sans } from "@/shared/styles/font";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogoutSvg } from "@/shared/svgIcons/headerSvg";

const navItems = [
  { item: "Home", href: "/" },
  // { item: "Course", href: "/#course" },
  // { item: "Reviews", href: "/#reviews" },
  { item: "Hiring Partners", href: "/#hiringPartners" },
  { item: "Contact", href: "/#contact" },
  // { item: "Free Lecture", href: "/freeLecture" },
  // { item: "Scholar Ship", href: "/scholarship" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = usePathname();
  const initialRoute = navItems.find(({ href }) => href === route)?.item || "";
  const [activePath, setActivePath] = useState(initialRoute);

  const handleActiveRoute = (path) => setActivePath(path);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth < 764) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        setIsMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // to handle toggle nav bar
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseDropDown = () => setIsMenuOpen(false);

  // dynamic styles for the nav bar with scroll behaviour
  // const navbarStyle = {
  //   top: `${top}px`,
  //   transition: "top 0.5s",
  //   background: isMenuOpen ? "#fff" : "",
  // };

  const dropDownStyles = {
    maxHeight: isMenuOpen ? "500px" : "0px",
    overflow: "hidden",
    width: "100%",
    transition: "all 0.5s ease",
  };

  // framer motion variations
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div
      className={`absolute top-3 z-10 w-full md:top-4 ${open_sans.className}`}
    >
      <nav className="relative mx-auto flex items-center px-2 sm:w-[620px] sm:px-0 md:w-[711.07px] md:justify-between lg:w-[60.058rem] xl:w-full xl:px-20">
        {/* hamburg icon */}
        <div
          onClick={handleToggleMenu}
          className="float-left size-[32px] rounded-[24.19px] bg-white bg-opacity-60 backdrop-blur-3xl transition-all duration-300 hover:bg-opacity-80 focus:outline-none sm:size-[47px] md:hidden"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.6 }}
              >
                <CgClose size="100%" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.6 }}
              >
                <HiOutlineMenu size="100%" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* 10k logo */}
        <Link
          href="/"
          className={`absolute left-1/2 mx-auto grid h-[44.62px] w-[73.14px] -translate-x-1/2 place-items-center overflow-hidden rounded-[8px] bg-white bg-opacity-60 p-[8.71px] backdrop-blur transition-all duration-300 sm:h-[67.37px] sm:w-[110.44px] sm:p-[13.15px] md:static md:mx-0 md:h-[55.51px] md:w-[91px] md:-translate-x-0 md:p-[10.83px] lg:h-[75.72px] lg:w-[124.12px] lg:p-[14.78px] xl:h-[92.25px] xl:w-[151.22px] xl:p-[18px]`}
        >
          <TenKLogoHeader />
        </Link>
        <div className="hidden h-[35.77px] w-[433.07px] items-center justify-between text-sm font-semibold md:flex lg:h-[46.39px] lg:w-[556.56px] lg:text-base xl:h-[49.38px] xl:w-[592.14px]">
          <ul
            className={`flex h-[35.77px] w-[364.07px] items-center justify-center gap-x-[50px] lg:w-[468.01px] lg:gap-x-[72.73px] lg:text-[16px] xl:w-[497.87px] xl:gap-x-[81px]`}
          >
            {navItems.map(({ item, href }, idx) => (
              <li key={idx}>
                <Link
                  onClick={(e) => handleActiveRoute(item, e)}
                  className={`hover:text-Vivid_Tangelo ${open_sans.className} ${activePath === item ? "text-Vivid_Tangelo" : ""} `}
                  href="[path]"
                  as={href}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="flex items-center justify-center gap-[8.17px] border bg-Vivid_Tangelo text-white md:rounded-md md:p-1 lg:rounded-lg lg:p-2"
          >
            <p className="">Login</p>
            <div className="md:size-[11px] lg:size-[16px] xl:size-[17.97px]">
              <LogoutSvg />
            </div>
          </Link>
        </div>
        {/* login button */}
        <Link
          href="/"
          className={`absolute right-0 grid h-[32.13px] w-[65.26px] place-items-center rounded-[24.19px] hover:text-Vivid_Tangelo sm:rounded-[34.73px] md:static md:hidden lg:h-[63.58px] lg:w-[128.17px] xl:h-[58.55px] xl:w-[117.09px] xl:px-[28.55px] xl:py-[14.27px] ${open_sans.className} bg-white bg-opacity-60 text-[12.1px] font-bold opacity-90 backdrop-blur transition-all duration-300 sm:h-[47.16px] sm:w-[94.31px] sm:text-[17.37px] lg:text-[23.69px] lg:leading-[29.96px]`}
        >
          <p>Login</p>
        </Link>
      </nav>
      {isMenuOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ height: "auto", opacity: 0 }}
            exit={{ height: "0px", opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={handleCloseDropDown}
              styles={dropDownStyles}
              className="absolute inset-x-0 list-none divide-y-1 bg-white pl-4"
            >
              {navItems.map(({ item, href }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="block rounded py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-Vivid_Tangelo md:p-0 md:hover:bg-transparent md:hover:text-coralPink"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Header;
