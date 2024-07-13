import { Button, Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
import ExpandedSidebar from "../components/ExpandedSidebar";

const Account = () => {
  const { i18n, t } = useTranslation();
  const en = i18n.language == "en";

  const data = [
    { key: t("suename"), value: "fdsadfa22443" },
    { key: t("email"), value: "alireza@gmail.com" },
    { key: t("phoneNumber"), value: "0912999992" },
  ];

  const notificationTable = [{ key: t("confirmWay"), value: "ایمیل و پیامک" }];

  const customerDetails = [
    { key: t("customerNumber"), value: "fdsadfa22443" },
    { key: t("customerName"), value: "alireza@gmail.com" },
    { key: t("status"), label: "وضعیت", value: "فعال" },
    { key: t("phoneNumber"), value: "0912999992" },
    { key: t("address"), value: "تهران و تهران" },
    { key: t("balance"), value: "0 تومان" },
    { key: "اعتبار معوق ", value: "0 تومان" },
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
      render: (text: any, record: any) => {
        if (record.label === t("status")) {
          return <Tag color="green">{text}</Tag>;
        }
        return text;
      },
    },
  ];

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9 mx-3">
      <ExpandedSidebar active="management" />
      <div>
        <div className="flex dark:text-white gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="dark:fill-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 13.4924V11.2424"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-gray-400 font-yekan">
            {t("nav")} / {t("accountCenter")} / {t("management")}
          </p>
        </div>
        <div>
          <div className="bg-white mt-3 min-h-[40vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl">{t("userDetails")} </h1>
              <div className="font-yekan flex items-center gap-3">
                <Button className="border rounded-full  text-gray-400 font-yekan rounded-5 border-gray-400">
                  {t("edit")}
                </Button>
                <Button className="font-yekan rounded-full text-gray-400 border-gray-400">
                  {t("changePassword")}
                </Button>
              </div>
            </div>

            <div className="p-2 bg-amber-50 dark:bg-gray-900 rounded-full mt-3">
              <p className="text-sm  ">{t("userDetailsMessage")}</p>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              showHeader={false}
              className="mt-4 account-table w-[63.5rem]"
              rowKey={(record) => record.key}
            />
          </div>
          <div className="bg-white mt-3 min-h-[30vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl">{t("confirmWay")}</h1>
              <div className="font-yekan">
                <Button className="border ml-3 rounded-full  text-gray-400 font-yekan rounded-5 border-gray-400">
                  {t("edit")}
                </Button>
              </div>
            </div>

            <Table
              columns={columns}
              dataSource={notificationTable}
              pagination={false}
              showHeader={false}
              className="mt-4 account-table w-[63.5rem]"
              rowKey={(record) => record.key}
            />
          </div>
          <div className="bg-white mt-3 min-h-[60vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl"> {t("userDetails")} </h1>
              <div className="font-yekan"></div>
            </div>

            <Table
              columns={columns}
              dataSource={customerDetails}
              pagination={false}
              showHeader={false}
              className="mt-4 account-table w-[63.5rem]"
              rowKey={(record) => record.key}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
