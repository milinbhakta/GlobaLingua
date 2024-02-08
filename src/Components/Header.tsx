import {
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { SetStateAction } from "react";
import { Locales } from "../i18n/i18n-types";
import { locales } from "../i18n/i18n-util";
import { loadLocaleAsync } from "../i18n/i18n-util.async";
import { useI18nContext } from "../i18n/i18n-react";

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
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Weather App
        </Typography>
        <Select value={locale || ""} onChange={handleLanguageChange}>
          <MenuItem value="" disabled>
            {LL.CHOOSE_LOCALE()}
          </MenuItem>
          {locales.map((locale) => (
            <MenuItem key={locale} value={locale}>
              {locale}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
