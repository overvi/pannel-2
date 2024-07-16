import { Button, Steps } from "antd";
import { useState } from "react";
import { Accept } from "../components/booking/Accept";
import { Result, ResultFailed } from "../components/booking/Result";
import { Travelers } from "../components/booking/Travelers";
import Sidebar from "../components/Sidebar";
import useTranslation from "../hooks/useTranslation";
import moment from "moment-jalaali";

const { Step } = Steps;

const Booking = () => {
  const { t, en } = useTranslation();
  const random = Math.random();
  const [current, setCurrent] = useState(1);

  const f = en ? "" : "j";

  const ResultComponent = () => {
    if (current == 3) {
      return random > 0.5 ? <Result /> : <ResultFailed />;
    }
  };

  const infoCards = [
    {
      label: t("enterDate"),
      date: moment().format(`${f}YYYY/${f}M/${f}D HH:mm`),
    },
    { label: t("exit"), date: moment().format(`${f}YYYY/${f}M/${f}D HH:mm`) },
    { label: t("guests"), date: moment().format(`${f}YYYY/${f}M/${f}D HH:mm`) },
  ];

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9">
      <Sidebar active="booking" />
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
            {infoCards.map((card) => (
              <div className="flex items-center gap-3 border border-orange-300 p-3 rounded-2xl">
                <p className="rtl:border-l ltr:border-r ltr:pr-2 ltr:border-r-orange-300 pl-2 border-l-orange-300">
                  {card.label}
                </p>

                <time dateTime={card.date} className="font-bold">
                  {card.date}
                </time>
              </div>
            ))}
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
