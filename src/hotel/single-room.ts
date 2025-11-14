import { RoomPrice } from "./room-price";

export class SingleRoom implements RoomPrice {
    private price: number = 50
    total(): number {
        return this.price
    }
}