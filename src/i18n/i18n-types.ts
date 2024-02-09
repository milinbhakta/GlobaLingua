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
}

export type Formatters = {
	temperature: (value: Float32Array) => unknown
	time: (value: Date) => unknown
}
