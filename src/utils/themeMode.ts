export type ThemeMode = 'white' | 'green'

const THEME_STORAGE_KEY = 'site-theme-mode'
const DEFAULT_THEME_MODE: ThemeMode = 'white'

const isValidMode = (value: string | null): value is ThemeMode => {
  return value === 'white' || value === 'green'
}

export const getStoredThemeMode = (): ThemeMode => {
  const storedMode = localStorage.getItem(THEME_STORAGE_KEY)

  if (isValidMode(storedMode)) {
    return storedMode
  }

  return DEFAULT_THEME_MODE
}

export const applyThemeMode = (mode: ThemeMode) => {
  document.documentElement.setAttribute('data-theme-mode', mode)
  document.body.setAttribute('data-theme-mode', mode)
  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

export const initThemeMode = () => {
  const initialMode = getStoredThemeMode()
  applyThemeMode(initialMode)
  return initialMode
}
