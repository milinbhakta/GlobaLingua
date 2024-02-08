export const getLocalName = (locale: string) => {
  switch (locale) {
    case "en":
      return "English";
    case "fr":
      return "French";
    case "de":
      return "German";
    default:
      return "English";
  }
};
