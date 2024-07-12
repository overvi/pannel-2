import { Table, Tag } from "antd";
import { useTranslation } from "react-i18next";

const TableLayout = () => {
  const { t } = useTranslation();
  const dataSource = [
    {
      key: "1",
      reservationNumber: "778899000 hjk-78579 --",
      hotelsName: "Deluxe Room - Triple",
      reservationDate: "1403/03/8 7:44",
      enterExitDate: "1403/03/8",
      guestsDetails: "2 مهمان",
      reservationStatus: "تایید شده",
      usersProfile: "چارتر کننده",
      actions: "عملیات ها",
      cancelConditions: "غیر قابل استرداد",
    },
  ];

  const columns = [
    {
      title: t("hotelConfirmationCode"),
      dataIndex: "reservationNumber",
      key: "reservationNumber",
    },
    {
      title: t("hotelAndRoomName"),
      dataIndex: "hotelsName",
      key: "hotelsName",
    },
    {
      title: t("reservationDate"),
      dataIndex: "reservationDate",
      key: "reservationDate",
    },
    {
      title: `${t("enterDate")} ${t("endDate")}`,
      dataIndex: "enterExitDate",
      key: "enterExitDate",
    },
    {
      title: t("stayDuration"),
      dataIndex: "guestsDetails",
      key: "guestsDetails",
    },
    {
      title: t("extraditionStatus"),
      dataIndex: "cancelConditions",
      key: "cancelConditions",
    },
    {
      title: t("paymentStatus"),
      dataIndex: "reservationStatus",
      key: "reservationStatus",
      render: () => {
        return (
          <Tag color="green" className="rounded-full m-auto block ml-10 w-fit">
            تایید شده
          </Tag>
        );
      },
    },
    {
      title: t("userProfile"),
      dataIndex: "usersProfile",
      key: "usersProfile",
    },
    {
      title: t("action"),
      dataIndex: "actions",
      key: "actions",
      render: () => {
        return (
          <div className="flex flex-col">
            <a href="" className="underline text-orange-400">
              جزییات
            </a>
            <a className="underline text-green-400" href="">
              پرداخت
            </a>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      className="w-full mt-4 message-table log-table text-center"
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default TableLayout;
