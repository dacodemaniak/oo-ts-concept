import { SingleRoom } from './../hotel/single-room'
import { HautDebit } from './../hotel/haut-debit'
import { PetitDej } from './../hotel/petit-dej'

describe('Decorator test suite', () => {
    let singleRoom: SingleRoom

    beforeEach(() => {
        singleRoom = new SingleRoom()
    })

    it ('Should cost only 50', () => {
        expect(singleRoom.total()).toEqual(50)
    })

    it('Should cost 55 if i decore with HautDebit', () => {
        const decorator = new HautDebit(singleRoom)
        expect(decorator.total()).toEqual(55)
    })

    it('Should cost 65 if i decore with PetitDej', () => {
        const decorator = new PetitDej(singleRoom)
        expect(decorator.total()).toEqual(65)
    })

    it('All inclusive must be 70', () => {
        const decorator = new HautDebit(singleRoom)
        const petitDejdecorator = new PetitDej(decorator)
        expect(petitDejdecorator.total()).toEqual(70)
    })
})