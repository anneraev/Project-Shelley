import ICondition from "./ICondition";
import ICType from "./ICType";

/**
 * Represents data of a component object belonging to an entity that allows the entity to manage it.
 * @id Identification number
 * @type The component type.
 * @dormant Is the component's normal processing paused?
 * @dormantConditions Conditions upon which a component will become dormant and cease operating temporarily. If no conditions are met, it will not be dormant.
 * @dormantConditionSets Associated conditions that must all be true in order to trigger a component going dormant.
 * @props The properties and functions of the component accessible by the entity, passed to it when creating the entity.
 */

export default interface IComponent {
    id: string;
    type: ICType;
    dormant: boolean;
    dormantConditions: ICondition[];
    dormantConditionSets: string[][];
    props: {}
};