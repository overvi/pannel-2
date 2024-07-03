import notfication from "../assets/notification.svg";
import sampleHotel from "../assets/Rectangle 9.svg";
import heart from "../assets/heart.svg";
import call from "../assets/call-calling.svg";

import language from "../assets/language-circle.svg";
import search from "../assets/search-normal.svg";
import logo from "../assets/Logo Orange 1.svg";
import ToggleColorMode from "./ToggleColorMode";

const Navbar = () => {
  return (
    <header>
      <nav className="p-4 justify-between flex gap-3 items-center ">
        <div className="flex  items-center gap-3">
          <div className="rounded-full p-2 bg-white dark:bg-gray-900  w-fit ">
            <img src={notfication} alt="" />
          </div>
          <div className="rounded-full pl-5 flex items-center gap-2 p-1 bg-white dark:bg-gray-900 w-fit ">
            <p className="dark:text-white">هفت هشتاد</p>
            <img src={sampleHotel} alt="" />
          </div>
          <div className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit ">
            <img src={heart} alt="" />
          </div>
          <div className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit ">
            <img src={call} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ToggleColorMode />
          <div className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit ">
            <img src={language} alt="" />
          </div>
          <div className="bg-white dark:bg-gray-900 z-0 relative overflow-hidden pr-3 rounded-full w-[27rem] h-[2.875rem]">
            <input
              type="text"
              dir="rtl"
              placeholder="جستجوی رزرواسیون..."
              className="w-full h-full dark:bg-gray-900 pr-3 absolute z-[1] top-0 shadow-none outline-none border-none"
            />
            <div className="rounded-full z-10 flex h-[46px] w-[46px] relative  bg-orange-400">
              <img className="m-auto" src={search} alt="" />
            </div>
          </div>
          <div className="rounded-full p-1 px-[.95rem] bg-white dark:bg-gray-900 w-fit ">
            <img width="17" height="25" src={logo} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
