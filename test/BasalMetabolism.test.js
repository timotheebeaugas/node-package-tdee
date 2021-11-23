import { Metabolism } from "../src/Metabolism.js";

describe('Expect object work fine with the Harris-Benedict method (1919).', () => {
    test('Should return the correct amount of calories for this person.', ()=> {
        const harris = new Metabolism('Harris–Benedict (1919)', 'Imperial', 'Light Exercise', {sex: "woman", age: 20, height: 5.4, weight: 170.6})
        expect(harris.BMR()).toStrictEqual(1616)
        expect(harris.TDEE()).toStrictEqual(2222)
    })

    test('Should return an error because the first argument does not exist.', ()=> {
        const harris = new Metabolism('foo', 'Imperial', 'Light Exercise', {sex: "woman", age: 20, height: 5.4, weight: 170.6})
        expect(() => { harris.BMR() }).toThrow(Error)
        expect(() => { harris.TDEE() }).toThrow(Error)
    });
});

describe('Expect object work fine with the Katch and McArdle method (2001).', () => {
    test('Should return the correct amount of calories for this person.', ()=> {
        const katch = new Metabolism('Katch and McArdle (2001)', 'Metric', 'Athlete', {bodyfat: 7, weight: 84})
        expect(katch.BMR()).toStrictEqual(2057)
        expect(katch.TDEE()).toStrictEqual(3908)
    })

    test('Should return an error because the first argument does not exist.', ()=> {
        const katch = new Metabolism('bar', 'Metric', 'Athlete', {bodyfat: 7, weight: 84})
        expect(() => { katch.BMR() }).toThrow(Error)
        expect(() => { katch.TDEE() }).toThrow(Error)
    })
});
