// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * c​h​o​o​s​e​ ​l​o​c​a​l​e​.​.​.
	 */
	CHOOSE_LOCALE: string
	/**
	 * H​e​l​l​o​ ​{​n​a​m​e​}​!
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
	/**
	 * E​d​i​t​ ​<​c​o​d​e​>​s​r​c​/​A​p​p​.​t​s​x​<​/​c​o​d​e​>​ ​a​n​d​ ​s​a​v​e​ ​t​o​ ​r​e​l​o​a​d​.
	 */
	EDIT_AND_SAVE: string
	/**
	 * L​e​a​r​n​ ​R​e​a​c​t
	 */
	LEARN_REACT: string
	/**
	 * Y​o​u​r​ ​n​a​m​e​:
	 */
	YOUR_NAME: string
	/**
	 * S​e​l​e​c​t​e​d​ ​l​o​c​a​l​e​:
	 */
	SELECTED_LOCALE: string
	/**
	 * T​o​d​a​y​ ​i​s​ ​{​d​a​t​e​|​w​e​e​k​d​a​y​}
	 * @param {Date} date
	 */
	TODAY: RequiredParams<'date|weekday'>
}

export type TranslationFunctions = {
	/**
	 * choose locale...
	 */
	CHOOSE_LOCALE: () => LocalizedString
	/**
	 * Hello {name}!
	 */
	HI: (arg: { name: string }) => LocalizedString
	/**
	 * Edit <code>src/App.tsx</code> and save to reload.
	 */
	EDIT_AND_SAVE: () => LocalizedString
	/**
	 * Learn React
	 */
	LEARN_REACT: () => LocalizedString
	/**
	 * Your name:
	 */
	YOUR_NAME: () => LocalizedString
	/**
	 * Selected locale:
	 */
	SELECTED_LOCALE: () => LocalizedString
	/**
	 * Today is {date|weekday}
	 */
	TODAY: (arg: { date: Date }) => LocalizedString
}

export type Formatters = {
	weekday: (value: Date) => unknown
}
