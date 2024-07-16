import { DatePicker, Select } from "antd";
import { JalaliLocaleListener } from "antd-jalali";
import DonutChart from "../components/datacenter/DountChart";
import ExpandedSidebar from "../components/ExpandedSidebar";
import AreaChart from "../components/home/AreaChart";
import useTranslation from "../hooks/useTranslation";

const { RangePicker } = DatePicker;
const { Option } = Select;

const DataCenter = () => {
  const { en, t } = useTranslation();

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9 mx-3">
      <ExpandedSidebar active="management" />
      <div className="w-full">
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
            {t("nav")} / {t("database")}
          </p>
        </div>
        <div>
          <div className="bg-white mt-3 w-full min-h-[20vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="flex gap-3 w-fit  items-center justify-between">
              <div>
                <label className="block" htmlFor="my-select">
                  {t("type")}
                </label>
                <Select
                  className="ant-select font-yekan placeholder:!font-yekan "
                  placeholder={t("all")}
                  style={{ width: 200 }}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="disabled" disabled>
                    3
                  </Option>
                </Select>
              </div>
              <div>
                <label className="block" htmlFor="my-select">
                  {t("type")}
                </label>
                <Select
                  className="ant-select font-yekan  placeholder:font-yekan "
                  placeholder={t("all")}
                  style={{ width: 200 }}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="disabled" disabled>
                    3
                  </Option>
                </Select>
              </div>
              <button className="p-2 pl-3  mt-6 flex items-center gap-2 text-white bg-green-600 rounded-full">
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
          </div>
          <div className="bg-white mt-3 min-h-[30vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="flex gap-5">
              <div>
                <div className="flex items-center justify-between ">
                  <div className="flex justify-between w-[33rem] items-center ">
                    <h1 className="font-bold text-xl text-nowrap">
                      {t("resevations")}
                    </h1>
                    <div dir="rtl">
                      <JalaliLocaleListener />

                      <RangePicker className="rounded-full w-fit font-yekan  py-[.4rem]  " />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-5 text-center">
                  <div className="border p-4 border-green-300 rounded-2xl">
                    <div className="size-8 bg-green-500 mb-2 rounded-xl p-3 w-32"></div>
                    <p className="font-bold text-xl">۱۰۲</p>
                    <p> {t("successfulReservations")}</p>
                  </div>
                  <div className="border p-4 border-red-300 rounded-2xl">
                    <div className="size-8 bg-red-500 mb-2 rounded-xl p-3 w-32"></div>

                    <p className="font-bold text-xl">۳۴</p>
                    <p>{t("canceledReservations")}</p>
                  </div>
                  <div className="p-4 border border-orange-300 rounded-2xl">
                    <div className="size-8 bg-orange-500 mb-2 rounded-xl p-3 w-32"></div>

                    <p className="font-bold text-xl">۳۴</p>
                    <p>{t("notPayed")} </p>
                  </div>
                </div>
              </div>
              <DonutChart />
            </div>
          </div>
          <div className="bg-white mt-3 min-h-[60vh] dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
            <div className="">
              <h1 className="font-bold text-xl">
                {" "}
                {t("successfulReservations")}{" "}
              </h1>
              <div className="font-yekan">
                <AreaChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
