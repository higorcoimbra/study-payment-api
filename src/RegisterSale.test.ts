import { RegisterSale } from "./RegisterSale";

it("should register a valid sale", async function() {
    const inputRegisterSale = {
        salesmanId: "id1",
        saleDate: new Date(),
        orderId: "order1",
        itemIds: ["item1", "item2", "item3"]
    }
    const registerSale = new RegisterSale();
    const outputRegisterSale = await registerSale.execute(inputRegisterSale);
    expect(outputRegisterSale.saleId).toBeDefined();
});