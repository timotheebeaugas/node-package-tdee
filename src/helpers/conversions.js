import { FEETS_TO_CENTIMETERS, POUNDS_TO_KILOGRAMS } from '../constants.js'

/**
 * Returns feets converted to centimeters.
 *
 * @param {number} height height in feet.
 * @return {number} height in centimeters.
 */

export const feetsToCentimeters = height => height*FEETS_TO_CENTIMETERS

/**
 * Returns pounds converted to kilograms.
 *
 * @param {number} weight weight in pounds.
 * @return {number} weight in kilograms.
 */

export const poundsToKilograms = weight => weight*POUNDS_TO_KILOGRAMS

