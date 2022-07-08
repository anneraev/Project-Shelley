/// <reference types="rpgmakermv_typescript_dts" />

import { Entity } from "../class/entity";

/**
 * The total process of the Entity system is contained here, from initialization to cleanup and disposal and all functions in betweeen. Will build new entities off of lists of specified base objects and properties. Ideally, this should be run early in your program's initialization process, as soon as the required data is available.
 * 
 * @param entityList A list of all entities that currently exist.
 * @param baseObjectList A list of key/value pairs where the key is an entity type and the value is an array of objects that form
 *  the base component of that object.
 * @param baseProps A list of key/value pairs where the key is an entity type and the value is an array of objects that determine the properties of an entity of that type. Key must correspond to a key in baseObjectList in order to map properties to newly-created entities.
 */
export const entitySystemExe = (entityList: Entity<unknown>[], baseObjectList: [string, {}[]][], baseProps: [string, {}[]][]) => {

};
