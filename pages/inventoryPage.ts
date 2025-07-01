import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    private readonly items;

    constructor(page: Page) {
        super(page)
        this.items = this.page.getByTestId('inventory-item');
    }

    public async addFirstItemToCart() {
        await this.items.first().waitFor({ state: 'visible' });
        const firstItem: Locator = this.items.first();
        await firstItem.locator(`[data-test*='add-to-cart']`).click()
    }

    public async addAllItemsToCart() {
        let amountOfItems = 0
        await this.items.first().waitFor({ state: 'visible' });

        const products = (await this.items.all())
        for (let index = 0; index < products.length; index++) {
            await products[index].locator(`[data-test*='add-to-cart']`).click()
            amountOfItems++;;
        }

        return amountOfItems
    }
}
