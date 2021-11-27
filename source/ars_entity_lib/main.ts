/// <reference types="rpgmakermv_typescript_dts" />

import IEntityList from "../interface/IEntityList";
import IEntity from "../interface/IEntity";
import IEType from "../interface/IEType";

const entityLayer: IEntityList = 
{
    entities: [],
    addEntity(entity: IEntity) {
        this.entities.push(entity)
    },
    createEntity(coreComponent)
    deleteEntity(entity: IEntity) {
        const isEntity = (entityInList: IEntity) => entityInList.id == entity.id;
        const index = this.entities.findIndex(isEntity); 
        this.entities.splice(index, 1);
    },
    getEntityByName(name: string) {
        return this.entities.find((e: IEntity) => e.e_name = name);
    },
    getEntityById(id: string) {
        return this.entities.find((e: IEntity) => e.id = id);
    },
    getEntitiesByType(type: IEType) {
        return this.entities.filter((e: IEntity) => e.e_type.id = type.id)
    }
}

console.log("entities Initialized!")
console.log(entityLayer);