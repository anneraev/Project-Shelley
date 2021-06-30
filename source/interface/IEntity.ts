import IComponentData from './IComponentData';
import ICondition from './ICondition';

/**
 * An Entity tracked by the Entity Layer.
 */
export default interface IEntity {
    name: string;
    componentData: IComponentData[];
    conditions: ICondition[][];
    [property: string]: {};
}