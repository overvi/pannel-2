import { Button } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import hotelI from "../../assets/Rectangle 405.png";
import fiveStar from "../../assets/fiveStar.png";

const HotelSimpleCard = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const description = `  هتل اسپیناس پالاس با ارائه‌ی مجموعه ای از خدمات رفاهی و تفریحی
            متنوع، از بهترین هتل های تهران است. اقامت در این هتل همیشه باعث به
            جاماندن خاطرات فراموش نشدنی برای مهمانان خارجی و ایرانی آن بوده است.`;
  return (
    <div className="bg-white space-y-5 w-[444.5px]  mt-3 flex flex-col gap-3  dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
      <div className="relative">
        <div className="absolute bg-gray-300/50 rounded-t-2xl w-full p-2 ">
          <div className="flex gap-3 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M6.41979 2.50488V13.2524C6.16479 13.2599 5.90979 13.3199 5.72229 13.4324L3.95979 14.4374C2.72979 15.1424 1.71729 14.5574 1.71729 13.1324V5.83488C1.71729 5.36238 2.05479 4.77738 2.47479 4.53738L5.72229 2.67738C5.90979 2.57238 6.16479 2.51238 6.41979 2.50488Z"
                fill="#767676"
              />
              <path
                d="M11.7974 4.74745V15.495C11.5349 15.5025 11.2799 15.4575 11.0774 15.36L7.13992 13.3875C6.93742 13.29 6.68242 13.245 6.41992 13.2525V2.50495C6.68242 2.49745 6.93742 2.54245 7.13992 2.63995L11.0774 4.61245C11.2799 4.70995 11.5349 4.75495 11.7974 4.74745Z"
                fill="#767676"
              />
              <path
                opacity="0.4"
                d="M16.4999 4.86755V12.165C16.4999 12.6375 16.1624 13.2225 15.7424 13.4625L12.4949 15.3225C12.3074 15.4275 12.0524 15.4875 11.7974 15.495V4.74755C12.0524 4.74005 12.3074 4.68005 12.4949 4.56755L14.2574 3.56255C15.4874 2.85755 16.4999 3.44255 16.4999 4.86755Z"
                fill="#767676"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M6.66002 3.45004C6.06002 0.85504 2.15252 0.84754 1.55252 3.45004C1.20002 4.97254 2.16752 6.26254 3.00752 7.06504C3.62252 7.64254 4.59002 7.64254 5.20502 7.06504C6.04502 6.26254 7.00502 4.97254 6.66002 3.45004ZM4.13252 4.65004C3.72002 4.65004 3.38252 4.31254 3.38252 3.90004C3.38252 3.48754 3.71252 3.15004 4.12502 3.15004H4.13252C4.55252 3.15004 4.88252 3.48754 4.88252 3.90004C4.88252 4.31254 4.55252 4.65004 4.13252 4.65004Z"
                fill="#767676"
              />
              <path
                d="M4.88232 3.8999C4.88232 4.3124 4.55232 4.6499 4.13232 4.6499C3.71982 4.6499 3.38232 4.3124 3.38232 3.8999C3.38232 3.4874 3.71232 3.1499 4.12482 3.1499H4.13232C4.55232 3.1499 4.88232 3.4874 4.88232 3.8999Z"
                fill="#767676"
              />
              <path
                opacity="0.4"
                d="M16.4325 12.45C15.8325 9.85504 11.91 9.84754 11.3025 12.45C10.95 13.9725 11.9175 15.2625 12.765 16.065C13.38 16.6425 14.355 16.6425 14.97 16.065C15.8175 15.2625 16.785 13.9725 16.4325 12.45ZM13.8975 13.65C13.485 13.65 13.1475 13.3125 13.1475 12.9C13.1475 12.4875 13.4775 12.15 13.89 12.15H13.8975C14.31 12.15 14.6475 12.4875 14.6475 12.9C14.6475 13.3125 14.31 13.65 13.8975 13.65Z"
                fill="#767676"
              />
              <path
                d="M14.6475 12.8999C14.6475 13.3124 14.31 13.6499 13.8975 13.6499C13.485 13.6499 13.1475 13.3124 13.1475 12.8999C13.1475 12.4874 13.4775 12.1499 13.89 12.1499H13.8975C14.31 12.1499 14.6475 12.4874 14.6475 12.8999Z"
                fill="#767676"
              />
              <path
                d="M9.00008 14.8125H6.99008C6.12008 14.8125 5.36258 14.2875 5.06258 13.4775C4.75508 12.6675 4.98008 11.775 5.63258 11.1975L11.6251 5.955C11.9851 5.64 11.9926 5.2125 11.8876 4.92C11.7751 4.6275 11.4901 4.3125 11.0101 4.3125H9.00008C8.69258 4.3125 8.43758 4.0575 8.43758 3.75C8.43758 3.4425 8.69258 3.1875 9.00008 3.1875H11.0101C11.8801 3.1875 12.6376 3.7125 12.9376 4.5225C13.2451 5.3325 13.0201 6.225 12.3676 6.8025L6.37508 12.045C6.01508 12.36 6.00758 12.7875 6.11258 13.08C6.22508 13.3725 6.51008 13.6875 6.99008 13.6875H9.00008C9.30758 13.6875 9.56258 13.9425 9.56258 14.25C9.56258 14.5575 9.30758 14.8125 9.00008 14.8125Z"
                fill="#767676"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                fill="#767676"
              />
              <path
                d="M9 10.3125C9.3075 10.3125 9.5625 10.0575 9.5625 9.75V6C9.5625 5.6925 9.3075 5.4375 9 5.4375C8.6925 5.4375 8.4375 5.6925 8.4375 6V9.75C8.4375 10.0575 8.6925 10.3125 9 10.3125Z"
                fill="#767676"
              />
              <path
                d="M9.69 11.7149C9.6525 11.6249 9.6 11.5424 9.5325 11.4674C9.4575 11.3999 9.375 11.3474 9.285 11.3099C9.105 11.2349 8.895 11.2349 8.715 11.3099C8.625 11.3474 8.5425 11.3999 8.4675 11.4674C8.4 11.5424 8.3475 11.6249 8.31 11.7149C8.2725 11.8049 8.25 11.9024 8.25 11.9999C8.25 12.0974 8.2725 12.1949 8.31 12.2849C8.3475 12.3824 8.4 12.4574 8.4675 12.5324C8.5425 12.5999 8.625 12.6524 8.715 12.6899C8.805 12.7274 8.9025 12.7499 9 12.7499C9.0975 12.7499 9.195 12.7274 9.285 12.6899C9.375 12.6524 9.4575 12.5999 9.5325 12.5324C9.6 12.4574 9.6525 12.3824 9.69 12.2849C9.7275 12.1949 9.75 12.0974 9.75 11.9999C9.75 11.9024 9.7275 11.8049 9.69 11.7149Z"
                fill="#767676"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M5.33231 4.46996L12.0973 2.21246C15.1348 1.19996 16.7848 2.85746 15.7798 5.89496L13.5223 12.66C12.0073 17.2125 9.5173 17.2125 8.00231 12.66L7.33481 10.65L5.32481 9.98246C0.779805 8.47496 0.779805 5.99246 5.33231 4.46996Z"
                fill="#767676"
              />
              <path
                d="M9.08984 8.72242L11.9473 5.85742L9.08984 8.72242Z"
                fill="#767676"
              />
              <path
                d="M9.08992 9.285C8.94742 9.285 8.80492 9.2325 8.69242 9.12C8.47492 8.9025 8.47492 8.5425 8.69242 8.325L11.5424 5.46C11.7599 5.2425 12.1199 5.2425 12.3374 5.46C12.5549 5.6775 12.5549 6.0375 12.3374 6.255L9.48742 9.12C9.37492 9.225 9.23242 9.285 9.08992 9.285Z"
                fill="#767676"
              />
            </svg>
          </div>
        </div>
        <img src={hotelI} alt="" width="100%" />
      </div>
      <div className="flex gap-5 flex-col  ">
        <div className="space-y-4  pl-[.65rem] ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 justify-between">
              <h1 className="font-bold text-xl">{t("espinasHotel")} </h1>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                  stroke="#F9B233"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img src={fiveStar} alt="" />
          </div>
          <div className="flex items-center gap-2 text-xs">
            تهران، سعادت آباد، میدان بهرود، خیابان 33، هتل اسپیناس پالاس{" "}
            <svg
              width="18"
              height="18"
              className="-order-1"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12.0281 4.92909C11.4156 2.23409 9.06481 1.02075 6.99981 1.02075C6.99981 1.02075 6.99981 1.02075 6.99398 1.02075C4.93481 1.02075 2.57814 2.22825 1.96564 4.92325C1.28314 7.93325 3.12648 10.4824 4.79481 12.0866C5.41314 12.6816 6.20648 12.9791 6.99981 12.9791C7.79314 12.9791 8.58648 12.6816 9.19898 12.0866C10.8673 10.4824 12.7106 7.93909 12.0281 4.92909Z"
                fill="#F9B233"
              />
              <path
                d="M7.0001 7.85176C8.01492 7.85176 8.8376 7.02908 8.8376 6.01426C8.8376 4.99943 8.01492 4.17676 7.0001 4.17676C5.98527 4.17676 5.1626 4.99943 5.1626 6.01426C5.1626 7.02908 5.98527 7.85176 7.0001 7.85176Z"
                fill="#F9B233"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-[14px]">
            {description.substring(
              0,
              expanded ? description.length : description.length / 2
            )}
            <Button
              onClick={() => setExpanded(!expanded)}
              className="block mt-3 border-0 shadow-none"
            >
              {expanded ? t("seeLess") : t("seeMore")}
            </Button>
          </p>
          <div className=" flex justify-between border-t pt-4">
            <div className="text-center">
              <p>{t("startPrice")} </p>
              <p className="text-xl text-green-500">
                <span className="font-bold">137.81</span> USD
              </p>
            </div>
            <Button className="bg-amber-400 rounded-full  border-0 text-white px-4">
              {t("seeRooms")}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="white"
                />
                <path
                  d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90992 8.71016 9.90992 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90992 15.7702 9.90992 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSimpleCard;
