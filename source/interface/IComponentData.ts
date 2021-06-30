/**
 * Represents data of a component object belonging to an entity that allows the entity to manage it.
 */

import ICondition from "./ICondition";

export default interface IComponentData {
    type: string;
    enabled: boolean;
    disableConditions: ICondition[];
    enableConditions: ICondition[];
    enableConditionSets: string[][];
    disableConditionSets: string[][];
    isCore: boolean;
};