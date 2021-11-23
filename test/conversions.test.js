import { poundsToKilograms, feetsToCentimeters } from "../src/helpers/conversions.js";

describe('Conversion function from imperial units to metric units.', () => {
    test('Should return the value of one pound in kilograms.', ()=> {
        expect(poundsToKilograms(1)).toBe(0.45359237)
    })

    test('Should return the value of one feet in centimeters.', ()=> {
        expect(feetsToCentimeters(1)).toBe(30.48)
    })
});