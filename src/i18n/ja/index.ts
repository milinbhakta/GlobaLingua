import type { Translation } from "../i18n-types";

const ja: Translation = {
  CHOOSE_LOCALE: "言語を選択",
  APPNAME: "天気アプリ",
  TIME_LABEL: "時間: {time|time}",
  TEMPERATURE: "気温: {temperature|temperature}°C",
  HUMIDITY: "湿度: {humidity}%",
  APPARENT_TEMPERATURE: "という感じです。: {apparentTemperature|temperature}°C",
  WEATHER: "天気: ",
  WMOWeatherCodes: {
    0: "快晴",
    1: "晴れ",
    2: "曇り",
    3: "雲り",
    45: "霧",
    48: "霜",
    51: "霧雨: 弱い",
    53: "霧雨: 中程度",
    55: "霧雨: 強い",
    56: "凍雨: 弱い",
    57: "凍雨: 強い",
    61: "雨: 弱い",
    63: "雨: 中程度",
    65: "雨: 強い",
    66: "みぞれ: 弱い",
    67: "みぞれ: 強い",
    71: "雪: 弱い",
    73: "雪: 中程度",
    75: "雪: 強い",
    77: "あられ",
    80: "にわか雨: 弱い",
    81: "にわか雨: 中程度",
    82: "にわか雨: 強い",
    85: "にわか雪: 弱い",
    86: "にわか雪: 強い",
    95: "雷雨: 弱いまたは中程度",
    96: "雷雨と軽い雹",
    99: "雷雨と大きな雹",
  },
  SELECTLABEL:"都市を選択: ",
};

export default ja;
