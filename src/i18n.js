import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import en from "./locales/en/translations.json";
import ptBr from "./locales/pt-BR/translations.json";

let resBundle = {
  "en": {
    translations: en
  },
  "en-US" : {
    translations : en
  },
  "en-GB" : {
    translations : en
  },
  "pt" : {
    translations : ptBr
  },
  "pt-BR": {
    translations: ptBr
  }
};

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: resBundle,
    fallbackLng: "pt-BR",
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    useLocalStorage: true,
    wait: true,
    initImmediate: true,
    react: {
      wait: true
    }
  });

export default i18n;
