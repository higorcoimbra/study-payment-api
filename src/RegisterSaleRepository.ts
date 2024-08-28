import { Sale } from "./Sale";

export default interface RegisterSaleRepository {
    registerSale(sale: Sale): Promise<void>;
}

export class RegisterSaleFake implements RegisterSaleRepository {
    async registerSale(sale: Sale): Promise<void> {
    }
}