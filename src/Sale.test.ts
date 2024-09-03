import { Sale } from "./Sale";

it('should contains at least 1 item', async function() {
    const itemsIds: string[] = [];
    expect(() => Sale.create("salesman1", new Date(), "order1", itemsIds)).toThrow(new Error('A sale should contain at least an item'));
});