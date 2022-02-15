import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messages } from './Languages'

i18n.use(LanguageDetector)
    .init({
        debug: false,
        deafultNS: ['translations'],
        fallbackLng: 'en',
        ns: ['translations'],
        resources: messages
    })
export { i18n }