import { useTranslation as uset } from "react-i18next";

const useTranslation = () => {
  const { t, i18n } = uset();
  const en = i18n.language === "en";
  return { t, en };
};

export default useTranslation;
