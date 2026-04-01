import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import de from '../locales/de.json'

const getRuntimeLocale = () => {

  const savedLocale = localStorage.getItem('user-locale')
  if (savedLocale) return savedLocale

  
  const browserLocale = navigator.language?.split('-')[0]
  const supportedLocales = ['en', 'ru', 'de']
  
  if (browserLocale && supportedLocales.includes(browserLocale)) {
    return browserLocale
  }


  return 'ru'
}

const i18n = createI18n({
  legacy: false, 
  locale: getRuntimeLocale(), 
  fallbackLocale: 'en', 
  globalInjection: true, 
  messages: {
    en,
    ru,
    de
  }
})

export default i18n
