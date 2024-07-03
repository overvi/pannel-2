import { DatePicker, Segmented, Select } from "antd";
import React from "react";

import ReactApexChart from "react-apexcharts";
import empty from "../assets/empty-wallet.svg";
import hotel from "../assets/hotel.png";
import logo from "../assets/logo-l.png";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const { Option } = Select;

const Home = () => {
  return (
    <>
      <Navbar />

      <div dir="rtl" className="flex gap-9">
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

            <p>پیشخان</p>
          </div>
          <div className="grid grid-cols-3 ml-9 mt-4 gap-9">
            <div className=" col-span-2">
              <div className="bg-white dark:bg-gray-900  dark:text-white dark:border-gray-500 rounded-3xl p-5">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-xl">انتخاب هتل</h1>
                  <div className="*:dark:text-white">
                    <div className="flex items-center gap-1">
                      <img src={empty} alt="" />
                      <p className="text-xs ">اعتبار فعلی</p>
                    </div>
                    <div className="font-semibold  text-xl dark:text-white">
                      USD <span className="text-orange-400">1200.3</span>
                    </div>
                  </div>
                </div>
                <form className="space-y-5">
                  <div className="w-full mt-3  ">
                    <label className="block mb-2" htmlFor="">
                      نام شهر یا هتل
                    </label>
                    <input
                      className="border dark:bg-gray-800 dark:border-gray-800 w-full outline-none pr-3 border-solid py-1 border-gray-200 rounded-full"
                      type="text"
                      placeholder="نام شهر یا هتل را وارد کنید..."
                    />
                  </div>
                  <div>
                    <DatePickers />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <div>
                        <label className="block" htmlFor="my-select">
                          بزرگسال
                        </label>
                        <Select
                          defaultValue="1"
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
                        <label htmlFor="my-select" className="block ">
                          کودک
                        </label>
                        <Select
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
                        <button className="bg-orange-400 gap-3 flex p-2 px-3 rounded-full text-white">
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
                          <p>سن</p>
                        </button>
                      </div>
                    </div>
                    <button className="p-2 pl-5 mt-6 flex items-center gap-2 text-white bg-green-600 rounded-full">
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
                      <p>جستجو</p>
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-white dark:bg-gray-900 dark:text-white mt-3 rounded-3xl p-5">
                <div className="bg-white dark:bg-gray-900 dark:text-white mt-3  flex justify-between items-center">
                  <h1 className="font-bold text-xl">تعداد رزرو موفق</h1>
                  <Demo />
                </div>
                <AreaChart />
              </div>
            </div>
            <div>
              <div className="rounded-2xl rounded-b-none p-14 bg-gradient-to-r from-[#f9b233]/25 to-[#FEB534] ">
                <img src={hotel} alt="" />
              </div>
              <div className="bg-white dark:bg-gray-900 dark:text-white  before:left-[4.2rem] before:-top-[2.3rem] before:rounded-full before:content-[' '] before:h-[5rem] before:w-[4rem] before:block before:absolute before:bg-white dark:before:bg-gray-800 relative p-6 rounded-b-2xl">
                <div className="absolute -top-10 left-10 mt-2 rounded-full ">
                  <img width="116" src={logo} alt="" />
                </div>
                <p className="mt-10">
                  "همکاری با ما،
                  <br /> تضمین بهترین اقامت برای مشتریان شما"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const DatePickers = () => {
  return (
    <div className="mt-3 flex items-center  gap-3 justify-between">
      <div className="basis-full">
        <h2 className="mb-2">تاریخ ورود</h2>
        <DatePicker
          className="rounded-full dark:text-white dark:bg-gray-800 dark:border-gray-800 datepicker w-full py-[.4rem]"
          placeholder="تاریخ ورود"
        />
      </div>
      <div className="basis-full">
        <h2 className="mb-2">تاریخ ورود</h2>
        <DatePicker
          className="rounded-full dark:text-white
            dark:bg-gray-800 dark:border-gray-800  datepicker w-full py-[.4rem]  "
          placeholder="تاریخ خروج"
        />
      </div>
    </div>
  );
};

const Demo: React.FC = () => (
  <Segmented
    dir="ltr"
    className="font-yekan seg rounded-full dark:bg-gray-900 dark:border dark:border-gray-700"
    options={[
      { label: "ماهیانه", value: "List" },
      { label: "هفتگی", value: "Kanban" },
    ]}
  />
);

interface AreaChartProps {}

interface AreaChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexCharts.ApexOptions;
}

class AreaChart extends React.Component<AreaChartProps, AreaChartState> {
  constructor(props: AreaChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          height: 350,
          width: 900,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FFA500"], // Set the color to orange
        grid: {
          show: false,
        },

        fill: {
          opacity: 0.1, // Adjust the opacity as needed
          type: "solid", // Ensure the fill type is solid
          gradient: {
            opacityFrom: 0.2,
            opacityTo: 0.1,
            stops: [0, 100],
          },
        },
        yaxis: {
          labels: {
            show: false, // Hide Y-axis labels
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-20T01:30:00.000Z",
            "2022-09-21T02:30:00.000Z",
            "2022-09-22T03:30:00.000Z",
            "2022-09-23T04:30:00.000Z",
            "2022-09-24T05:30:00.000Z",
            "2022-09-25T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}
