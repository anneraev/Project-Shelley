import Entity from "./Entity";

export default class ChildComponent<P> {
    Entity: Entity;
    props: P;
    constructor(entity: Entity, props: P) {
        this.Entity = entity;
        this.props = props;
    }
}