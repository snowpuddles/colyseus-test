import { ArraySchema, Schema, type } from "@colyseus/schema";

class Entity extends Schema {
  @type("number") x: number;
  @type("number") y: number;
}

class Player extends Entity {
  @type("string") name: string;
}

export class State extends Schema {
  @type({ map: Entity }) entities = new ArraySchema<Entity>();
}
