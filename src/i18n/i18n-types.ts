// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

import type { Float32Array } from './custom-types'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'fr'
	| 'hi'
	| 'it'
	| 'ja'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * C​h​o​o​s​e​ ​L​o​c​a​l​e
	 */
	CHOOSE_LOCALE: string
	/**
	 * W​e​a​t​h​e​r​ ​A​p​p
	 */
	APPNAME: string
	/**
	 * W​e​a​t​h​e​r​ ​F​o​r​e​c​a​s​t​ ​f​o​r​ ​C​h​a​r​l​o​t​t​e​t​o​w​n​,​ ​P​E​I​,​ ​C​a​n​a​d​a
	 */
	WEATHER_FORECAST: string
	/**
	 * T​i​m​e​:​ ​{​t​i​m​e​|​t​i​m​e​}
	 * @param {Date} time
	 */
	TIME_LABEL: RequiredParams<'time|time'>
	/**
	 * T​e​m​p​e​r​a​t​u​r​e​:​ ​{​t​e​m​p​e​r​a​t​u​r​e​|​t​e​m​p​e​r​a​t​u​r​e​}​°​C
	 * @param {Float32Array} temperature
	 */
	TEMPERATURE: RequiredParams<'temperature|temperature'>
	/**
	 * H​u​m​i​d​i​t​y​:​ ​{​h​u​m​i​d​i​t​y​}​%
	 * @param {Float32Array} humidity
	 */
	HUMIDITY: RequiredParams<'humidity'>
	/**
	 * A​p​p​a​r​e​n​t​ ​T​e​m​p​e​r​a​t​u​r​e​:​ ​{​a​p​p​a​r​e​n​t​T​e​m​p​e​r​a​t​u​r​e​|​t​e​m​p​e​r​a​t​u​r​e​}​°​C
	 * @param {Float32Array} apparentTemperature
	 */
	APPARENT_TEMPERATURE: RequiredParams<'apparentTemperature|temperature'>
	WMOWeatherCodes: {
		/**
		 * C​l​e​a​r​ ​s​k​y
		 */
		'0': string
		/**
		 * M​a​i​n​l​y​ ​c​l​e​a​r
		 */
		'1': string
		/**
		 * P​a​r​t​l​y​ ​c​l​o​u​d​y
		 */
		'2': string
		/**
		 * O​v​e​r​c​a​s​t
		 */
		'3': string
		/**
		 * F​o​g
		 */
		'45': string
		/**
		 * D​e​p​o​s​i​t​i​n​g​ ​r​i​m​e​ ​f​o​g
		 */
		'48': string
		/**
		 * D​r​i​z​z​l​e​:​ ​L​i​g​h​t
		 */
		'51': string
		/**
		 * D​r​i​z​z​l​e​:​ ​M​o​d​e​r​a​t​e
		 */
		'53': string
		/**
		 * D​r​i​z​z​l​e​:​ ​D​e​n​s​e
		 */
		'55': string
		/**
		 * F​r​e​e​z​i​n​g​ ​D​r​i​z​z​l​e​:​ ​L​i​g​h​t
		 */
		'56': string
		/**
		 * F​r​e​e​z​i​n​g​ ​D​r​i​z​z​l​e​:​ ​D​e​n​s​e
		 */
		'57': string
		/**
		 * R​a​i​n​:​ ​S​l​i​g​h​t
		 */
		'61': string
		/**
		 * R​a​i​n​:​ ​M​o​d​e​r​a​t​e
		 */
		'63': string
		/**
		 * R​a​i​n​:​ ​H​e​a​v​y
		 */
		'65': string
		/**
		 * F​r​e​e​z​i​n​g​ ​R​a​i​n​:​ ​L​i​g​h​t
		 */
		'66': string
		/**
		 * F​r​e​e​z​i​n​g​ ​R​a​i​n​:​ ​H​e​a​v​y
		 */
		'67': string
		/**
		 * S​n​o​w​ ​f​a​l​l​:​ ​S​l​i​g​h​t
		 */
		'71': string
		/**
		 * S​n​o​w​ ​f​a​l​l​:​ ​M​o​d​e​r​a​t​e
		 */
		'73': string
		/**
		 * S​n​o​w​ ​f​a​l​l​:​ ​H​e​a​v​y
		 */
		'75': string
		/**
		 * S​n​o​w​ ​g​r​a​i​n​s
		 */
		'77': string
		/**
		 * R​a​i​n​ ​s​h​o​w​e​r​s​:​ ​S​l​i​g​h​t
		 */
		'80': string
		/**
		 * R​a​i​n​ ​s​h​o​w​e​r​s​:​ ​M​o​d​e​r​a​t​e
		 */
		'81': string
		/**
		 * R​a​i​n​ ​s​h​o​w​e​r​s​:​ ​V​i​o​l​e​n​t
		 */
		'82': string
		/**
		 * S​n​o​w​ ​s​h​o​w​e​r​s​:​ ​S​l​i​g​h​t
		 */
		'85': string
		/**
		 * S​n​o​w​ ​s​h​o​w​e​r​s​:​ ​H​e​a​v​y
		 */
		'86': string
		/**
		 * T​h​u​n​d​e​r​s​t​o​r​m​:​ ​S​l​i​g​h​t​ ​o​r​ ​m​o​d​e​r​a​t​e
		 */
		'95': string
		/**
		 * T​h​u​n​d​e​r​s​t​o​r​m​ ​w​i​t​h​ ​s​l​i​g​h​t​ ​h​a​i​l
		 */
		'96': string
		/**
		 * T​h​u​n​d​e​r​s​t​o​r​m​ ​w​i​t​h​ ​h​e​a​v​y​ ​h​a​i​l
		 */
		'99': string
	}
}

export type TranslationFunctions = {
	/**
	 * Choose Locale
	 */
	CHOOSE_LOCALE: () => LocalizedString
	/**
	 * Weather App
	 */
	APPNAME: () => LocalizedString
	/**
	 * Weather Forecast for Charlottetown, PEI, Canada
	 */
	WEATHER_FORECAST: () => LocalizedString
	/**
	 * Time: {time|time}
	 */
	TIME_LABEL: (arg: { time: Date }) => LocalizedString
	/**
	 * Temperature: {temperature|temperature}°C
	 */
	TEMPERATURE: (arg: { temperature: Float32Array }) => LocalizedString
	/**
	 * Humidity: {humidity}%
	 */
	HUMIDITY: (arg: { humidity: Float32Array }) => LocalizedString
	/**
	 * Apparent Temperature: {apparentTemperature|temperature}°C
	 */
	APPARENT_TEMPERATURE: (arg: { apparentTemperature: Float32Array }) => LocalizedString
	WMOWeatherCodes: {
		/**
		 * Clear sky
		 */
		'0': () => LocalizedString
		/**
		 * Mainly clear
		 */
		'1': () => LocalizedString
		/**
		 * Partly cloudy
		 */
		'2': () => LocalizedString
		/**
		 * Overcast
		 */
		'3': () => LocalizedString
		/**
		 * Fog
		 */
		'45': () => LocalizedString
		/**
		 * Depositing rime fog
		 */
		'48': () => LocalizedString
		/**
		 * Drizzle: Light
		 */
		'51': () => LocalizedString
		/**
		 * Drizzle: Moderate
		 */
		'53': () => LocalizedString
		/**
		 * Drizzle: Dense
		 */
		'55': () => LocalizedString
		/**
		 * Freezing Drizzle: Light
		 */
		'56': () => LocalizedString
		/**
		 * Freezing Drizzle: Dense
		 */
		'57': () => LocalizedString
		/**
		 * Rain: Slight
		 */
		'61': () => LocalizedString
		/**
		 * Rain: Moderate
		 */
		'63': () => LocalizedString
		/**
		 * Rain: Heavy
		 */
		'65': () => LocalizedString
		/**
		 * Freezing Rain: Light
		 */
		'66': () => LocalizedString
		/**
		 * Freezing Rain: Heavy
		 */
		'67': () => LocalizedString
		/**
		 * Snow fall: Slight
		 */
		'71': () => LocalizedString
		/**
		 * Snow fall: Moderate
		 */
		'73': () => LocalizedString
		/**
		 * Snow fall: Heavy
		 */
		'75': () => LocalizedString
		/**
		 * Snow grains
		 */
		'77': () => LocalizedString
		/**
		 * Rain showers: Slight
		 */
		'80': () => LocalizedString
		/**
		 * Rain showers: Moderate
		 */
		'81': () => LocalizedString
		/**
		 * Rain showers: Violent
		 */
		'82': () => LocalizedString
		/**
		 * Snow showers: Slight
		 */
		'85': () => LocalizedString
		/**
		 * Snow showers: Heavy
		 */
		'86': () => LocalizedString
		/**
		 * Thunderstorm: Slight or moderate
		 */
		'95': () => LocalizedString
		/**
		 * Thunderstorm with slight hail
		 */
		'96': () => LocalizedString
		/**
		 * Thunderstorm with heavy hail
		 */
		'99': () => LocalizedString
	}
}

export type Formatters = {
	temperature: (value: Float32Array) => unknown
	time: (value: Date) => unknown
}
