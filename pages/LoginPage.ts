import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly userNameField;
    private readonly passwordField;
    private readonly loginButton;

    constructor(page: Page) {
        super(page)
        this.userNameField = this.page.getByTestId('username');
        this.passwordField = this.page.getByTestId('password');
        this.loginButton = this.page.getByTestId('login-button');
    }

    public async login(userName: string, password: string) {
        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    public async assertRedirectionToInventoryPage() {
        expect(this.page.url()).toContain('/inventory.html');
    }
}
