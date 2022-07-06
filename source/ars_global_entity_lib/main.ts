/// <reference types="rpgmakermv_typescript_dts" />

import { Entity } from "../class/entity";

interface Prop {
    thing: string;
}

const prop: Prop = {
    thing: 'this thing'
};

const entity = new Entity<Prop>(prop);

const entityLayer: Entity<Prop>[] = [];

entityLayer.push(entity);

