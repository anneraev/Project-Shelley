
/**
 * Represents a condition that will affect the context of the entity.
 * @param {string | number} value The current value being compared against the set value.
 * @param {string | number} requirement The set value the current value is compared against.
 */
export class EntityCondition {
    constructor (valueFunction: () => string | number, requirement: string | number, operator: ">" | "<" | "=" | "!=" | ">=" | "<=" | "includes" | "!include" | "inclded_in" | "!included_in") {
        this.valueFunction = valueFunction;
        this.requirement = requirement;
        this.operator = operator;
    }
    /**
     * A function that returns a value (either a string or number).
     */
    valueFunction: () => string | number;
    /**
     * Indicates the operation to be performed in the evaluation.
     */
    operator: ">" | "<" | "=" | "!=" | ">=" | "<=" | "includes" | "!include" | "inclded_in" | "!included_in";
    /**
     * The set value the current value is compared against.
     */
    requirement: string | number;
}