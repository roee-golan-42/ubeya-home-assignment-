import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderPreviewPage extends BasePage {
    private readonly finishButton;


    constructor(page: Page) {
        super(page)
        this.finishButton = this.page.getByTestId('finish');
    }

    public async clickOnFinishButton() {
        await this.finishButton.click();
    }
}
