import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutInformationPage extends BasePage {
    private readonly firstNameField;
    private readonly lastNameField;
    private readonly zipCodeField;
    private readonly continueButton;


    constructor(page: Page) {
        super(page)
        this.firstNameField = this.page.getByTestId('firstName');
        this.lastNameField = this.page.getByTestId('lastName');
        this.zipCodeField = this.page.getByTestId('postalCode');
        this.continueButton = this.page.getByTestId('continue');
    }

    public async fillClientInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.zipCodeField.fill(zipCode);
    }

    public async clickOnContinueButton() {
        await this.continueButton.click();
    }
}
