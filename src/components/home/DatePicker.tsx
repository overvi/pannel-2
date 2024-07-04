import { DatePicker } from "antd";
import { JalaliLocaleListener } from "antd-jalali";
import { useTranslation } from "react-i18next";

const DatePickers = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3 flex items-center  gap-3 justify-between">
      <div className="basis-full">
        <h2 className="mb-2">{t("enterDate")}</h2>
        <JalaliLocaleListener />

        <DatePicker
          className="rounded-full font-yekan w-full py-[.4rem]  "
          placeholder={t("enterDate")}
        />
      </div>
      <div className="basis-full">
        <h2 className="mb-2"> {t("endDate")}</h2>
        <DatePicker
          className="rounded-full font-yekan w-full py-[.4rem]  "
          placeholder={t("endDate")}
        />
      </div>
    </div>
  );
};

export default DatePickers;
