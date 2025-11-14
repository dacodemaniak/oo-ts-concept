import { RoomPrice } from "./room-price";

export class AllInclusive implements RoomPrice {
    private price: number = 50
    total(): number {
        return this.price
    }
}