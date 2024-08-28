export class Sale {
    constructor(readonly salesmanId: string, readonly date: Date, orderId: string, itemsId: string[]) {}
}