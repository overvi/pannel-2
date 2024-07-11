import { Button, Modal, Radio, Select, Steps, Table } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import TextArea from "antd/es/input/TextArea";
import search from "../assets/search-normal.svg";

const { Step } = Steps;
const { Option } = Select;

const columns = [
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
];

const Booking = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";
  const random = Math.random();

  const [current, setCurrent] = useState(1);
  const ResultComponent = () => {
    if (current == 3) {
      return random > 0.5 ? <Result /> : <ResultFailed />;
    }
  };
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
          <div className="bg-white flex gap-3 items-center *:basis-full dark:bg-gray-950 dark:text-white mt-3 rounded-3xl p-5 dark:shadow-none  shadow-[0px_0px_21px_5px_rgba(0,0,0,0.10)]">
            <div className="flex items-center gap-3 border border-orange-300 p-3 rounded-2xl">
              <p className="rtl:border-l ltr:border-r ltr:pr-2 ltr:border-r-orange-300 pl-2 border-l-orange-300">
                {t("enterDate")}
              </p>

              <p className="font-bold">1403/02/14</p>
            </div>
            <div className="flex items-center gap-3 border border-orange-300 p-3 rounded-2xl">
              <p className="rtl:border-l ltr:border-r ltr:pr-2 ltr:border-r-orange-300 pl-2 border-l-orange-300">
                {t("exit")}
              </p>

              <p className="font-bold">1403/02/14</p>
            </div>
            <div className="flex items-center gap-3 border border-orange-300 p-3 rounded-2xl">
              <p className="rtl:border-l ltr:border-r ltr:pr-2 ltr:border-r-orange-300 pl-2 border-l-orange-300">
                {t("guests")}
              </p>

              <p className="font-bold">1403/02/14</p>
            </div>
          </div>
          <Steps
            className="max-w-[30rem] m-auto steps"
            current={current}
            status="process"
          >
            <Step
              icon={
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={`${
                      current == 1 || current == 2 || current == 3
                        ? "*:fill-[#F9B233]"
                        : "*:fill-gray-400"
                    }`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M36.6663 13.0166V26.9833C36.6663 31.6666 34.5163 34.8832 30.733 36.0999C29.633 36.4832 28.3663 36.6666 26.983 36.6666H13.0163C11.633 36.6666 10.3663 36.4832 9.26634 36.0999C5.483 34.8832 3.33301 31.6666 3.33301 26.9833V13.0166C3.33301 6.94991 6.94967 3.33325 13.0163 3.33325H26.983C33.0497 3.33325 36.6663 6.94991 36.6663 13.0166Z"
                    />
                    <path d="M30.7333 36.0999C29.6333 36.4832 28.3666 36.6666 26.9833 36.6666H13.0166C11.6333 36.6666 10.3666 36.4832 9.2666 36.0999C9.84993 31.6999 14.4499 28.2832 19.9999 28.2832C25.5499 28.2832 30.1499 31.6999 30.7333 36.0999Z" />
                    <path d="M25.9665 19.2999C25.9665 22.5999 23.2999 25.2832 19.9999 25.2832C16.6999 25.2832 14.0332 22.5999 14.0332 19.2999C14.0332 15.9999 16.6999 13.3333 19.9999 13.3333C23.2999 13.3333 25.9665 15.9999 25.9665 19.2999Z" />
                  </svg>
                </div>
              }
            />
            <Step
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className={`${
                    current == 2 || current == 3
                      ? "*:fill-[#F9B233]"
                      : "*:fill-gray-400"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M19.9997 36.6666C29.2044 36.6666 36.6663 29.2047 36.6663 19.9999C36.6663 10.7952 29.2044 3.33325 19.9997 3.33325C10.7949 3.33325 3.33301 10.7952 3.33301 19.9999C3.33301 29.2047 10.7949 36.6666 19.9997 36.6666Z"
                  />
                  <path d="M17.6334 25.9666C17.3001 25.9666 16.9834 25.8333 16.7501 25.5999L12.0334 20.8833C11.5501 20.3999 11.5501 19.5999 12.0334 19.1166C12.5167 18.6333 13.3167 18.6333 13.8001 19.1166L17.6334 22.9499L26.2001 14.3833C26.6834 13.8999 27.4834 13.8999 27.9667 14.3833C28.4501 14.8666 28.4501 15.6666 27.9667 16.1499L18.5167 25.5999C18.2834 25.8333 17.9667 25.9666 17.6334 25.9666Z" />
                </svg>
              }
            />
            <Step
              icon={
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className={`${
                    current == 3 ? "*:fill-[#F9B233]" : "*:fill-gray-400"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M28.334 12.9166C28.0173 12.9166 27.7007 12.7999 27.4507 12.5499C26.9673 12.0666 26.9673 11.2666 27.4507 10.7833L30.8673 7.36658C27.934 4.86658 24.1507 3.33325 20.0007 3.33325C10.8007 3.33325 3.33398 10.7999 3.33398 19.9999C3.33398 29.1999 10.8007 36.6666 20.0007 36.6666C29.2007 36.6666 36.6673 29.1999 36.6673 19.9999C36.6673 15.8499 35.134 12.0666 32.634 9.13326L29.2173 12.5499C28.9673 12.7999 28.6507 12.9166 28.334 12.9166Z"
                  />
                  <path d="M22.9173 19.7L21.2507 19.1167V15.4167H21.384C22.234 15.4167 22.9173 16.1667 22.9173 17.0833C22.9173 17.7667 23.484 18.3333 24.1673 18.3333C24.8507 18.3333 25.4173 17.7667 25.4173 17.0833C25.4173 14.7833 23.6173 12.9167 21.384 12.9167H21.2507V12.5C21.2507 11.8167 20.684 11.25 20.0007 11.25C19.3173 11.25 18.7507 11.8167 18.7507 12.5V12.9167H18.2507C16.234 12.9167 14.584 14.6167 14.584 16.7167C14.584 19.15 16.0007 19.9333 17.084 20.3167L18.7507 20.9V24.6H18.6173C17.7673 24.6 17.084 23.85 17.084 22.9333C17.084 22.25 16.5173 21.6833 15.834 21.6833C15.1507 21.6833 14.584 22.25 14.584 22.9333C14.584 25.2333 16.384 27.1 18.6173 27.1H18.7507V27.5167C18.7507 28.2 19.3173 28.7667 20.0007 28.7667C20.684 28.7667 21.2507 28.2 21.2507 27.5167V27.1H21.7506C23.7673 27.1 25.4173 25.4 25.4173 23.3C25.4173 20.85 24.0007 20.0667 22.9173 19.7ZM17.9006 17.9333C17.334 17.7333 17.084 17.6167 17.084 16.7C17.084 15.9833 17.6173 15.4 18.2507 15.4H18.7507V18.2167L17.9006 17.9333ZM21.7506 24.5833H21.2507V21.7667L22.1007 22.0667C22.6673 22.2667 22.9173 22.3833 22.9173 23.3C22.9173 24 22.384 24.5833 21.7506 24.5833Z" />
                  <path d="M37.8158 2.84999C37.6824 2.54999 37.4491 2.29999 37.1324 2.16666C36.9824 2.09999 36.8158 2.06665 36.6491 2.06665H29.9824C29.2991 2.06665 28.7324 2.63332 28.7324 3.31665C28.7324 3.99998 29.2991 4.56665 29.9824 4.56665H33.6324L30.8491 7.34999C31.4825 7.89999 32.0658 8.48332 32.6158 9.11666L35.3991 6.33333V9.99999C35.3991 10.6833 35.9658 11.25 36.6491 11.25C37.3324 11.25 37.8991 10.6833 37.8991 9.99999V3.33332C37.9158 3.16665 37.8824 3.01665 37.8158 2.84999Z" />
                </svg>
              }
            />
          </Steps>
          <div>{current == 1 && <Travelers />}</div>
          <div>{current == 2 && <Accept />}</div>
          <div>{<ResultComponent />}</div>
        </div>
        <div className="rounded-2xl mx-3 flex justify-between mb-3 p-3 text-sm mt-2 bg-white dark:bg-gray-950">
          <Button
            disabled={current == 1}
            className=" border-0 rounded-full font-bold"
            onClick={() => setCurrent(current - 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                fill="gray"
              />
              <path
                d="M10.333 7.50029H6.87297L8.01964 6.35362C8.21297 6.16029 8.21297 5.84029 8.01964 5.64695C7.8263 5.45362 7.5063 5.45362 7.31297 5.64695L5.31297 7.64695C5.11964 7.84029 5.11964 8.16029 5.31297 8.35362L7.31297 10.3536C7.41297 10.4536 7.53964 10.5003 7.6663 10.5003C7.79297 10.5003 7.91964 10.4536 8.01964 10.3536C8.21297 10.1603 8.21297 9.84029 8.01964 9.64695L6.87297 8.50029H10.333C10.6063 8.50029 10.833 8.27362 10.833 8.00029C10.833 7.72695 10.6063 7.50029 10.333 7.50029Z"
                fill="gray"
              />
            </svg>
            {t("prev")}
          </Button>
          <Button
            disabled={current == 3}
            className="bg-green-400 group text-white border-0 rounded-full font-bold"
            onClick={() => setCurrent(current + 1)}
          >
            {t("next")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-disabled:fill-gray-400"
            >
              <path
                opacity="0.4"
                d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z"
                fill="white"
                className="group-disabled:fill-gray-400"
              />
              <path
                d="M10.333 7.50029H6.87297L8.01964 6.35362C8.21297 6.16029 8.21297 5.84029 8.01964 5.64695C7.8263 5.45362 7.5063 5.45362 7.31297 5.64695L5.31297 7.64695C5.11964 7.84029 5.11964 8.16029 5.31297 8.35362L7.31297 10.3536C7.41297 10.4536 7.53964 10.5003 7.6663 10.5003C7.79297 10.5003 7.91964 10.4536 8.01964 10.3536C8.21297 10.1603 8.21297 9.84029 8.01964 9.64695L6.87297 8.50029H10.333C10.6063 8.50029 10.833 8.27362 10.833 8.00029C10.833 7.72695 10.6063 7.50029 10.333 7.50029Z"
                fill="white"
                className="group-disabled:fill-gray-400"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

const Travelers = () => {
  const { t } = useTranslation();

  const data = [
    { key: t("suename"), value: "fdsadfa22443" },
    { key: t("email"), value: "alireza@gmail.com" },
    { key: t("phoneNumber"), value: "0912999992" },
  ];

  const dataSource = [
    {
      key: "1",
      room: "اتاق 304",
      bedType: "دو تخت یک نفره",
      meal: "صبحانه",
      guests: "دو بزرگسال",
      guest: "Test",
    },
  ];
  const guestsData = [
    {
      key: "1",
      guest: "1",
      gender: "مرد",
      name: "علی",
      lastName: "ممم",
    },
  ];

  const detailsColumn = [
    {
      title: t("room"),
      dataIndex: "room",
      key: "room",
    },
    {
      title: t("bedType"),
      dataIndex: "bedType",
      key: "bedType",
    },
    {
      title: t("meals"),
      dataIndex: "meal",
      key: "meal",
    },
    {
      title: t("guestNumber"),
      dataIndex: "guests",
      key: "guests",
    },
    {
      title: `${t("guests")} (${t("suename")})`,
      dataIndex: "guest",
      key: "guest",
    },
    {
      title: "fdsa",
      dataIndex: "action",
      key: "action",
    },
  ];
  const guestsColumn = [
    {
      title: t("guests"),
      dataIndex: "guest",
      key: "guest",
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("lastName"),
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: `${t("adult")} / ${t("child")}`,
      dataIndex: "adultChild",
      key: "adultChild",
      render: () => {
        return (
          <Radio.Group className="flex  font-yekan  gap-4">
            <div className="flex items-center ">
              <Radio className="radio font-yekan" value="oneStar">
                {t("adult")}
              </Radio>
            </div>
            <div className="flex items-center ">
              <Radio className="radio font-yekan" value="twoStar">
                {t("child")}
              </Radio>
            </div>
            <div>
              <Select
                className="ant-select"
                defaultValue="2"
                style={{ width: 100 }}
              >
                <Option>1</Option>
              </Select>
            </div>
          </Radio.Group>
        );
      },
    },
    {
      title: t("actions"),
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Button className="bg-orange-400 self-end border-0 rounded-full text-white">
            {t("add")}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 21.9995C17.5228 21.9995 22 17.5224 22 11.9995C22 6.47666 17.5228 1.99951 12 1.99951C6.47715 1.99951 2 6.47666 2 11.9995C2 17.5224 6.47715 21.9995 12 21.9995Z"
                fill="white"
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill="white"
              />
            </svg>
          </Button>
        );
      },
    },
  ];

  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const en = i18n.language == "en";

  const preGuests = [
    {
      key: "1",
      guest: "مم",
      lastName: "ققق",
    },
  ];

  const preGuestsColumn = [
    {
      title: t("name"),
      dataIndex: "guest",
      key: "guest",
    },
    {
      title: t("lastName"),
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: t("actions"),
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div className="flex items-center">
            <Button type="text">
              <svg
                width="24"
                height="24"
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
            </Button>
            <Button type="text">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z"
                  fill="#2FAC66"
                />
                <path
                  d="M20.97 14.33C20.25 13.51 19.18 13 18 13C16.88 13 15.86 13.46 15.13 14.21C14.43 14.93 14 15.92 14 17C14 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.97 21 18 21C19.46 21 20.73 20.22 21.42 19.06C21.63 18.72 21.79 18.33 21.88 17.93C21.96 17.63 22 17.32 22 17C22 15.98 21.61 15.04 20.97 14.33ZM19.5 17.73H18.75V18.51C18.75 18.92 18.41 19.26 18 19.26C17.59 19.26 17.25 18.92 17.25 18.51V17.73H16.5C16.09 17.73 15.75 17.39 15.75 16.98C15.75 16.57 16.09 16.23 16.5 16.23H17.25V15.52C17.25 15.11 17.59 14.77 18 14.77C18.41 14.77 18.75 15.11 18.75 15.52V16.23H19.5C19.91 16.23 20.25 16.57 20.25 16.98C20.25 17.39 19.91 17.73 19.5 17.73Z"
                  fill="#2FAC66"
                />
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  fill="#2FAC66"
                />
              </svg>
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        open={isModalOpen}
        okButtonProps={{
          hidden: true,
        }}
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <div dir={en ? "ltr" : "rtl"} className="mt-9 font-yekan ">
          <h1 className="font-bold text-xl">{t("prevGuests")}</h1>
          <div className="flex items-center mt-3 gap-5">
            <div
              className={`bg-white dark:bg-gray-900 z-0 relative overflow-hidden rounded-full w-[27rem] h-[2.875rem]`}
            >
              <input
                type="text"
                dir={en ? "ltr" : "rtl"}
                placeholder={t("reservationSearch")}
                className={`w-full h-full ${
                  en && "pl-[3rem]"
                } dark:bg-gray-900 bg-slate-50 dark:text-white pr-[3rem]  absolute z-[1] top-0 shadow-none outline-none border-none`}
              />
              <div className="rounded-full z-10 flex h-[46px] w-[46px] relative  bg-orange-400">
                <img className="m-auto" src={search} alt="" />
              </div>
            </div>
            <div>
              <Button className="rounded-full border-red-500 text-red-500">
                ریست
              </Button>
            </div>
          </div>
          <div>
            <Table
              pagination={false}
              className="w-full mt-4 message-table "
              dataSource={preGuests}
              columns={preGuestsColumn}
            />
          </div>
        </div>
      </Modal>
      <div>
        <h1 className="text-xl">{t("contactDetails")}</h1>
        <div className="rounded-2xl p-3 text-sm mt-2 bg-amber-50 dark:bg-gray-950">
          <p>{t("contactDetailsInfo")} </p>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          showHeader={false}
          className="mt-4 account-table w-full"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-xl">{t("hotelDetails")}</h1>
        <Table
          pagination={false}
          className="w-full mt-4 message-table "
          dataSource={dataSource}
          columns={detailsColumn}
        />
      </div>
      <div className="!mt-14 ">
        <div className="flex justify-between">
          <h1 className="text-xl mb-4">{t("guestDetails")}</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-green-400 border-0 text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12 21.9995C17.5228 21.9995 22 17.5224 22 11.9995C22 6.47666 17.5228 1.99951 12 1.99951C6.47715 1.99951 2 6.47666 2 11.9995C2 17.5224 6.47715 21.9995 12 21.9995Z"
                fill="white"
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill="white"
              />
            </svg>
            {t("prevGuests")}
          </Button>
        </div>
        <Table
          pagination={false}
          className="w-full message-table "
          dataSource={guestsData}
          columns={guestsColumn}
          bordered
        />
      </div>
    </>
  );
};

const Accept = () => {
  const { t, i18n } = useTranslation();
  const guestsData = [
    {
      key: "1",
      guest: "1",
      gender: "مرد",
      name: "علی",
      lastName: "ممم",
      age: "بزرگسال",
    },
  ];

  const guestsColumn = [
    {
      title: t("guests"),
      dataIndex: "guest",
      key: "guest",
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: t("suename"),
      dataIndex: "name",
      key: "name",
    },

    {
      title: `${t("child")} / ${t("adult")}`,
      dataIndex: "age",
      key: "age",
    },
  ];

  const footerContent = () => (
    <div className="flex items-center gap-1">
      <p> {t("totalPrice")}</p>
      <p>:</p>
      <p>
        <span className="text-green-600 font-bold">137.81 USD</span>
      </p>
    </div>
  );

  const en = i18n.language == "en";
  return (
    <>
      <div className="!mt-14 ">
        <h1 className="text-xl mb-4">{t("guestDetails")}</h1>
        <div className="space-y-10">
          <div>
            <div className="bg-gray-50 p-4 dark:bg-gray-950 rounded-t-2xl">
              <h1 className=" text-xl">{t("acceptUserDetails")}</h1>
            </div>
            <div className="flex border dark:border-gray-700 gap-4 rounded-b-2xl p-4 h-full ">
              <div
                className={`basis-[30%] ${
                  en ? "border-r" : "border-l"
                }  dark:border-gray-700`}
              >
                <p className="text-gray-400">{t("suename")}</p>
                <p>علی مقیمی نژاد</p>
              </div>

              <div
                className={`basis-[20%] ${
                  en ? "border-r" : "border-l"
                }   dark:border-gray-700`}
              >
                <p className="text-gray-400">{t("phoneNumber")}</p>
                <p>09909024</p>
              </div>
              <div className="basis-[50%]">
                <p className="text-gray-400">{t("email")}</p>
                <p>ajking@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-2">{t("acceptGuestDetails")}</h1>
            <Table
              pagination={false}
              className="w-full guests-table "
              dataSource={guestsData}
              columns={guestsColumn}
              footer={footerContent}
              bordered
            />
          </div>
          <div>
            <label className="mb-2 block">{t("messageRequest")}</label>
            <TextArea rows={4} placeholder={t("messageRequest")} />
          </div>
        </div>
      </div>
    </>
  );
};

const Result = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center flex justify-center items-center flex-col gap-5">
      <svg
        width="124"
        height="124"
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M98.1667 77.5C86.7483 77.5 77.5 86.7483 77.5 98.1667C77.5 102.042 78.5851 105.71 80.4968 108.81C84.0618 114.803 90.6233 118.833 98.1667 118.833C105.71 118.833 112.272 114.803 115.837 108.81C117.748 105.71 118.833 102.042 118.833 98.1667C118.833 86.7483 109.585 77.5 98.1667 77.5ZM108.862 95.945L97.8567 106.123C97.1333 106.795 96.1516 107.157 95.2216 107.157C94.24 107.157 93.2585 106.795 92.4835 106.02L87.3682 100.905C85.8699 99.4067 85.8699 96.9267 87.3682 95.4283C88.8665 93.93 91.3465 93.93 92.8448 95.4283L95.3251 97.9083L103.592 90.2617C105.142 88.815 107.622 88.9183 109.068 90.4683C110.515 92.0183 110.412 94.4467 108.862 95.945Z"
          fill="#2FAC66"
        />
        <path
          d="M113.667 38.9569V46.5002H10.334V38.9569C10.334 27.1252 19.9441 17.5669 31.7758 17.5669H92.2255C104.057 17.5669 113.667 27.1252 113.667 38.9569Z"
          fill="#2FAC66"
        />
        <path
          opacity="0.4"
          d="M10.334 46.5V85.0433C10.334 96.875 19.8924 106.433 31.7241 106.433H64.0674C67.0641 106.433 69.6473 103.902 69.389 100.905C68.6656 93 71.1974 84.4233 78.2241 77.6033C81.1174 74.7617 84.6824 72.5917 88.5574 71.3517C95.0157 69.285 101.267 69.5433 106.796 71.4033C110.154 72.54 113.667 70.1117 113.667 66.5467V46.5H10.334ZM41.334 89.125H31.0007C28.8823 89.125 27.1257 87.3683 27.1257 85.25C27.1257 83.1317 28.8823 81.375 31.0007 81.375H41.334C43.4523 81.375 45.209 83.1317 45.209 85.25C45.209 87.3683 43.4523 89.125 41.334 89.125Z"
          fill="#2FAC66"
        />
        <path
          d="M45.2083 85.25C45.2083 87.3683 43.4517 89.125 41.3333 89.125H31C28.8817 89.125 27.125 87.3683 27.125 85.25C27.125 83.1317 28.8817 81.375 31 81.375H41.3333C43.4517 81.375 45.2083 83.1317 45.2083 85.25Z"
          fill="#2FAC66"
        />
      </svg>
      <h1 className="font-extrabold text-3xl">{t("reservationSuccess")}</h1>
      <div className="p-2 bg-green-300/15 px-4 rounded-full text-green-400 border-green-500/25  border border-dashed">
        <p>
          <span className="font-bold">{t("trackNumber")}</span> : 22870516781
        </p>
      </div>
      <p>{t("reservationSuccess")}</p>
      <div className="flex gap-3 items-center *:rounded-full">
        <Button className="bg-green-400 border-0 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
              fill="white"
            />
            <path
              d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
              fill="white"
            />
            <path
              d="M12.2795 14.72C11.9895 14.43 11.5095 14.43 11.2195 14.72L10.4995 15.44V11.25C10.4995 10.84 10.1595 10.5 9.74945 10.5C9.33945 10.5 8.99945 10.84 8.99945 11.25V15.44L8.27945 14.72C7.98945 14.43 7.50945 14.43 7.21945 14.72C6.92945 15.01 6.92945 15.49 7.21945 15.78L9.21945 17.78C9.22945 17.79 9.23945 17.79 9.23945 17.8C9.29945 17.86 9.37945 17.91 9.45945 17.95C9.55945 17.98 9.64945 18 9.74945 18C9.84945 18 9.93945 17.98 10.0295 17.94C10.1195 17.9 10.1995 17.85 10.2795 17.78L12.2795 15.78C12.5695 15.49 12.5695 15.01 12.2795 14.72Z"
              fill="white"
            />
          </svg>
          {t("downloadVoucher")}
        </Button>
      </div>
    </div>
  );
};

const ResultFailed = () => {
  const { t, i18n } = useTranslation();

  const en = i18n.language == "en";

  return (
    <div className="text-center flex justify-center items-center flex-col gap-5">
      <svg
        width="124"
        height="124"
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M97.651 77.6548C86.2327 77.6548 76.9844 86.9031 76.9844 98.3215C76.9844 109.74 86.2327 118.988 97.651 118.988C109.069 118.988 118.318 109.74 118.318 98.3215C118.318 86.9031 109.069 77.6548 97.651 77.6548ZM105.918 106.846C105.143 107.621 104.161 107.983 103.179 107.983C102.197 107.983 101.216 107.621 100.441 106.846L97.7024 104.108L94.8608 106.95C94.0858 107.725 93.1043 108.086 92.1227 108.086C91.141 108.086 90.1592 107.725 89.3842 106.95C87.8859 105.451 87.8859 102.971 89.3842 101.473L92.2258 98.6315L89.4876 95.8931C87.9893 94.3948 87.9893 91.9148 89.4876 90.4165C90.986 88.9181 93.4659 88.9181 94.9643 90.4165L97.7024 93.1548L100.286 90.5715C101.784 89.0731 104.264 89.0731 105.762 90.5715C107.261 92.0698 107.261 94.5498 105.762 96.0481L103.179 98.6315L105.918 101.37C107.416 102.868 107.416 105.348 105.918 106.846Z"
          fill="#DC2626"
        />
        <path
          d="M113.667 38.9569V46.5002H10.334V38.9569C10.334 27.1252 19.9441 17.5669 31.7758 17.5669H92.2255C104.057 17.5669 113.667 27.1252 113.667 38.9569Z"
          fill="#DC2626"
        />
        <path
          opacity="0.4"
          d="M10.334 46.5V85.0433C10.334 96.875 19.8924 106.433 31.7241 106.433H64.0674C67.0641 106.433 69.6473 103.902 69.389 100.905C68.6656 93 71.1974 84.4233 78.2241 77.6033C81.1174 74.7617 84.6824 72.5917 88.5574 71.3517C95.0157 69.285 101.267 69.5433 106.796 71.4033C110.154 72.54 113.667 70.1117 113.667 66.5467V46.5H10.334ZM41.334 89.125H31.0007C28.8823 89.125 27.1257 87.3683 27.1257 85.25C27.1257 83.1317 28.8823 81.375 31.0007 81.375H41.334C43.4523 81.375 45.209 83.1317 45.209 85.25C45.209 87.3683 43.4523 89.125 41.334 89.125Z"
          fill="#DC2626"
        />
        <path
          d="M45.2083 85.25C45.2083 87.3683 43.4517 89.125 41.3333 89.125H31C28.8817 89.125 27.125 87.3683 27.125 85.25C27.125 83.1317 28.8817 81.375 31 81.375H41.3333C43.4517 81.375 45.2083 83.1317 45.2083 85.25Z"
          fill="#DC2626"
        />
      </svg>

      <h1 className="font-extrabold text-3xl">{t("balanceError")}</h1>
      <div className="p-2 bg-red-300/15 px-4 rounded-full text-red-400 border-red-500/25  border border-dashed">
        <p>
          <span className="font-bold"> {t("reservationNumber")} </span> :
          22870516781
        </p>
      </div>
      <p className="max-w-[32rem]">{t("reservationError")}</p>
      <div className="flex gap-3 items-center *:rounded-full">
        <Button className={`order-1  ${en ? "pr-2" : "pl-2"} px-0  w-fit`}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
              fill="#818181"
            />
            <path
              d="M25.1399 17.8951C24.5099 17.7901 23.9548 18.2402 23.8648 18.8552C23.6848 20.1602 23.0998 21.3301 22.1998 22.2301C20.1298 24.3001 16.9199 24.5102 14.5949 22.9052H15.7199C16.3349 22.9052 16.8449 22.3952 16.8449 21.7802C16.8449 21.1652 16.3349 20.6552 15.7199 20.6552H11.7148C11.0998 20.6552 10.5898 21.1652 10.5898 21.7802V25.7851C10.5898 26.4001 11.0998 26.9101 11.7148 26.9101C12.3298 26.9101 12.8398 26.4001 12.8398 25.7851V24.3751C14.3398 25.5901 16.1548 26.2351 17.9848 26.2351C20.0848 26.2351 22.1848 25.4402 23.7898 23.8352C25.0348 22.5902 25.8299 20.9851 26.0849 19.1851C26.1899 18.5401 25.7549 17.9701 25.1399 17.8951Z"
              fill="#818181"
            />
            <path
              d="M11.0092 18.12C11.5642 18.12 12.0441 17.715 12.1191 17.16C12.2991 15.855 12.8842 14.685 13.7842 13.785C15.8542 11.715 19.0642 11.505 21.3892 13.11H20.2642C19.6492 13.11 19.1392 13.62 19.1392 14.235C19.1392 14.85 19.6492 15.36 20.2642 15.36H24.2692C24.8842 15.36 25.3942 14.85 25.3942 14.235V10.23C25.3942 9.61498 24.8842 9.10498 24.2692 9.10498C23.6542 9.10498 23.1442 9.61498 23.1442 10.23V11.64C19.9192 9.02998 15.1942 9.19496 12.2092 12.18C10.9642 13.425 10.1691 15.0299 9.91414 16.8299C9.82414 17.4449 10.2592 18.015 10.8742 18.105C10.9042 18.12 10.9642 18.12 11.0092 18.12Z"
              fill="#818181"
            />
          </svg>
          {t("refresh")}
        </Button>
      </div>
    </div>
  );
};
