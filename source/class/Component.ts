export default class Component<P, T> {
    constructor (originalObject: T, props: P) {
        this.props = props;
        this.originalObject = originalObject;
    }
    originalObject: T;
    props: P;
}