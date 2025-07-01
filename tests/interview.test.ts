import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { NavBarComponent } from '../pages/navBarComponent';

test('order item', async ({ page }) => {
    const BASE_URL = 'https://www.saucedemo.com/'
    const USER_NAME = 'standard_user'
    const PASSWORD = 'secret_sauce'

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const navBarComponent = new NavBarComponent(page);

    await loginPage.goto(BASE_URL)
    await loginPage.login(USER_NAME, PASSWORD)

    const amountOfItems = await inventoryPage.addAllItemsToCart()
    await navBarComponent.assertAmountOfItems(String(amountOfItems));
});
