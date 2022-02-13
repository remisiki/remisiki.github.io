import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './translation'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,　// ../constants/translationsを設定する

        // lng: 'ja',
        fallbackLng: 'en',
        debug: true,

        keySeparator: false,

        interpolation: {
            escapeValue: false
        },
    });

export default i18n;