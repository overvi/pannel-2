import { Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import useTranslation from "../../hooks/useTranslation";

export const Accept = () => {
  const { t, en } = useTranslation();
  const guestsData = [
    {
      key: "1",
      guest: "1",
      gender: "مرد",
      name: "علی",
      lastName: "ممم",
      age: "بزرگسال",
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
      title: t("suename"),
      dataIndex: "name",
      key: "name",
    },

    {
      title: `${t("child")} / ${t("adult")}`,
      dataIndex: "age",
      key: "age",
    },
  ];

  const footerContent = () => (
    <div className="flex items-center gap-1">
      <p> {t("totalPrice")}</p>
      <p>:</p>
      <p>
        <span className="text-green-600 font-bold">137.81 USD</span>
      </p>
    </div>
  );

  return (
    <>
      <div className="!mt-14 ">
        <div className="space-y-10">
          <div>
            <div className="bg-gray-50 p-4 dark:bg-gray-950 rounded-t-2xl">
              <h1 className=" text-xl">{t("acceptUserDetails")}</h1>
            </div>
            <div className="flex border dark:border-gray-700 gap-4 rounded-b-[8px] p-4 h-full ">
              <div
                className={`basis-[30%] ${
                  en ? "border-r" : "border-l"
                }  dark:border-gray-700`}
              >
                <p className="text-gray-400">{t("suename")}</p>
                <p>علی مقیمی نژاد</p>
              </div>

              <div
                className={`basis-[20%] ${
                  en ? "border-r" : "border-l"
                }   dark:border-gray-700`}
              >
                <p className="text-gray-400">{t("phoneNumber")}</p>
                <p>09909024</p>
              </div>
              <div className="basis-[50%]">
                <p className="text-gray-400">{t("email")}</p>
                <p>ajking@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-2">{t("acceptGuestDetails")}</h1>
            <Table
              pagination={false}
              className="w-full guests-table "
              dataSource={guestsData}
              columns={guestsColumn}
              footer={footerContent}
              bordered
            />
          </div>
          <div>
            <label className="mb-2 block">{t("messageRequest")}</label>
            <TextArea
              className="rounded-[8px]"
              rows={4}
              placeholder={t("messageRequest")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
