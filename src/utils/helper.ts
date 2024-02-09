export const getLocalName = (locale: string) => {
  switch (locale) {
    case "en":
      return "English";
    case "fr":
      return "French";
    case "de":
      return "German";
    case "it":
      return "Italian";
    case "hi":
      return "Hindi";
    case "ja":
      return "Japanese";
    default:
      return "English";
  }
};
