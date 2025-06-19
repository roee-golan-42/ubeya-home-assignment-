import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavBarComponent extends BasePage {
    private readonly cartButton;


    constructor(page: Page) {
        super(page)
        this.cartButton = this.page.getByTestId('shopping-cart-link');
    }

    public async getAmountOfItemsInCart() {
        return await this.cartButton.innerText();
    }

    public async assertAmountOfItems(desiredAmount: string) {
        expect(await this.getAmountOfItemsInCart()).toBe(desiredAmount);
    }

    public async clickOnCartButton() {
        await this.cartButton.click();
    }

}
