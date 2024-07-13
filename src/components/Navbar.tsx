import sampleHotel from "../assets/Rectangle 9.svg";
import call from "../assets/call-calling.svg";
import heart from "../assets/heart.svg";
import notfication from "../assets/notification.svg";

import { Popover } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo Orange 1.svg";
import language from "../assets/language-circle.svg";
import search from "../assets/search-normal.svg";
import { useTheme } from "./ToggleColorMode";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const en = i18n.language == "en";

  return (
    <header dir={en ? "rtl" : "ltr"}>
      <nav className="p-4 justify-between flex gap-3 items-center ">
        <div className="flex  items-center gap-3">
          <NotificationPopover />

          <ProfilePopover />

          <FavoritesPopover />

          <ContactPopover />
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit ">
            <svg
              width="24"
              height="24"
              onClick={() => setDarkMode(darkMode == "dark" ? "light" : "dark")}
              viewBox="0 0 24 24"
              className="fill-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                fill=""
              />
              <path
                d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                fill=""
              />
            </svg>
          </div>

          <div
            onClick={() => changeLanguage(i18n.language == "en" ? "ir" : "en")}
            className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit "
          >
            <img src={language} alt="" />
          </div>

          <div
            className={`bg-white dark:bg-gray-900 z-0 relative overflow-hidden rounded-full w-[27rem] h-[2.875rem]`}
          >
            <input
              type="text"
              dir={en ? "ltr" : "rtl"}
              placeholder={t("reservationSearch")}
              className={`w-full h-full ${
                en && "pl-3"
              } dark:bg-gray-900 dark:text-white pr-3  absolute z-[1] top-0 shadow-none outline-none border-none`}
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

const FavoritesPopover = () => {
  const [likes, setLikesOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Popover
      rootClassName="nav-popover"
      content={
        <div dir="rtl" className="font-yekan w-[25rem] p-2 rounded-full ">
          <div>
            <h1 className="font-bold text-lg  pb-3">{t("favorites")}</h1>
            <div className="mt-2 border-y py-3 ">
              <div className="flex justify-between items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    fill="#DC2626"
                  />
                  <path
                    d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                    fill="#DC2626"
                  />
                </svg>
                <div className="font-bold">fdsafdasfdasfdsa </div>
              </div>
              <p dir="ltr">Shior</p>
            </div>
            <div className="mt-2  py-3 ">
              <div className="flex justify-between items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    fill="#DC2626"
                  />
                  <path
                    d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                    fill="#DC2626"
                  />
                </svg>
                <div className="font-bold">fdsafdasfdasfdsa </div>
              </div>
              <p dir="ltr">Shior</p>
            </div>
          </div>
        </div>
      }
      trigger="click"
      open={likes}
      className="rounded-full profile-popover  cursor-pointer"
      onOpenChange={setLikesOpen}
      placement="topLeft"
    >
      <div
        tabIndex={0}
        className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit "
      >
        <img src={heart} alt="" />
      </div>
    </Popover>
  );
};

const ContactPopover = () => {
  const [contact, setContact] = useState(false);
  const { t } = useTranslation();

  return (
    <Popover
      rootClassName="nav-popover"
      content={
        <div dir="rtl" className="font-yekan w-[25rem] p-2 rounded-full ">
          <div>
            <h1 className="font-bold text-lg  pb-3">{t("label")}</h1>
            <div className="mt-2 border-t py-3 ">
              <div>
                <h2 className="font-bold">{t("contact")} </h2>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
                      fill="orange"
                    />
                    <path
                      d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z"
                      fill="orange"
                    />
                    <path
                      opacity="0.4"
                      d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
                      fill="orange"
                    />
                    <path
                      d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                      fill="orange"
                    />
                  </svg>
                  <p>44499839</p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z"
                      fill="#F9B233"
                    />
                    <path
                      d="M9.00008 9.65247C8.37008 9.65247 7.73258 9.45748 7.24508 9.05998L4.89758 7.18498C4.65758 6.98998 4.61258 6.63748 4.80758 6.39748C5.00258 6.15748 5.35508 6.11248 5.59508 6.30748L7.94257 8.18248C8.51257 8.63998 9.48007 8.63998 10.0501 8.18248L12.3976 6.30748C12.6376 6.11248 12.9976 6.14998 13.1851 6.39748C13.3801 6.63748 13.3426 6.99748 13.0951 7.18498L10.7476 9.05998C10.2676 9.45748 9.63008 9.65247 9.00008 9.65247Z"
                      fill="#F9B233"
                    />
                  </svg>

                  <p>Mangotels@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="mt-2  py-3 ">
              <div>
                <h2 className="font-bold">{t("workHours")} </h2>
                <p className="mt-2">{t("workHoursExplicit")}</p>
              </div>
            </div>
          </div>
        </div>
      }
      trigger="click"
      open={contact}
      className="rounded-full profile-popover cursor-pointer "
      onOpenChange={setContact}
      placement="topLeft"
    >
      <div className="rounded-full p-2 bg-white dark:bg-gray-900 w-fit ">
        <img src={call} alt="" />
      </div>
    </Popover>
  );
};

const NotificationPopover = () => {
  const [notficiationM, setNotficationM] = useState(false);
  const { t } = useTranslation();

  return (
    <Popover
      rootClassName="nav-popover"
      content={
        <div dir="rtl" className="font-yekan w-[25rem] p-2 pb-20 rounded-full ">
          <div>
            <h1 className="font-bold text-lg border-b  pb-3">
              {t("database")}
            </h1>
            <div className="mt-2 flex justify-between items-center  py-3 border-b ">
              <div>
                <h2 className="font-bold text-orange-500">
                  {t("passwordChange")}
                </h2>
                <p className="mt-2">1204/2014 </p>
              </div>
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8025 3.9225C14.595 3.8025 13.3875 3.7125 12.1725 3.645V3.6375L12.0075 2.6625C11.895 1.9725 11.73 0.9375 9.975 0.9375H8.01C6.2625 0.9375 6.0975 1.9275 5.9775 2.655L5.82 3.615C5.1225 3.66 4.425 3.705 3.7275 3.7725L2.1975 3.9225C1.8825 3.9525 1.6575 4.23 1.6875 4.5375C1.7175 4.845 1.9875 5.07 2.3025 5.04L3.8325 4.89C7.7625 4.5 11.7225 4.65 15.6975 5.0475C15.72 5.0475 15.735 5.0475 15.7575 5.0475C16.0425 5.0475 16.29 4.83 16.32 4.5375C16.3425 4.23 16.1175 3.9525 15.8025 3.9225Z"
                    fill="#DC2626"
                  />
                  <path
                    opacity="0.3991"
                    d="M14.4226 6.105C14.2426 5.9175 13.9951 5.8125 13.7401 5.8125H4.26006C4.00506 5.8125 3.75006 5.9175 3.57756 6.105C3.40506 6.2925 3.30756 6.5475 3.32256 6.81L3.78756 14.505C3.87006 15.645 3.97506 17.07 6.59256 17.07H11.4076C14.0251 17.07 14.1301 15.6525 14.2126 14.505L14.6776 6.8175C14.6926 6.5475 14.5951 6.2925 14.4226 6.105Z"
                    fill="#DC2626"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.18506 12.75C7.18506 12.4393 7.4369 12.1875 7.74756 12.1875H10.2451C10.5557 12.1875 10.8076 12.4393 10.8076 12.75C10.8076 13.0607 10.5557 13.3125 10.2451 13.3125H7.74756C7.4369 13.3125 7.18506 13.0607 7.18506 12.75Z"
                    fill="#DC2626"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5625 9.75C6.5625 9.43934 6.81434 9.1875 7.125 9.1875H10.875C11.1857 9.1875 11.4375 9.43934 11.4375 9.75C11.4375 10.0607 11.1857 10.3125 10.875 10.3125H7.125C6.81434 10.3125 6.5625 10.0607 6.5625 9.75Z"
                    fill="#DC2626"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      }
      trigger="click"
      open={notficiationM}
      className="rounded-full  profile-popover cursor-pointer "
      onOpenChange={setNotficationM}
      placement="topLeft"
    >
      <div className="rounded-full p-2 bg-white dark:bg-gray-900  w-fit ">
        <img src={notfication} alt="" />
      </div>
    </Popover>
  );
};

const ProfilePopover = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Popover
      rootClassName="nav-popover"
      content={
        <div dir="rtl" className="font-yekan w-[20rem] rounded-full ">
          <div dir="rtl" className="border-b pb-3 p-2">
            <h1 className="font-bold text-lg">{t("accountDetails")} </h1>
            <p>gxgrsadas8344</p>
          </div>
          <div dir="rtl" className="border-b py-3">
            <h1 className="font-bold text-lg"> {t("balance")}</h1>
            <p>1200.USD</p>
          </div>
          <div dir="rtl" className="py-3">
            <h1 className="font-bold text-lg"> {t("customerInfo")}</h1>
            <p>Hjys</p>
          </div>
          <div
            className="mt-3 flex items-center justify-center gap-7"
            dir="rtl"
          >
            <button className="flex flex-col justify-center items-center">
              <div className="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12 9.60008V22.3867C12 26.6667 14.6667 29.3334 18.9333 29.3334H22.3867C26.6533 29.3334 29.32 26.6667 29.32 22.4001V9.60008C29.3333 5.33341 26.6667 2.66675 22.4 2.66675H18.9333C14.6667 2.66675 12 5.33341 12 9.60008Z"
                    fill="#F9B233"
                  />
                  <path
                    d="M16.5732 10.8269L21.0398 15.2935C21.4265 15.6802 21.4265 16.3202 21.0398 16.7069L16.5732 21.1735C16.1865 21.5602 15.5465 21.5602 15.1598 21.1735C14.7732 20.7869 14.7732 20.1469 15.1598 19.7602L17.9198 17.0002H3.6665C3.11984 17.0002 2.6665 16.5469 2.6665 16.0002C2.6665 15.4535 3.11984 15.0002 3.6665 15.0002H17.9198L15.1598 12.2402C14.9598 12.0402 14.8665 11.7869 14.8665 11.5335C14.8665 11.2802 14.9598 11.0269 15.1598 10.8269C15.5465 10.4269 16.1732 10.4269 16.5732 10.8269Z"
                    fill="#F9B233"
                  />
                </svg>
              </div>
              <p className="text-center"> {t("exit")} </p>
            </button>
            <button className="flex flex-col justify-center items-center">
              <div className="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.0002 16.0001C19.6821 16.0001 22.6668 13.0153 22.6668 9.33341C22.6668 5.65152 19.6821 2.66675 16.0002 2.66675C12.3183 2.66675 9.3335 5.65152 9.3335 9.33341C9.3335 13.0153 12.3183 16.0001 16.0002 16.0001Z"
                    fill="#F9B233"
                  />
                  <path
                    d="M15.9999 19.3335C9.31988 19.3335 3.87988 23.8135 3.87988 29.3335C3.87988 29.7068 4.17322 30.0002 4.54655 30.0002H27.4532C27.8265 30.0002 28.1199 29.7068 28.1199 29.3335C28.1199 23.8135 22.6799 19.3335 15.9999 19.3335Z"
                    fill="#F9B233"
                  />
                </svg>
              </div>
              <p className="text-center"> {t("users")}</p>
            </button>
            <button className="flex flex-col justify-center items-center">
              <div className="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M23.3734 10.3601C23.28 10.3468 23.1867 10.3468 23.0934 10.3601C21.0267 10.2934 19.3867 8.60008 19.3867 6.52008C19.3867 4.40008 21.1067 2.66675 23.2401 2.66675C25.3601 2.66675 27.0934 4.38675 27.0934 6.52008C27.0801 8.60008 25.44 10.2934 23.3734 10.3601Z"
                    fill="#F9B233"
                  />
                  <path
                    opacity="0.4"
                    d="M27.72 19.6C26.2266 20.6 24.1333 20.9734 22.2 20.72C22.7066 19.6267 22.9733 18.4134 22.9866 17.1334C22.9866 15.8 22.6933 14.5334 22.1333 13.4267C24.1066 13.1601 26.2 13.5334 27.7066 14.5334C29.8133 15.92 29.8133 18.2 27.72 19.6Z"
                    fill="#F9B233"
                  />
                  <path
                    opacity="0.4"
                    d="M8.5867 10.3601C8.68003 10.3468 8.77337 10.3468 8.8667 10.3601C10.9334 10.2934 12.5734 8.60008 12.5734 6.52008C12.5734 4.40008 10.8534 2.66675 8.72003 2.66675C6.60003 2.66675 4.8667 4.38675 4.8667 6.52008C4.88003 8.60008 6.52003 10.2934 8.5867 10.3601Z"
                    fill="#F9B233"
                  />
                  <path
                    opacity="0.4"
                    d="M8.73349 17.1332C8.73349 18.4265 9.01349 19.6532 9.52015 20.7598C7.64015 20.9598 5.68016 20.5598 4.24016 19.6132C2.13349 18.2132 2.13349 15.9331 4.24016 14.5331C5.66682 13.5731 7.68016 13.1865 9.57349 13.3998C9.02682 14.5198 8.73349 15.7865 8.73349 17.1332Z"
                    fill="#F9B233"
                  />
                  <path
                    d="M16.1599 21.16C16.0532 21.1467 15.9332 21.1467 15.8132 21.16C13.3599 21.08 11.3999 19.0667 11.3999 16.5867C11.3999 14.0533 13.4399 12 15.9866 12C18.5199 12 20.5732 14.0533 20.5732 16.5867C20.5732 19.0667 18.6266 21.08 16.1599 21.16Z"
                    fill="#F9B233"
                  />
                  <path
                    d="M11.8269 23.92C9.81356 25.2667 9.81356 27.48 11.8269 28.8134C14.1202 30.3467 17.8802 30.3467 20.1736 28.8134C22.1869 27.4667 22.1869 25.2534 20.1736 23.92C17.8936 22.3867 14.1336 22.3867 11.8269 23.92Z"
                    fill="#F9B233"
                  />
                </svg>
              </div>
              <p className="text-center">{t("management")} </p>
            </button>
            <button>
              <div className="rounded-full p-2 bg-gray-50 dark:bg-gray-900">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8931 9.2667C28.0397 6.37337 25.6264 3.96003 22.7331 3.1067C20.5331 2.4667 19.0131 2.52003 17.9597 3.3067C16.6931 4.25337 16.5464 5.96003 16.5464 7.17337V10.4934C16.5464 13.7734 18.0397 15.44 20.9731 15.44H24.7997C25.9997 15.44 27.7197 15.2934 28.6664 14.0267C29.4797 12.9867 29.5464 11.4667 28.8931 9.2667Z"
                    fill="#F9B233"
                  />
                  <path
                    opacity="0.4"
                    d="M25.2132 17.8135C24.8665 17.4135 24.3599 17.1869 23.8399 17.1869H19.0665C16.7199 17.1869 14.8132 15.2802 14.8132 12.9335V8.1602C14.8132 7.6402 14.5865 7.13353 14.1865 6.78687C13.7999 6.4402 13.2665 6.2802 12.7599 6.34687C9.62653 6.74687 6.74653 8.46687 4.86653 11.0535C2.9732 13.6535 2.27986 16.8269 2.87986 20.0002C3.74653 24.5869 7.4132 28.2535 12.0132 29.1202C12.7465 29.2669 13.4799 29.3335 14.2132 29.3335C16.6265 29.3335 18.9599 28.5869 20.9465 27.1335C23.5332 25.2535 25.2532 22.3735 25.6532 19.2402C25.7199 18.7202 25.5599 18.2002 25.2132 17.8135Z"
                    fill="#F9B233"
                  />
                </svg>
              </div>
              {t("database")}
            </button>
          </div>
        </div>
      }
      trigger="click"
      open={open}
      className="rounded-full profile-popover "
      onOpenChange={setOpen}
      placement="topLeft"
    >
      <div
        tabIndex={0}
        className="rounded-full  cursor-pointer flex items-center gap-2 p-1 bg-white dark:bg-gray-900 w-fit "
      >
        <p className="dark:text-white">هفت هشتاد</p>
        <img src={sampleHotel} alt="" />
      </div>
    </Popover>
  );
};
