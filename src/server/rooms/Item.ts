import { Schema, type } from "@colyseus/schema";

export class Item extends Schema {
  @type("string") name: string = "Item";
  @type("string") type: string = "test";
}

export class Weapon extends Item {
  @type("number") range: number = 1;
  @type("boolean") twoHand: boolean = false;
}
