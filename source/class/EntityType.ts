

export default class EntityType<T> {
    readonly id: string;
    readonly Ename: string;
    private readonly CoreComponent: T;
    ShowCoreComponentType(): string {
        return typeof this.CoreComponent;
    }
}