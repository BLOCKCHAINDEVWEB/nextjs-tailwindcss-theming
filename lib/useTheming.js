import { useState, useEffect } from 'react'

export const useTheming = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const themeValue = window.localStorage.getItem(key)

    if (themeValue !== null) {
      setValue(JSON.parse(themeValue))
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue]
}