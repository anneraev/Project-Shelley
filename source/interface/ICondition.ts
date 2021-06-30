/**
 * Represents a condition used by IEntity and IComponentData to determine whether an action should be taken.
 * @id id string
 * @value the value to compare
 * @comparison a symobol that represents how the value should be compared to the condition.
 * @condition the condition to compare the value against.
 */

export default interface ICondition {
    id: string;
    value: string;
    comparison: string;
    condition: string;
}