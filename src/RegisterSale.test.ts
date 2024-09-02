import { GetSale } from "./GetSale";
import { RegisterSale } from "./RegisterSale";
import { SaleRepositoryDatabase, SaleRepositoryFake } from "./SaleRepository";
import { AppDataSource } from "./typeorm/datasource";

it("should register a valid sale", async function() {
    const inputRegisterSale = {
        salesmanId: "id1",
        saleDate: new Date("Dec 25, 1995"),
        orderId: "order1",
        itemIds: ["item1", "item2", "item3"]
    }
    await AppDataSource.initialize();
    const saleRepository = new SaleRepositoryDatabase();
    const registerSale = new RegisterSale(saleRepository);
    const outputRegisterSale = await registerSale.execute(inputRegisterSale);
    expect(outputRegisterSale.saleId).toBeDefined();
    const getSale = new GetSale(saleRepository);
    const outputGetSale = await getSale.execute(outputRegisterSale.saleId);
    expect(outputGetSale.salesmanId).toBe("id1");
    expect(outputGetSale.orderId).toBe("order1");
    expect(outputGetSale.itemIds).toEqual(["item1", "item2", "item3"]);
    await AppDataSource.destroy();
});