import crypto from "crypto";

export class RegisterSale {
    constructor() {}

    async execute(input: Input): Promise<Output> {
        const saleId = crypto.randomUUID();
        return {
            saleId: saleId
        }
    }
}

type Input = {
    salesmanId: string,
    saleDate: Date,
    orderId: string,
    itemIds: string[]
};

type Output = {
    saleId: string;
}