import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderCompletionPage extends BasePage {
    private readonly completeHeader;


    constructor(page: Page) {
        super(page)
        this.completeHeader = this.page.getByTestId('complete-header');
    }

    public async assertOrderCompleteHeaderExist() {
        await expect(this.completeHeader).toBeVisible();
    }
}
