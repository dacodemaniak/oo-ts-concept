import { RoomDecorator } from "./room-decorator";

export class HautDebit extends RoomDecorator {
    private price: number = 5
    total(): number {
        return this.price + this.component.total()
    }
}