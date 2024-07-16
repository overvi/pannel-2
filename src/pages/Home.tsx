import { Input, Select } from "antd";
import empty from "../assets/empty-wallet.svg";
import hotel from "../assets/hotel.png";
import logo from "../assets/logo-l.png";
import Sidebar from "../components/Sidebar";
import AreaChart from "../components/home/AreaChart";
import ChildsModal from "../components/home/ChildsModal";
import DatePickers from "../components/home/DatePicker";
import DateSegment from "../components/home/DateSegment";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const HomeEn = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  return (
    <div dir={en ? "ltr" : "rtl"} className="flex gap-9">
      <Sidebar />
      <div className="h-fit">
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

          <p>{t("nav")}</p>
        </div>
        <div className={`grid grid-cols-3 ${en ? "me-9" : "ml-9"} mt-4 gap-9`}>
          <div className=" col-span-2">
            <div className="bg-white dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl"> {t("hotelSelect")}</h1>
                <div className="*:dark:text-white">
                  <div className="flex items-center gap-1">
                    <img src={empty} alt="" />
                    <p className="text-xs ">{t("amount")}</p>
                  </div>
                  <div className="font-semibold  text-xl dark:text-white">
                    USD <span className="text-orange-400">1200.3</span>
                  </div>
                </div>
              </div>
              <form className="space-y-5">
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
                <div>
                  <DatePickers />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <div>
                      <label className="block" htmlFor="adult">
                        {t("adult")}
                      </label>
                      <Select
                        defaultValue="1"
                        id="adult"
                        className="ant-select "
                        style={{ width: 70 }}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="disabled" disabled>
                          3
                        </Option>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="child" className="block">
                        {t("child")}
                      </label>
                      <Select
                        id="child"
                        className="ant-select"
                        defaultValue="2"
                        style={{ width: 70 }}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="disabled" disabled>
                          3
                        </Option>
                      </Select>
                    </div>
                    <div className="mt-6">
                      <ChildsModal />
                    </div>
                  </div>
                  <button className="p-2  mt-6 flex items-center gap-2 text-white bg-green-600 rounded-full">
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
              </form>
            </div>
            <div className="bg-white dark:bg-gray-900 dark:text-white mt-3 rounded-3xl p-5">
              <div className="bg-white dark:bg-gray-900 dark:text-white mt-3  flex justify-between items-center">
                <h1 className="font-bold text-xl">
                  {t("successfulReservations")}
                </h1>
                <DateSegment />
              </div>
              <AreaChart />
            </div>
          </div>
          <div>
            <div className="rounded-2xl rounded-b-none p-14 bg-gradient-to-r from-[#f9b233]/25 to-[#FEB534] ">
              <img src={hotel} alt="" />
            </div>
            <div className="bg-white dark:bg-gray-900 dark:text-white  before:left-[4.2rem] before:-top-[2.3rem] before:rounded-full before:content-[' '] before:h-[5rem] before:w-[4rem] before:block before:absolute before:bg-white dark:before:bg-gray-900 relative p-6 rounded-b-2xl">
              <div className="absolute -top-10 left-10 mt-2 rounded-full ">
                <img width="116" src={logo} alt="" />
              </div>
              <p className="mt-10">
                {t("cta")}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEn;
