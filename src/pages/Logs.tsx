import { Button, DatePicker, Form, Input, Select } from "antd";
import { JalaliLocaleListener } from "antd-jalali";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import CardLayout from "../components/log/CardLayout";
import { useState } from "react";
import TableLayout from "../components/log/TableLayout";

const { Option } = Select;
const { RangePicker } = DatePicker;

type LayoutType = "Table" | "Card";

const Logs = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  const [layout, setLayout] = useState<LayoutType>("Table");

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
            {t("nav")} / {t("resevations")}
          </p>
        </div>
        <div className="bg-white mx-3 space-y-8 dark:bg-gray-900 dark:text-white mt-3 rounded-3xl p-5">
          <div className="flex items-center gap-4">
            <div className="bg-amber-200/50 w-fit p-1 px-3 rounded-xl">
              <p className="text-sm font-bold">
                {t("incomingReservations")}
                <span className="text-orange-500 mx-2">۴۰ </span>
              </p>
            </div>
            <div className="bg-amber-200/50 w-fit p-1 px-3 rounded-xl">
              <p className="text-sm font-bold">
                {t("payingReservations")}
                <span className="text-orange-500 mx-2">۴۰ </span>
              </p>
            </div>
          </div>
          <Form className="grid grid-cols-4 gap-4">
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="reservationDate">
                {t("reservationDate")}
              </label>
              <JalaliLocaleListener />

              <RangePicker
                id="reservationDate"
                className="rounded-full font-yekan w-full py-[.4rem]  "
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="enterExit">
                {t("enterData")}
                {t("endDate")}
              </label>
              <RangePicker
                id="enterExit"
                className="rounded-full font-yekan w-full py-[.4rem]  "
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="reservationNumber">
                {t("reservationNumber")}
              </label>
              <Input
                id="reservationNumber"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
                placeholder={t("reservationNumber")}
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="guests">
                {t("guests")}
              </label>
              <Input
                id="guests"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
                placeholder={t("suename")}
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="hotelName">
                {t("hotelName")}
              </label>
              <Input
                id="hotelName"
                className="rounded-full p-2 placeholder:font-yekan focus:border-orange-500 focus:shadow-none hover:border-orange-500 "
                type="text"
                placeholder={t("hotelPlaceholder")}
              />
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="reservationStatus">
                {t("reservationStatus")}
              </label>
              <div className="">
                <Select
                  id="reservationStatus"
                  placeholder="همه"
                  className="custom-select h-[2.5rem] w-full"
                >
                  <Option>d</Option>
                </Select>
              </div>
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="balanceStatus">
                {t("balanceStatus")}
              </label>
              <div className="">
                <Select
                  id="balanceStatus"
                  placeholder="همه"
                  className="custom-select h-[2.5rem] w-full"
                >
                  <Option>d</Option>
                </Select>
              </div>
            </div>
            <div className="w-full mt-3  ">
              <label className="block mb-2" htmlFor="payingChannel">
                {t("payingChannel")}
              </label>
              <div className="">
                <Select
                  id="payingChannel"
                  placeholder="همه"
                  className="custom-select h-[2.5rem] w-full"
                >
                  <Option>d</Option>
                </Select>
              </div>
            </div>
            <div className="flex gap-3 items-center *:rounded-full">
              <Button className="bg-orange-500/75 border-0 text-white">
                {t("search")}
              </Button>
              <Button>ریست</Button>
            </div>
          </Form>

          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <p className="text-gray-400"> {t("allReservation")}</p>
              <Button className="rounded-full bg-gray-400 text-white border-0">
                {t("exportHistory")}
              </Button>
              <div className="relative">
                <Button className="rounded-full bg-gray-400 text-white border-0">
                  {t("massActions")}
                </Button>
                <Select
                  placeholder={t("massActions")}
                  className="rounded-full left-0 opacity-0 absolute w-[8.4rem]  bg-gray-400 text-white border-0"
                >
                  <Option>fdsa</Option>
                </Select>
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-3 text-gray-400 *:cursor-pointer">
                <li
                  onClick={() => setLayout("Table")}
                  className="text-orange-400 border-b-4 border-b-orange-400 "
                >
                  {t("showList")}
                </li>
                <li onClick={() => setLayout("Card")}>{t("showCard")}</li>
                <li>{t("groupReservation")}</li>
              </ul>
            </div>
          </div>
          <div>
            {layout == "Table" ? <TableLayout /> : <CardLayout />}
            <div className="flex gap-3 ">
              <p className="text-gray-400">{t("allReservation")}</p>
              <div className="text-gray-400 flex gap-2 items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.375 12.5625H13.6875V10.875C13.6875 10.5675 13.4325 10.3125 13.125 10.3125C12.8175 10.3125 12.5625 10.5675 12.5625 10.875V12.5625H10.875C10.5675 12.5625 10.3125 12.8175 10.3125 13.125C10.3125 13.4325 10.5675 13.6875 10.875 13.6875H12.5625V15.375C12.5625 15.6825 12.8175 15.9375 13.125 15.9375C13.4325 15.9375 13.6875 15.6825 13.6875 15.375V13.6875H15.375C15.6825 13.6875 15.9375 13.4325 15.9375 13.125C15.9375 12.8175 15.6825 12.5625 15.375 12.5625Z"
                    fill="#767676"
                  />
                  <path
                    opacity="0.4"
                    d="M16.5 6.39V2.985C16.5 1.9275 16.02 1.5 14.8275 1.5H11.7975C10.605 1.5 10.125 1.9275 10.125 2.985V6.3825C10.125 7.4475 10.605 7.8675 11.7975 7.8675H14.8275C16.02 7.875 16.5 7.4475 16.5 6.39Z"
                    fill="#767676"
                  />
                  <path
                    d="M7.875 6.39V2.985C7.875 1.9275 7.395 1.5 6.2025 1.5H3.1725C1.98 1.5 1.5 1.9275 1.5 2.985V6.3825C1.5 7.4475 1.98 7.8675 3.1725 7.8675H6.2025C7.395 7.875 7.875 7.4475 7.875 6.39Z"
                    fill="#767676"
                  />
                  <path
                    opacity="0.4"
                    d="M7.875 14.8275V11.7975C7.875 10.605 7.395 10.125 6.2025 10.125H3.1725C1.98 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.98 16.5 3.1725 16.5H6.2025C7.395 16.5 7.875 16.02 7.875 14.8275Z"
                    fill="#767676"
                  />
                </svg>
                <p>{t("showFiveInPage")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
