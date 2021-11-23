# node-package-tdee

Simple node package to calculate Human Basal Metabolism Rate and Total Daily Energy Expenditure. Based on node `14.x`

Five calculation methods are available in the file `constants.js`. Metric and imperial units are accepted in arguments.

First of all the package converts the units to the metric system. He then checks the validity of the arguments and return the number of daily calories needed to maintain the metabolism of the indicated person.

## Examples
```js
import { Metabolism } from "./node_modules/tdee-calculator/src/index.js";

/** 
 * Estimated daily calorie requirement for an average 20 year old American woman weighing 170.6 pounds and measuring 5 feet, 4 inches. 
 * Estimate made with the 1919 Harris–Benedict method.
 */

let woman = new Metabolism('Harris–Benedict (1919)', 'Imperial', 'Light Exercise', {sex: "woman", age: 20, height: 5.4, weight: 170.6})
console.log(woman.BMR()) // Basal Metabolism Rate: 1616 calories per day
console.log(woman.TDEE()) // Total Daily Energy Expenditure: 2222 calories per day

/** 
 * Estimated daily calorie requirement for the football player Cristiano Ronaldo weighing 84 kilograms with only 7 percent body fat. 
 * Estimate made with the 2001 Katch and McArdle method.
 */

let CR7 = new Metabolism('Katch and McArdle (2001)', 'Metric', 'Athlete', {bodyfat: 7, weight: 84})
console.log(CR7.BMR()) // Basal Metabolism Rate: 2057 calories per day
console.log(CR7.TDEE()) // Total Daily Energy Expenditure: 3908 calories per day
```

## Development
```bash
$ git clone git@github.com:timotheebeaugas/node-package-tdee
$ cd node-package-tdee
$ npm i
```

### Test
```bash
$ npm test
```
