import { Button, Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import espinas from "../assets/Rectangle 9.png";
import fourStar from "../assets/fourStar.png";

const Reservation = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  const dataSource = [
    {
      key: "1",
      room: "اتاق 304",
      bedType: "تهران، سعادت آباد، میدان بهرود، خیابان 33، هتل اسپیناس پالاس",
      meal: "021-12345678",
      guests: "758489",
    },
  ];

  const detailsColumn = [
    {
      title: t("city"),
      dataIndex: "room",
      key: "room",
    },
    {
      title: t("address"),
      dataIndex: "bedType",
      key: "bedType",
    },
    {
      title: t("phoneNumber"),
      dataIndex: "meal",
      key: "meal",
    },
    {
      title: "zip",
      dataIndex: "guests",
      key: "guests",
    },
  ];
  const cancelData = [
    {
      localeDate: "قبل از 1403/03/28 - 00:00:00",
      localeHotel: "قبل از 1403/03/28 - 01:00:00",
      remainingDays: "26 روز",
      pay: "قابل استرداد",
    },
  ];

  const stayColumn = [
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
      title: t("guests"),
      dataIndex: "guests",
      key: "guests",
    },
    {
      title: t("guest"),
      dataIndex: "guest",
      key: "guest",
    },
  ];
  const stayData = [
    {
      room: "اتاق 304",
      bedType: "2 تخت تک نفره",
      meal: "صبحانه",
      guests: "5",
      guest: "tets / test",
    },
  ];

  const cancelColumns = [
    {
      title: t("localeDate"),
      dataIndex: "localeDate",
      key: "localeDate",
    },
    {
      title: t("localeHotelDate"),
      dataIndex: "localeHotel",
      key: "localeHotel",
    },
    {
      title: t("remainingDays"),
      dataIndex: "remainingDays",
      key: "remainingDays",
    },
    {
      title: t("pay"),
      dataIndex: "pay",
      key: "pay",
    },
  ];

  const columns = [
    {
      title: "04/01 (شنبه)",
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
    },
    {
      title: "04/01 (شنبه)",
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
    },
    {
      title: "04/01 (شنبه)",
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
    },
    {
      title: "04/01 (شنبه)",
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
    },
    {
      title: "04/01 (شنبه)",
      dataIndex: "data1",
      key: "data1",
      colSpan: 1,
    },
  ];

  const data = [
    {
      key: "1",
      data1: "اتاق 304",
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
            {t("nav")} / {t("resevations")} / {t("reservationDetails")}
          </p>
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5">
          <div>
            <div className="bg-gray-50 dark:bg-gray-950 p-3 rounded-t-3xl flex justify-between">
              <p className="font-bold">2223345568</p>
              <Tag className="rounded-3xl bg-green-200 border-0 p-1 px-3">
                {t("confirmed")}{" "}
              </Tag>
            </div>
            <div></div>
            <div className="border rounded-b-2xl dark:border-gray-950 overflow-hidden ">
              <div className=" flex">
                <div>
                  <div className="flex w-[57rem]  ">
                    <div className="border-l dark:border-gray-950 border-b  p-4  basis-[25rem]">
                      <h2 className="text-gray-400">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950   border-b p-4 basis-[25rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950  border-b p-4 basis-[25rem] ">
                      <h2 className="text-gray-400">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                  </div>
                  <div className="flex w-[57rem]  ">
                    <div className="border-l dark:border-gray-950  p-4  basis-[25rem]">
                      <h2 className="text-gray-400">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950   p-4 basis-[25rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950  p-4 basis-[25rem] ">
                      <h2 className="text-gray-400">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                  </div>
                </div>
                <div className="m-auto">
                  <div className="mb-2">
                    <Button className="bg-amber-500 rounded-full h-[2.5rem] font-bold   border-0 w-full mr-2 ">
                      {t("recieveNewLetter")}
                    </Button>
                  </div>

                  <div>
                    <Button className="border-amber-500 border rounded-full h-[2.5rem]  text-amber-500  w-full mr-2 ">
                      {t("voucher")}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex  border-t w-[74.9rem] dark:border-gray-950  ">
                <div className="border-l dark:border-gray-950  p-4  basis-[26rem]">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
                <div className="border-l dark:border-gray-950   p-4 basis-[26rem]">
                  <h2 className="text-gray-400 ">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
                <div className="border-l dark:border-gray-950  p-4 basis-[26rem] ">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
                <div className="  p-4 basis-[24.5rem]  ">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
              </div>
              <div className="flex">
                <div className="border-l dark:border-gray-950 border-t  p-4 basis-[51rem]">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
                <div className=" p-4 border-t dark:border-gray-950 basis-[49.5rem]">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">{t("hotelDetails")}</h1>
            <div className="flex items-center rounded-full p-2 border border-orange-500 gap-2">
              <img src={espinas} alt="" />
              <p className="font-semibold">{t("espinsasHotel")}</p>
              <img src={fourStar} alt="" />
            </div>
          </div>
          <Table
            pagination={false}
            className="w-full mt-4 message-table "
            dataSource={dataSource}
            columns={detailsColumn}
          />
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">{t("stayDetails")}</h1>
          </div>
          <Table
            pagination={false}
            className="w-full mt-4 message-table "
            dataSource={stayData}
            columns={stayColumn}
          />
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl"> {t("priceNight")}</h1>
          </div>
          <Table
            className="mt-5  "
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
        <div className="bg-white space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">{t("cancelingConditions")}</h1>
          </div>
          <Table
            className="mt-5  "
            pagination={false}
            columns={cancelColumns}
            dataSource={cancelData}
          />
        </div>
        <div
          dir="ltr"
          className="bg-white mb-4 space-y-8 dark:bg-gray-900 mx-3 dark:text-white mt-3 rounded-3xl p-5"
        >
          <div>
            <Button className="bg-amber-500  text-white rounded-2xl border-0 px-11">
              {t("pay")}
            </Button>
            <Button className="  rounded-2xl ml-3 border text-gray-300 px-11">
              {t("cancel")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
