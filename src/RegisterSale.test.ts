import { RegisterSale } from "./RegisterSale";
import { RegisterSaleFake } from "./RegisterSaleRepository";

it("should register a valid sale", async function() {
    const inputRegisterSale = {
        salesmanId: "id1",
        saleDate: new Date(),
        orderId: "order1",
        itemIds: ["item1", "item2", "item3"]
    }
    const registerSaleFake = new RegisterSaleFake();
    const registerSale = new RegisterSale(registerSaleFake);
    const outputRegisterSale = await registerSale.execute(inputRegisterSale);
    expect(outputRegisterSale.saleId).toBeDefined();
});