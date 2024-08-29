import crypto from "crypto";
export class Sale {
    constructor(readonly saleId: string, readonly salesmanId: string, readonly date: Date, readonly orderId: string, readonly itemsId: string[]) {}

    static create(salesmanId: string, date: Date, orderId: string, itemsId: string[]) {
        const saleId = crypto.randomUUID();
        return new Sale(saleId, salesmanId ,date ,orderId ,itemsId);
    }
}