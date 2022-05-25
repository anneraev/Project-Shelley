import Component from "./component";
import Condition from "./condition";

/**
 * Represents a collection of properties and conditions derrived from component objects to conceptualize a single ingame entity and
 * its children.
 * @param {P} props The object which contains the properties derrived from component objects.
 */
export default class Entity<P> {
 constructor (props: P, permittedComponentTypes: string[]) {
    this.props = props
    this.type = typeof props
    this.permittedComponentTypes = permittedComponentTypes;
 }

 components: Component<P, unknown>[];
 permittedComponentTypes: string[]
 /**
  * The properties of the entity, which all connected objects can access through the global getProps function.
  */
 props: P;
 /**
  * factors that can be used to determine the context.
  */
 conditions: Condition[]
 /**
  * Represents the type of entity, determined by the name of the Props object.
  */
 type: string;
 /**
  * The entity's current parent entity.
  */
 parent: Entity<unknown>
 /**
  * The entity types allowed to exist as this entity's parent.
  */
 permittedParentTypes: string[];
 /**
  * The current context, chosen by state machine and condition sets by the function getContext.
  */
 context?: string;
}