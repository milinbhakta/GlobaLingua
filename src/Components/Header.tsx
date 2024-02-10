import { Toolbar, Typography, MenuItem, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { SetStateAction } from "react";
import { Locales } from "../i18n/i18n-types";
import { locales } from "../i18n/i18n-util";
import { loadLocaleAsync } from "../i18n/i18n-util.async";
import { useI18nContext } from "../i18n/i18n-react";
import { getLocalName } from "../utils/helper";

function Header() {
  const { locale, LL, setLocale } = useI18nContext();

  const handleLanguageChange = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const locale = event.target.value as Locales;
    localStorage.setItem("lang", locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {LL.APPNAME()}
        </Typography>
        <Select value={locale || ""} onChange={handleLanguageChange}>
          <MenuItem value="" disabled>
            {LL.CHOOSE_LOCALE()}
          </MenuItem>
          {locales.map((locale) => (
            <MenuItem key={locale} value={locale}>
              {locale} | {getLocalName(locale)}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
