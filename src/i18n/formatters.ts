import type { FormattersInitializer } from 'typesafe-i18n'
import type { Formatters, Locales } from './i18n-types'

type BaseFormatters = {
  [key: string]: (value: any) => string
}

export const initFormatters: FormattersInitializer<Locales, Formatters & BaseFormatters> = (
  locale: Locales,
) => {
  const formatters: Formatters & BaseFormatters = {
    time: (date: Date) =>
      new Intl.DateTimeFormat(locale, {
        dateStyle: 'full',
        timeStyle: 'short',
      }).format(date),
    temperature: (value: number) =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        notation: 'standard',
      }).format(value),
  }

  return formatters
}