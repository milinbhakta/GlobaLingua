import type { FormattersInitializer } from "typesafe-i18n";
import type { Locales, Formatters } from "./i18n-types";

export const initFormatters: FormattersInitializer<Locales, Formatters> = (
  locale: Locales
) => {
  const formatters: Formatters = {
    time: (date: Date) =>
      new Intl.DateTimeFormat(locale, {
        dateStyle: "full",
        timeStyle: "short",
      }).format(date),
    temperature: (value: number) =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        notation: "standard",
      }).format(value),
  };

  return formatters;
};
