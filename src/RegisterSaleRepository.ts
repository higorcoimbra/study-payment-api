import { Repository } from "typeorm";
import { Sale } from "./Sale";
import TypeormSale from './typeorm/entities/Sale';
import { AppDataSource } from "./typeorm/datasource";

export default interface RegisterSaleRepository {
    registerSale(sale: Sale): Promise<void>;
}

export class RegisterSaleDatabase implements RegisterSaleRepository {
    private ormRepository: Repository<TypeormSale>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(TypeormSale);
    }

    async registerSale(sale: Sale) {
        this.ormRepository.save(sale);
    }
}

export class RegisterSaleFake implements RegisterSaleRepository {
    sales: Sale[] = [];
    
    async registerSale(sale: Sale): Promise<void> {
        this.sales.push(sale);
    }
}