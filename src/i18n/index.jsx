import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import translationsInEng from '../locales/en/translation.json'
import translationsInGerman from '../locales/de/translation.json'
import translationsInItalian from '../locales/it/translation.json'
import translationsInArabic from '../locales/ar/translation.json'
import translationsInSpanish from '../locales/es/translation.json'
import translationsInFrench from '../locales/fr/translation.json'
import translationsInPort from '../locales/pt/translation.json'
import translationsInChinese from '../locales/zh/translation.json'

const resources = {
    en: {
        translation: translationsInEng
    },
    de: {
        translation: translationsInGerman
    },
    it: {
        translation: translationsInItalian
    },
    ar: {
        translation: translationsInArabic
    },
    es: {
        translation: translationsInSpanish
    },
    fr: {
        translation: translationsInFrench
    },
    pt: {
        translation: translationsInPort
    },
    zh: {
        translation: translationsInChinese
    },
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        ns: "translation",
        defaultNS: "translation"
    });

export default i18next;