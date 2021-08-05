import IComponent from './IComponent';
import ICType from './ICType';
import IEType from './IEType';

/**
 * Represents a network of related components that form a single entity in the game world.
 * @id Unique ID number.
 * @e_name a name for the entity, usually derrived from the core component object.
 * @type a designated type for the entity.
 * @components data for each component, with a property for accessing that component.
 */
export default interface IEntity {
    id: string;
    e_name: string;
    e_type: IEType;
    components: IComponent[];
    getComponent(type: ICType): IComponent;
}