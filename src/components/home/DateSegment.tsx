import { Segmented } from "antd";
import { useTranslation } from "react-i18next";

const DateSegment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Segmented
      dir="ltr"
      className="font-yekan seg rounded-full dark:bg-gray-900 dark:border dark:border-gray-700"
      options={[
        { label: t("monthly"), value: "List" },
        { label: t("weekly"), value: "Kanban" },
      ]}
    />
  );
};
export default DateSegment;
