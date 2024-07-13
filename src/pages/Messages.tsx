import { Button, Radio, Select, Table } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandedSidebar from "../components/ExpandedSidebar";

const { Option } = Select;

const Messages = () => {
  const { i18n, t } = useTranslation();
  const en = i18n.language == "en";

  const [selectedRowKey, setSelectedRowKey] = useState(null);

  const onChange = (_e: any, record: any) => {
    setSelectedRowKey(record.key);
  };

  const dataSource = [
    {
      key: "1",
      name: "تایید هتل در تاریخ",
      date: "1403/5/4",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "idsosopshkll;sppshh-2234",
      date: "1403/5/4",
    },
    {
      key: "3",
      name: "test testt testttt tesssst tesssssssttttt",
      date: "1403/5/4",
    },
  ];

  const columns = [
    {
      title: t("notification"),
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <div>
          <Radio
            className="radio"
            checked={selectedRowKey === record.key}
            onChange={(e) => onChange(e, record)}
          />
          {text}
        </div>
      ),
    },
    {
      title: t("date"),
      dataIndex: "date",
      key: "date",
    },
  ];

  const footerContent = () => (
    <div>
      <div>
        <div className="font-yekan flex items-center gap-3">
          <Radio className="radio" />
          <p>{t("selectMessages")}</p>
          <div>
            <Button className="rounded-full font-yekan" danger>
              {t("remove")}
            </Button>
            <Button
              className="mx-3  rounded-full !border-orange-400  font-yekan"
              danger
            >
              {t("read")}
            </Button>
            <Button
              className="rounded-full !border-orange-400  font-yekan "
              danger
            >
              {t("unread")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9 mx-3">
      <ExpandedSidebar active="notifications" />
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
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 13.4924V11.2424"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>
            {t("nav")} / {t("messages")}
          </p>
        </div>
        <div className="bg-white mt-3 min-h-[80vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
          <h1 className="font-bold text-xl">{t("type")}</h1>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <Select
                placeholder={t("all")}
                className="ant-select h-[2.2rem] focus:ring-orange-500 font-yekan"
                style={{ width: 200 }}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="disabled" disabled>
                  3
                </Option>
              </Select>
            </div>
            <button className="p-[.5rem]   flex items-center gap-2 text-white bg-green-600 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M11.0095 20.02C15.9856 20.02 20.0195 15.9861 20.0195 11.01C20.0195 6.03391 15.9856 2 11.0095 2C6.03343 2 1.99951 6.03391 1.99951 11.01C1.99951 15.9861 6.03343 20.02 11.0095 20.02Z"
                  fill="white"
                />
                <path
                  d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                  fill="white"
                />
              </svg>
              <p>{t("search")}</p>
            </button>
          </div>
          <Table
            pagination={false}
            className="w-[65rem] mt-4 message-table "
            dataSource={dataSource}
            columns={columns}
            footer={footerContent}
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
