import SaleRepository from "./SaleRepository";

export class GetSale {
    constructor(readonly saleRepository: SaleRepository) {}

    async execute(saleId: string): Promise<Output> {
        const sale = await this.saleRepository.getSale(saleId);
        return {
            saleId: sale.saleId,
            salesmanId: sale.salesmanId,
            saleDate: sale.date,
            orderId: sale.orderId,
            itemIds: sale.itemsId
        }
    }
}

type Output = {
    saleId: string,
    salesmanId: string,
    saleDate: Date,
    orderId: string,
    itemIds: string[]
};
