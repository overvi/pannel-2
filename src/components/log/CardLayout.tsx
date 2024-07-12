import { Button, Tag } from "antd";
import { useTranslation } from "react-i18next";

const CardLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-3">
      <div className="bg-gray-50 dark:bg-gray-950 p-3 rounded-t-3xl flex justify-between">
        <div className="flex items-center gap-5">
          <p className="font-bold">2223345568</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-400">{t("connectionBase")}</p>
            <p>:</p>
            <p>Aj483</p>
          </div>
          <div className=" flex items-center gap-2">
            <p className="text-gray-400">{t("operator")}</p> <p>:</p>{" "}
            <p>Aj483</p>
          </div>
        </div>
        <Tag className="rounded-3xl bg-green-200 border-0 p-1 px-3">
          {t("confirmed")}{" "}
        </Tag>
      </div>
      <div></div>
      <div className="border rounded-b-2xl dark:border-gray-950 overflow-hidden ">
        <div className=" flex">
          <div>
            <div className="flex w-[57rem]  ">
              <div className="border-l  dark:border-gray-950 border-b  p-4  basis-[25rem]">
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
              <div className="flex">
                <div className="border-l h-[9rem] dark:border-gray-950  p-4  w-[19rem]">
                  <h2 className="text-gray-400">نوع اتاق</h2>
                  <p className="text-sm">Deluxe Room - Triple</p>
                </div>
                <div>
                  <div className="flex">
                    <div className="border-l dark:border-gray-950 border-b    p-4 w-[19rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950 border-b    p-4 w-[19rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="border-l dark:border-gray-950  p-4 w-[19rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                    <div className="border-l dark:border-gray-950   p-4 w-[19rem]">
                      <h2 className="text-gray-400 ">نوع اتاق</h2>
                      <p className="text-sm">Deluxe Room - Triple</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div className="mb-2">
              <Button className="bg-amber-500 rounded-full h-[2.5rem] font-bold   border-0 w-full mr-2 ">
                {t("details")}
              </Button>
            </div>

            <div>
              <Button className="border-amber-500 w-full px-24 border rounded-full h-[2.5rem]  text-amber-500   mr-2 ">
                {t("pay")}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="border-l dark:border-gray-950 border-t  p-4 basis-[71rem]">
            <div className="flex items-center gap-20">
              <p className="mt-2">
                <span className="text-gray-400"> {t("payingChannel")}</span>
              </p>
              <p className="mt-2">
                <span className="text-gray-400"> {t("balanceStatus")}</span>: ""{" "}
                : {t("notPayed")}
              </p>
            </div>
          </div>
          <div className=" p-4 border-t dark:border-gray-950 basis-[22rem]">
            <p className="mt-2">
              <span className="text-gray-400">{t("totalPrice")}</span> 128.4 USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
