import ChildComponent from "./ChildComponent";
import Component from "./Component";
import ComponentType from "./ComponentType";
import Condition from "./Condition";
import EntityControlLayer from "./EntityControlLayer";
import EntityType from "./EntityType";

export default class Entity {
    constructor(props: {}, name: string, type: EntityType<{}>) {

    }
    properties: {};
    readonly id: number;
    readonly e_name: string;
    readonly e_type: EntityType<{}>;
    private permittedComponentTypes: ComponentType<{}>[];
    readonly components: Component<{}, {}>[];
    readonly children: ChildComponent<{}>[];
    addComponent(componentObject: {}, entityLayer: EntityControlLayer, props: {}): void {
        const componentType = this.permittedComponentTypes.find(t => t.ShowComponentType() === typeof componentObject ) 
        if (componentType) {
            if (this.components.find(c => c.type !== componentType)) {
                const component = new Component(entityLayer, componentType, props)
                this.components.push(component)    
            } else {
                throw new Error(`Cannot add component. A component of type ${componentType.TypeName} is already associated with this entity. There can only be one component per type for each entity.`)
            }
        } else {
            throw new Error(`Cannot add component. Component type ${componentType.TypeName} is not present in list of permitted component types for this entity.`);
        }
    };
    removeComponent(component: Component<{}, {}>): void {
        const targetComponentIndex = this.components.findIndex(c => c.id === component.id);
        this.components.splice(targetComponentIndex, 1);
    };
    getComponentOfType(type: string): Component<{}, {}> {
        return this.components.find(c => c.type.TypeName === type)
    };
    addChild(entity: Entity, props: {}): void {
        const child = new ChildComponent(entity, props)
        this.children.push(child)
    };
    removeChild(name: string): void {
        const targetChildIndex = this.children.findIndex(c => c.Entity.e_name === name);
        this.children.splice(targetChildIndex, 1);
    }
    private readonly conditions: Condition<string | number | Date>[];
    addCondition(condition: Condition<string | number | Date>) {
        this.conditions.push(condition);
    };
    removeCondition(name: string): void {
        const targetConditionIndex = this.conditions.findIndex(c => c.c_name === name);
        this.conditions.splice(targetConditionIndex, 1);
    }
}