import { ArraySchema, type } from "@colyseus/schema";
import { Entity } from "./Entity";
import { Item } from "./Item";
import { DEFAULT_PLAYER_RADIUS } from "./State";

export class Player extends Entity {
  @type("string") name = "Username";
  @type([Item]) inventory = new ArraySchema<Item>();
  constructor() {
    super();
    this.radius = DEFAULT_PLAYER_RADIUS;
  }
}
