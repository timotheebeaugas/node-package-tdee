/* Main methods for calculate basal metabolism. */

export const BASAL_METABOLISM_RATE_METHODS = {
    "Harris–Benedict (1919)" : {
        man: {
            weight: 13.76,
            height: 5.003,
            age: 6.755,
            additionalValue: 66.5
        },
        woman: {
            weight: 9.563,
            height: 1.850,
            age: 4.676,
            additionalValue: 665
        },
        equation(params){ return (params.weight * this[params.sex].weight) + (params.height * this[params.sex].height) - (this[params.sex].age * params.age) + this[params.sex].additionalValue }
    },
    "Roza and Shizgal (1984)" : {
        man: {
            weight: 13.707,
            height: 4.923,
            age: 6.673,
            additionalValue: 77.607
        },
        woman: {
            weight: 9.740,
            height: 1.729,
            age: 4.737,
            additionalValue: 667.051
        },
        equation(params){ return (params.weight * this[params.sex].weight) + (params.height * this[params.sex].height) - (this[params.sex].age * params.age) + this[params.sex].additionalValue }
    },
    "Mifflin and St Jeor (1990)" : {
        weight: 10,
        height: 6.25,
        age: 4.92,
        man: {
            additionalValue: 5
        },
        woman: {
            additionalValue: -161
        },
        equation(params){ return (params.weight * this.weight) + (params.height * this.height) - (this.age * params.age) + this[params.sex].additionalValue }
    },
    "Black and Al equation (1996)": {
        weight: 0.48,
        height: 0.50,
        age: -0.13,
        globalMultiplier: 100/4.1855,
        man: {
            multiplier: 1.083,
        },
        woman: {
            multiplier: 0.963,
        },
        equation(params){ return (this[params.sex].multiplier * Math.pow(params.weight, this.weight) * Math.pow(params.height, this.height) * Math.pow(params.age, this.age)) * (this.globalMultiplier)} 
    },
    "Katch and McArdle (2001)": {
        weight: 21.6,
        bodyFat: 100,
        divider: 100,
        additionalValue: 370,
        equation(params){ return this.additionalValue + (this.weight * (params.weight * (this.bodyFat - (params.bodyfat))) / this.divider) }
    },
}

/* Average physical activity per week. */

export const ENERGY_EXPENDITURE_MULTIPLIER = {
    "Sedentary":{
        description: "No exercise",
        value: 1.2
    },
    "Light Exercise":{
        description: "One to three days a week",
        value: 1.375
    },
    "Moderate Exercise":{
        description: "Three to five days a week",
        value: 1.55
    },
    "Heavy Exercise":{
        description: "Six or seven days a week",
        value: 1.725
    },
    "Athlete":{
        description: "Highly physical job or doing hard exercise seven days a week",
        value: 1.9
    }
}

/* Imperial and metric system. */

export const SYSTEM_OF_MEASUREMENT = ['Imperial', 'Metric']
export const FEETS_TO_CENTIMETERS = 30.48
export const POUNDS_TO_KILOGRAMS =  0.45359237