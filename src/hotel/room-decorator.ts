import { RoomPrice } from "./room-price";

export abstract class RoomDecorator implements RoomPrice {
    protected component: RoomPrice

    constructor(component: RoomPrice) {
        this.component = component
    }

    total(): number {
        return this.component.total()
    }
}