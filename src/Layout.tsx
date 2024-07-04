import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { default as useAtheme } from "./theme/AntProvider";

import i18n from "i18next";
import { Suspense } from "react";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";

import enTranslation from "../public/locales/en/translation.json";
import irTranslation from "../public/locales/ir/translation.json";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ir: { translation: irTranslation },
    },
    lng: "ir", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

const Layout = () => {
  const { i18n } = useTranslation();
  const en = i18n.language == "en";
  const theme = useAtheme();
  return (
    <ConfigProvider locale={en ? en_US : fa_IR} theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="Loading...">
          <div>
            <Navbar />
            <Outlet />
          </div>
        </Suspense>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default Layout;
