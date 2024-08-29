import crypto from "crypto";
import { Sale } from "./Sale";
import RegisterSaleRepository from "./RegisterSaleRepository";

export class RegisterSale {
    constructor(
        readonly registerSaleRepository: RegisterSaleRepository
    ) {}

    async execute(input: Input): Promise<Output> {
        const sale = Sale.create(input.salesmanId, input.saleDate, input.orderId, input.itemIds);
        await this.registerSaleRepository.registerSale(sale);
        return {
            saleId: sale.saleId
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