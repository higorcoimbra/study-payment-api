import crypto from "crypto";
import { Sale } from "./Sale";
import SaleRepository from "./SaleRepository";

export class RegisterSale {
    constructor(
        readonly saleRepository: SaleRepository
    ) {}

    async execute(input: Input): Promise<Output> {
        const sale = Sale.create(input.salesmanId, input.saleDate, input.orderId, input.itemIds);
        await this.saleRepository.registerSale(sale);
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