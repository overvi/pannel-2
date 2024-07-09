import { Button, Radio, Steps, Table } from "antd";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";

const { Step } = Steps;
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
          <div className="flex  flex-col">
            <Button
              dir="ltr"
              className="bg-orange-400 self-end border-0 rounded-full text-white"
            >
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
            </Radio.Group>
          </div>
        );
      },
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
            {t("nav")} / {t("resevations")}
          </p>
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 dark:text-white mt-3 rounded-3xl p-5">
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
          <Steps className="max-w-[30rem] m-auto" current={0} status="process">
            <Step
              icon={
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M36.6663 13.0166V26.9833C36.6663 31.6666 34.5163 34.8832 30.733 36.0999C29.633 36.4832 28.3663 36.6666 26.983 36.6666H13.0163C11.633 36.6666 10.3663 36.4832 9.26634 36.0999C5.483 34.8832 3.33301 31.6666 3.33301 26.9833V13.0166C3.33301 6.94991 6.94967 3.33325 13.0163 3.33325H26.983C33.0497 3.33325 36.6663 6.94991 36.6663 13.0166Z"
                      fill="#F9B233"
                    />
                    <path
                      d="M30.7333 36.0999C29.6333 36.4832 28.3666 36.6666 26.9833 36.6666H13.0166C11.6333 36.6666 10.3666 36.4832 9.2666 36.0999C9.84993 31.6999 14.4499 28.2832 19.9999 28.2832C25.5499 28.2832 30.1499 31.6999 30.7333 36.0999Z"
                      fill="#F9B233"
                    />
                    <path
                      d="M25.9665 19.2999C25.9665 22.5999 23.2999 25.2832 19.9999 25.2832C16.6999 25.2832 14.0332 22.5999 14.0332 19.2999C14.0332 15.9999 16.6999 13.3333 19.9999 13.3333C23.2999 13.3333 25.9665 15.9999 25.9665 19.2999Z"
                      fill="#F9B233"
                    />
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M19.9997 36.6666C29.2044 36.6666 36.6663 29.2047 36.6663 19.9999C36.6663 10.7952 29.2044 3.33325 19.9997 3.33325C10.7949 3.33325 3.33301 10.7952 3.33301 19.9999C3.33301 29.2047 10.7949 36.6666 19.9997 36.6666Z"
                    fill="#767676"
                  />
                  <path
                    d="M17.6334 25.9666C17.3001 25.9666 16.9834 25.8333 16.7501 25.5999L12.0334 20.8833C11.5501 20.3999 11.5501 19.5999 12.0334 19.1166C12.5167 18.6333 13.3167 18.6333 13.8001 19.1166L17.6334 22.9499L26.2001 14.3833C26.6834 13.8999 27.4834 13.8999 27.9667 14.3833C28.4501 14.8666 28.4501 15.6666 27.9667 16.1499L18.5167 25.5999C18.2834 25.8333 17.9667 25.9666 17.6334 25.9666Z"
                    fill="#767676"
                  />
                </svg>
              }
            />
          </Steps>
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
          <div>
            <h1 className="text-xl">{t("hotelDetails")}</h1>
            <Table
              pagination={false}
              className="w-full mt-4 message-table "
              dataSource={dataSource}
              columns={detailsColumn}
            />
          </div>
          <div className="!mt-14 ">
            <h1 className="text-xl mb-4">{t("guestDetails")}</h1>
            <Table
              pagination={false}
              className="w-full message-table "
              dataSource={guestsData}
              columns={guestsColumn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
