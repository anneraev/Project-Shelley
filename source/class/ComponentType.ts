
export default class ComponentType<T> {
    readonly id: string;
    readonly TypeName: string;
    private readonly componentObject: T;
    ShowComponentType(): string {
        return typeof this.componentObject;
    }
}