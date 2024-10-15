import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pt from "./pt.json";
import esp from "./esp.json";
import fran from "./fran.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "pt",
  resources: {
    en: en,
    pt: pt,
    esp: esp,
    fran: fran,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
