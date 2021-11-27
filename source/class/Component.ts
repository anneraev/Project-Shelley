import ComponentType from "./ComponentType";
import EntityControlLayer from "./EntityControlLayer";


export default class Component<T, P> {
    readonly id: number;
    readonly type: ComponentType<T>;
    getType(): string {
        return this.type.ShowComponentType()
    };
    readonly props: P
    constructor(entityLayer: EntityControlLayer, componentType: ComponentType<T>, props: P) {
        this.id = entityLayer.entities.sort((a, b) => a.id - b.id)[entityLayer.entities.length - 1].id + 1;
        this.type = componentType;
        this.props = props;
    }
}