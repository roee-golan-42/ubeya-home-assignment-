import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    private readonly checkoutButton;


    constructor(page: Page) {
        super(page)
        this.checkoutButton = this.page.getByTestId('checkout');
    }

    public async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }
}
