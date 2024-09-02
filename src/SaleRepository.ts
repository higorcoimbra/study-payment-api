import { Repository } from "typeorm";
import { Sale } from "./Sale";
import TypeormSale from './typeorm/entities/Sale';
import { AppDataSource } from "./typeorm/datasource";
import Item from "./typeorm/entities/Item";

export default interface SaleRepository {
    registerSale(sale: Sale): Promise<void>;
    getSale(saleId: string): Promise<Sale>;
}

export class SaleRepositoryDatabase implements SaleRepository {
    private ormRepository: Repository<TypeormSale>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(TypeormSale);
    }

    async registerSale(sale: Sale) {
        const ormSale = new TypeormSale();
        ormSale.id = sale.saleId;
        ormSale.date = sale.date;
        ormSale.items = sale.itemsId.map(itemId => {
            let item = new Item();
            item.id = itemId;
            return item;
        });
        ormSale.salesmanId = sale.salesmanId;
        ormSale.orderId = sale.orderId;
        await this.ormRepository.save(ormSale);
    }

    async getSale(saleId: string): Promise<Sale> {
        const ormSale = await this.ormRepository.find({
            where: {
                id: saleId
            },
            relations:  {
                items: true
            }
        });

        if(!ormSale.length) throw new Error("Sale not found");

        return new Sale(
            ormSale[0].id, 
            ormSale[0].salesmanId, 
            ormSale[0].date, 
            ormSale[0].orderId,
            ormSale[0].items.map(item => item.id)
        )
    }
}

export class SaleRepositoryFake implements SaleRepository {
    sales: Sale[] = [];
    
    async registerSale(sale: Sale): Promise<void> {
        this.sales.push(sale);
    }

    async getSale(saleId: string): Promise<Sale> {
        const byId = (el: Sale) => el.saleId === saleId;
        const sale = this.sales.find(byId);
        if(!sale) throw new Error("Sale not found");
        return sale;
    }
}