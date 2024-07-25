import { Radio, Select, Button, Modal, Table } from "antd";
import search from "../../assets/search-normal.svg";
import { useState } from "react";
import useTranslation from "../../hooks/useTranslation";

const { Option } = Select;
export const Travelers = () => {
  const { t } = useTranslation();

  const [added, setAdded] = useState(false);
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
          <>
            <div className="flex items-end gap-5">
              <Radio.Group className="flex mb-2  font-yekan  gap-4">
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
              <div>
                <label className="block" htmlFor="age">
                  {t("age")}
                </label>
                <Select
                  id="age"
                  className="ant-select"
                  defaultValue="2"
                  style={{ width: 100 }}
                >
                  <Option>1</Option>
                </Select>
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: t("actions"),
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Button
            onClick={() => setAdded(true)}
            className={`${
              added ? "bg-[#2FAC66]" : "bg-orange-400"
            } self-end border-0 rounded-full text-white`}
          >
            <svg
              className={!added ? "hidden" : "block"}
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
                d="M10.5804 15.5801C10.3804 15.5801 10.1904 15.5001 10.0504 15.3601L7.22043 12.5301C6.93043 12.2401 6.93043 11.7601 7.22043 11.4701C7.51043 11.1801 7.99043 11.1801 8.28043 11.4701L10.5804 13.7701L15.7204 8.6301C16.0104 8.3401 16.4904 8.3401 16.7804 8.6301C17.0704 8.9201 17.0704 9.4001 16.7804 9.6901L11.1104 15.3601C10.9704 15.5001 10.7804 15.5801 10.5804 15.5801Z"
                fill="white"
              />
            </svg>

            {t(added ? "saved" : "add")}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={added ? "hidden" : "block"}
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

  const { en } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
              className="w-full mt-4 message-table  "
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
          className="w-full mt-4 message-table travelers-table"
          dataSource={dataSource}
          columns={detailsColumn}
          bordered
        />
      </div>
      <div className="!mt-14 ">
        <div className="flex justify-between">
          <h1 className="text-xl mb-4">{t("guestDetails")}</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-[#2FAC66] border-0 text-white"
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
          className="w-full message-table travelers-table "
          dataSource={guestsData}
          columns={guestsColumn}
          bordered
        />
      </div>
    </>
  );
};
