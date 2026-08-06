import { createContext, useContext, useState, useCallback } from 'react'

const ThemeContext = createContext(null)

// The site always starts in dark mode on a fresh load (per brand doc: dark is
// the primary identity). The toggle only affects the current session — it is
// deliberately not persisted, so a reload always returns to dark.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content',
        next === 'dark' ? '#0A0A0A' : '#F8F6F2',
      )
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
