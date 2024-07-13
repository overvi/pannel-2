import {
  Button,
  Checkbox,
  DatePicker,
  Image,
  Popover,
  Radio,
  Select,
  Table,
  Tabs,
  TabsProps,
  Tag,
} from "antd";
import { JalaliLocaleListener } from "antd-jalali";
import { useTranslation } from "react-i18next";
import fourStar from "../assets/fourStar.png";
import hotel3 from "../assets/hotel-3.png";
import more from "../assets/hotel-more.png";
import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import Sidebar from "../components/Sidebar";

const { RangePicker } = DatePicker;
const { Option } = Select;

const HotelDetails = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  const PopoverContent = () => {
    return (
      <div className="bg-orange-400 p-4  rounded-3xl">
        <div className="rounded-3xl bg-white dark:bg-gray-950  p-3">
          <p className="border-b pb-2">بکشنبه 03 / 16</p>
          <div className="mt-3">
            <p className="text-green-500 font-bold text-lg">USD 32.8</p>
            <p>صبحانه با ناهار یا صبحانه با شام</p>
          </div>
        </div>
        <div className="mt-3 text-right dark:text-black text-white">
          <p>نوع اتاق : دلوکس کابل توبین</p>
          <p>نوع تخت: یک تخت دونفره</p>
          <p>میانگین قیمت اتاق برای یک شب: 2.840.000 تومان</p>
          <p>
            قیمت کل: <span className="text-black">2.840.000</span> تومان (یک
            اتاق)
          </p>
        </div>
      </div>
    );
  };

  const columns = [
    {
      title: t("allRooms"),
      dataIndex: "heading",
      key: "heading",
      colSpan: 1,
    },
    {
      title: t("meals"),
      dataIndex: "meal",
      key: "meal",
      colSpan: 1,
      render: () => (
        <Popover
          rootClassName="hotel-popover w-[19rem] text-center"
          placement="top"
          content={PopoverContent}
        >
          <div className="text-center">
            <p>یک تخت دو نفره</p>
            <p className="text-gray-400">صبحانه</p>
          </div>
        </Popover>
      ),
    },
    {
      title: t("cancelConditions"),
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
      render: () => (
        <div className="text-center">
          <p className="text-red-500">{t("extradition")}</p>
        </div>
      ),
    },
    {
      title: `${t("price")} / ${t("room")} / ${t("night")}`,
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
      render: () => (
        <div className="text-center">
          <p>
            137.5 <span className="font-bold">USD</span>
          </p>
          <p> {t("totalPrice")}: 137.81 USD</p>
        </div>
      ),
    },
    {
      title: t("reserve"),
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
      render: () => (
        <div className="text-center">
          <Button className="border-0 bg-green-500 rounded-full text-white">
            {t("reserve")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                fill="white"
              />
              <path
                d="M10.333 7.50029H6.87297L8.01964 6.35362C8.21297 6.16029 8.21297 5.84029 8.01964 5.64695C7.8263 5.45362 7.5063 5.45362 7.31297 5.64695L5.31297 7.64695C5.11964 7.84029 5.11964 8.16029 5.31297 8.35362L7.31297 10.3536C7.41297 10.4536 7.53964 10.5003 7.6663 10.5003C7.79297 10.5003 7.91964 10.4536 8.01964 10.3536C8.21297 10.1603 8.21297 9.84029 8.01964 9.64695L6.87297 8.50029H10.333C10.6063 8.50029 10.833 8.27362 10.833 8.00029C10.833 7.72695 10.6063 7.50029 10.333 7.50029Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      heading: "دلوکس دابل توبین",
    },
    {
      key: "2",
      heading: "دلوکس یک تخته",
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("allRooms"),
      children: (
        <div>
          <div className="flex justify-between">
            <h2>{t("allRooms")}</h2>
            <div className="flex items-center gap-3">
              <Button className="border-0 " type="text">
                {t("removeFilters")}
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
              </Button>
              <Button
                type="text"
                className=" flex gap-2 items-center bg-gray-50 dark:bg-gray-950 p-1 px-2 rounded-full"
              >
                <p>{t("roomType")}:</p>
                <p className="text-orange-400">{t("all")}</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                    stroke="#ABABAB"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button
                type="text"
                className=" flex gap-2 items-center bg-gray-50 dark:bg-gray-950 p-1 px-2 rounded-full"
              >
                <p>{t("bedType")}</p>
                <p className="text-orange-400">{t("all")}</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                    stroke="#ABABAB"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button
                type="text"
                className=" flex gap-2 items-center bg-gray-50  dark:bg-gray-950 p-1 px-2 rounded-full"
              >
                <p>{t("price")}</p>
                <p className="text-orange-400">{t("all")}</p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                    stroke="#ABABAB"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Button
                type="text"
                className=" flex gap-2 items-center bg-gray-50  dark:bg-gray-950 p-1 px-2 rounded-full"
              >
                <p>{t("meals")}</p>
                <p className="text-orange-400">{t("all")}</p>

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3002 3.72925L5.58353 6.44592C5.2627 6.76675 4.7377 6.76675 4.41686 6.44592L1.7002 3.72925"
                    stroke="#ABABAB"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
              <Radio className="radio text-center">
                <p className="mt-1">{t("extradition")}</p>
              </Radio>
            </div>
          </div>
          <Table
            className="mt-5  room-table"
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: t("details"),
      children: (
        <div>
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">اطلاعات هتل</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-bold dark:bg-gray-950 bg-gray-100 w-fit rounded-xl p-2">
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
                021-12345678
              </div>
              <div>
                <div className="flex dark:bg-gray-950 items-center gap-2 text-sm font-bold bg-gray-100 w-fit rounded-xl p-2">
                  تهران، سعادت آباد، میدان بهرود، خیابان 33، هتل اسپیناس پالاس
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
              </div>
            </div>
          </div>
          <div className="space-y-6 mt-4">
            <div>
              <h1 className="font-bold text-lg"> {t("hotelDetails")}</h1>
              <p>{t("lorem")}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg"> {t("allRooms")}</h1>
              <p>{t("lorem")}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg"> {t("lunch")}</h1>
              <p>{t("lorem")}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("rests")}</h1>
              <p>{t("lorem")}</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">{t("jobsAddition")}</h1>
              <p>{t("lorem")}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: t("laws"),
      children: (
        <div className="space-y-6 mt-4">
          <div>
            <h1 className="font-bold text-lg">{t("enterExit")}</h1>
            <div className="flex my-3 gap-2">
              <div className="space-y-5 ">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#2FAC66" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#2FAC66" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#2FAC66" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#2FAC66" />
                </svg>
              </div>
              <div className="space-y-2">
                <p>{t("hotelEnterDate")}</p>
                <p>{t("exitDate")}</p>
                <p>{t("leastAge")}</p>
                <p>{t("maxEnterLimit")}</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg"> {t("pets")}</h1>
            <ul>
              <li>{t("petsPermission")}</li>
              <li>{t("petsWeightLimit")}</li>
              <li>{t("petsLimit")}</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg"> {t("enterConditions")}</h1>
            <p>{t("lorem")}</p>
          </div>
          <div>
            <h1 className="font-bold text-lg">{t("infoBeforeEnter")}</h1>
            <p>{t("lorem")}</p>
          </div>
          <div>
            <h1 className="font-bold text-lg">{t("costs")}</h1>
            <ul>
              <li>{t("breakfestCost")}</li>
              <li>{t("parkingCost")}</li>
              <li>{t("petsCost")}</li>
              <li>{t("petsServices")}</li>
            </ul>
          </div>
          <p>{t("warning")}</p>
        </div>
      ),
    },
    {
      key: "4",
      label: t("services"),
      children: (
        <div className="flex items-center gap-3">
          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("gym")}
          </div>

          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("pool")}
          </div>
          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("light")}
          </div>
          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("desks")}
          </div>
          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("microwave")}
          </div>
          <div className="flex items-center dark:bg-gray-950 gap-2 font-bold bg-gray-100 w-fit rounded-xl p-2">
            {t("minibar")}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9">
      <Sidebar />
      <div className="h-fit w-full">
        <div className="flex dark:text-white gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-400"
            />
            <path
              d="M9 13.4924V11.2424"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-400"
            />
          </svg>

          <p className="text-gray-400">
            {t("nav")} / {t("hotelsList")} / {t("hotelDetails")}
          </p>
        </div>

        <div className="flex gap-5 w-full">
          <div className=" w-full mx-2  bg-white flex gap-4  mt-3  dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-2">
            <div className="basis-[75%] dark:border-gray-800 space-y-7 border p-4 rounded-2xl">
              <div className="hotel-grid gap-2">
                <img
                  style={{ gridArea: "one" }}
                  className="h-full"
                  src={hotel1}
                  alt=""
                />
                <img className="w-[90%]" src={hotel3} alt="" />
                <img
                  className="w-[95%]"
                  style={{ gridArea: "two" }}
                  src={hotel2}
                  alt=""
                />

                <Image.PreviewGroup>
                  <Image
                    className="!w-[11.75rem] image-preview"
                    src={more}
                    alt=""
                  />
                  <Image className="w-[90%] hidden" src={hotel2} alt="" />
                  <Image className="w-[90%] hidden" src={hotel3} alt="" />
                </Image.PreviewGroup>
              </div>
              <div className="flex justify-between ">
                <div className="*:border-0 *:text-sm *:bg-amber-500/50 *:p-1.5 *:py-1 *:font-semibold">
                  <Tag>{t("fourStarHotel")}</Tag>
                  <Tag> {t("beachHotel")}</Tag>
                  <Tag> {t("discount")}</Tag>
                </div>
                <div className="flex items-center gap-2">
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
                      fill="orange"
                    />
                    <path
                      d="M9.08984 8.72242L11.9473 5.85742L9.08984 8.72242Z"
                      fill="orange"
                    />
                    <path
                      d="M9.08992 9.285C8.94742 9.285 8.80492 9.2325 8.69242 9.12C8.47492 8.9025 8.47492 8.5425 8.69242 8.325L11.5424 5.46C11.7599 5.2425 12.1199 5.2425 12.3374 5.46C12.5549 5.6775 12.5549 6.0375 12.3374 6.255L9.48742 9.12C9.37492 9.225 9.23242 9.285 9.08992 9.285Z"
                      fill="orange"
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
                      fill="orange"
                    />
                    <path
                      d="M9 10.3125C9.3075 10.3125 9.5625 10.0575 9.5625 9.75V6C9.5625 5.6925 9.3075 5.4375 9 5.4375C8.6925 5.4375 8.4375 5.6925 8.4375 6V9.75C8.4375 10.0575 8.6925 10.3125 9 10.3125Z"
                      fill="orange"
                    />
                    <path
                      d="M9.69 11.7149C9.6525 11.6249 9.6 11.5424 9.5325 11.4674C9.4575 11.3999 9.375 11.3474 9.285 11.3099C9.105 11.2349 8.895 11.2349 8.715 11.3099C8.625 11.3474 8.5425 11.3999 8.4675 11.4674C8.4 11.5424 8.3475 11.6249 8.31 11.7149C8.2725 11.8049 8.25 11.9024 8.25 11.9999C8.25 12.0974 8.2725 12.1949 8.31 12.2849C8.3475 12.3824 8.4 12.4574 8.4675 12.5324C8.5425 12.5999 8.625 12.6524 8.715 12.6899C8.805 12.7274 8.9025 12.7499 9 12.7499C9.0975 12.7499 9.195 12.7274 9.285 12.6899C9.375 12.6524 9.4575 12.5999 9.5325 12.5324C9.6 12.4574 9.6525 12.3824 9.69 12.2849C9.7275 12.1949 9.75 12.0974 9.75 11.9999C9.75 11.9024 9.7275 11.8049 9.69 11.7149Z"
                      fill="orange"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl">
                  Ji Hotel Shenzhen Baoan Pingzhou Metro Station 
                </h1>
                <img className="mb-3" src={fourStar} alt="" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm">
                  تهران، سعادت آباد، میدان بهرود، خیابان 33، هتل اسپیناس پالاس
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
                <div className="mt-4">
                  <p>{t("lorem")}</p>
                </div>
                <div className="mt-9">
                  <Tabs defaultActiveKey="1" items={items} />
                </div>
              </div>
            </div>
            <div className="border dark:border-gray-800 basis-[25%] h-fit space-y-5 p-4 rounded-2xl">
              <div className="border-b pb-4 dark:border-gray-800 ">
                <p className="text-2xl text-green-500">
                  <span className="font-bold">137.81</span> USD /
                  <span className="text-black dark:text-white text-xl">
                    {t("eachNight")}
                  </span>
                </p>
              </div>
              <div className="space-y-3 border-b pb-5 dark:border-gray-800">
                <div>
                  <label className="mb-2 block" htmlFor="">
                    {t("enterExit")}
                  </label>
                  <JalaliLocaleListener />

                  <RangePicker className="rounded-full w-fit font-yekan  py-[.4rem]  " />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="my-select">
                    {t("guests")}
                  </label>
                  <Select
                    className="ant-select font-yekan placeholder:!font-yekan "
                    placeholder={t("all")}
                    style={{ width: "100%" }}
                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="disabled" disabled>
                      3
                    </Option>
                  </Select>
                </div>
              </div>
              <div className="pb-5 border-b dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-xl">{t("selectedOptions")}</h1>
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
                <div>
                  <div
                    className="flex  *:font-yekan flex-col mt-3 gap-3"
                    dir={en ? "ltr" : "rtl"}
                  >
                    <Checkbox className="custom-checkbox w-full bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:border p-1 rounded-xl">
                      <div className="flex  justify-between w-[230px]">
                        <p>{t("breakfest")}</p>
                        <p>USD20</p>
                      </div>
                    </Checkbox>
                    <Checkbox className="custom-checkbox w-full bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:border p-1 rounded-xl">
                      <div className="flex  justify-between w-[230px]">
                        <p>{t("pool")}</p>
                        <p>USD20</p>
                      </div>
                    </Checkbox>
                    <Checkbox className="custom-checkbox w-full bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:border  p-1 rounded-xl">
                      <div className="flex  justify-between w-[230px]">
                        <p>{t("parking")}</p>
                        <p>USD 10</p>
                      </div>
                    </Checkbox>
                    <Checkbox className="w-full custom-checkbox bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:border p-1 rounded-xl">
                      <div className="flex  justify-between w-[230px]">
                        <p>{t("additionalBlanket")}</p>
                        <p>USD 15</p>
                      </div>
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="pb-5 border-b dark:border-gray-800 ">
                <h1 className="font-bold text-xl ">{t("price")}</h1>
                <div className="w-full custom-checkbox bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:border p-3 rounded-xl">
                  <div className="flex  justify-between">
                    <p>{t("oneNight")}</p>
                    <p>USD 10</p>
                  </div>
                  <div className="flex  justify-between ">
                    <p>{t("breakfest")}</p>
                    <p>USD 10 </p>
                  </div>
                  <div className="flex  justify-between ">
                    <p>{t("pool")}</p>
                    <p>USD 10</p>
                  </div>
                  <div className="flex  justify-between ">
                    <p>{t("parking")}</p>
                    <p>USD 10</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-2xl text-green-500 flex items-center justify-between">
                  <p>{t("totalPrice")}</p>
                  <p>
                    <span className="font-bold">137.81</span> USD
                  </p>
                </div>
                <Button className="w-full bg-amber-500 border-0 rounded-full text-white mt-2">
                  {t("roomReserve")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
