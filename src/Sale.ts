import crypto from "crypto";
export class Sale {
    constructor(readonly saleId: string, readonly salesmanId: string, readonly date: Date, readonly orderId: string, readonly itemsId: string[]) {}

    static create(salesmanId: string, date: Date, orderId: string, itemsId: string[]) {
        if(itemsId.length < 1) throw new Error('A sale should contain at least an item');
        const saleId = crypto.randomUUID();
        return new Sale(saleId, salesmanId ,date ,orderId ,itemsId);
    }
}