import { RoomDecorator } from "./room-decorator";

export class PetitDej extends RoomDecorator {
    private price: number = 15

    total(): number {
        return this.price + this.component.total()
    }
}