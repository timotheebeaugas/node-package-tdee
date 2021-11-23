import { poundsToKilograms, feetsToCentimeters } from './helpers/conversions.js';
import { BASAL_METABOLISM_RATE_METHODS, SYSTEM_OF_MEASUREMENT, ENERGY_EXPENDITURE_MULTIPLIER } from './constants.js'

/** Class representing a energy expenditure. */

export class Metabolism {
    /**
     * Create an individual energy expenditure.
     * @param {string} method - Basal metabolism calculation method.
     * @param {string} system - System of units.
     * @param {string} expenditure - Weekly activity level.
     * @param {Object} params - Individual values needed for the equation.
     */
    constructor(method, system, expenditure, params){ 
        this.method = method,
        this.system = system,
        this.expenditure = expenditure
        this.params = params

            /**
             * System of units system verification. If the object values are imperial, the units are converted to metric values.
             * @param {Object} params - Object containing the imperial values.
             * @return {number} Imperial value convert to metric units.
             */
        
        if(this.system === SYSTEM_OF_MEASUREMENT[0]){ 
            if(this.params.weight){ 
                this.params.weight = poundsToKilograms(this.params.weight)    
            }
            if(this.params.height){ 
                this.params.height = feetsToCentimeters(this.params.height)    
            }
        }
    }

    /**
     * Calculation of Basal Metabolism Rate
     * @param {string} method - Basal metabolism calculation method.
     * @param {Object} params - Individual values needed for the equation.
     * @return {number} Number of calories required par day.
     */

    BMR(){
        try{
            return Math.round(BASAL_METABOLISM_RATE_METHODS[this.method].equation(this.params))
        } catch(err){
            throw new Error(err);
        }
    } 

    /**
     * Calculation of Total Daily Energy Expenditure.
     * @param {string} expenditure - Weekly activity level.
     * @return {number} Estimation of how many calories are burn per day when exercise is taken into account. 
     */

    TDEE(){
        try{
            return Math.round(this.BMR() * ENERGY_EXPENDITURE_MULTIPLIER[this.expenditure].value)
        } catch(err){
            throw new Error(err);
        }
    }
}



