import { expect, Locator, Page } from '@playwright/test';
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
}
