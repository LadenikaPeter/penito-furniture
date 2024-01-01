import React, { useState } from "react";
import { NAV_MENU } from "../constants/nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("Living Room");

  const toggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const setActiveLink = (item) => {
    if (item !== "Living Room") {
      setIsActive(item);
    } else {
      setIsActive("Living Room");
    }
  };

  return (
    <nav className="pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-grow">
            <a className=" flex  xl:mr-52 mr-[5.5rem]">
              <img src="src/assets/icon.svg" alt="Logo" />
              <h2 className="text-[30px] font-semibold pl-1">Penito</h2>
            </a>
            <div className="hidden flex-grow lg:inline-block">
              <div className="flex justify-between">
                <div className="flex gap-8">
                  {NAV_MENU.map((menu) => {
                    return (
                      <div
                        className="flex flex-col items-center gap-[5px] "
                        onClick={() => setActiveLink(menu)}
                      >
                        <a className="font-medium text-lg">{menu}</a>
                        {menu === isActive && (
                          <div className="border-[2px] border-solid border-[#122025] rounded-[4px] w-7"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-8">
                  <img src="src/assets/search-icon.svg" />
                  <img src="src/assets/cart-icon.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="items-center p-2 "
            >
              {!isOpen && (
                <img
                  className="h-10 w-10 duration-300 ease-in-out"
                  src="src/assets/hamburger-button.svg"
                />
              )}
              {isOpen && (
                <img
                  className="h-10 w-10 duration-300 ease-in-out"
                  src="src/assets/cancel.svg"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 py-2 flex flex-col">
          {NAV_MENU.map((menu, i) => {
            return <a onClick={closeMobileMenu}>{menu}</a>;
          })}
          <a>cart</a>
          <div className="flex">
            <input placeholder="search" className="flex-grow" />
            <img src="src/assets/search-icon.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
}
