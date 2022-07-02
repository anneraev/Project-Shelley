import Entity from "./entity";

/**
 * Represents an object that constitutes some function or concern of an Entity.
 * @param {P} props Properties that are updated from the object associated with this component.
 * @param {Entity} entity The entity associated with this component.
 */
export default class EntityComponent<P> {
    constructor (props: P, entity: Entity<unknown>) {
        this.props = props;
        this.entity = entity;
        this.type = Object.prototype.toString.call(props);
    }

    /**
     * The entity associated with the component.
     */
    private entity: Entity<unknown>;
    /**
     * Properties that are uptaed from the object associated with this component.
     */
    props: P;
    /**
     * The type of component, derrived from the prop type.
     */
    type: string;

    updateProp(key: string, value: string | number | [string, any]) {
        this.props[key] = value;
        this.entity.update(Object.entries(this.props));
    }
}