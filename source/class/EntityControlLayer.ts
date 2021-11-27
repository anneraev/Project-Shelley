import CType from "./ComponentType";
import Entity from "./Entity";
import EType from "./EntityType";

export default class EntityControlLayer {
    readonly entities: Entity[];
    createEntity(coreComponent: {}, typename: string): void;
    deleteEntityById(entityId: string): void;
    deleteEntityByName(entityName: string): void;
    deleteEntitiesByType(entityTypeName: string): void;
    getEntityByName(name: string): Entity;
    getEntityById(id: string): Entity;
    getEntitiesByType(typeName: string): Entity[];
    cloneEntity(entityId: string): Entity;
    CreateEntityType(TypeName: string, coreComponent: {}): void;
    createComponentType(Typename: string, component: {}): void;
    private readonly EntityTypes: EType<{}>;
    private readonly ComponentTypes: CType<{}> 
}