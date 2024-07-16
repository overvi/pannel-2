import { DatePicker } from "antd";
import { JalaliLocaleListener } from "antd-jalali";
import { useTranslation } from "react-i18next";

const DatePickers = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3 flex items-center  gap-3 justify-between">
      <div className="basis-full">
        <label htmlFor="enterDate" className="mb-2 block">
          {t("enterDate")}
        </label>
        <JalaliLocaleListener />

        <DatePicker
          id="enterDate"
          className="rounded-full font-yekan w-full py-[.4rem]  "
          placeholder={t("enterDate")}
        />
      </div>
      <div className="basis-full">
        <label htmlFor="endDate" className="mb-2 block">
          {t("endDate")}
        </label>
        <DatePicker
          id="endDate"
          className="rounded-full font-yekan w-full py-[.4rem]  "
          placeholder={t("endDate")}
        />
      </div>
    </div>
  );
};

export default DatePickers;
