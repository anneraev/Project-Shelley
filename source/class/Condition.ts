export default class Condition<T> {
    readonly c_name: string;
    readonly id: string;
    value: T;
    comparison: string;
    condition: T;
}