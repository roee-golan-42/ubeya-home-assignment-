import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { NavBarComponent } from '../pages/navBarComponent';
import { CartPage } from '../pages/cartPage';
import { CheckoutInformationPage } from '../pages/checkoutInformationPage';
import { OrderPreviewPage } from '../pages/orderPreviewPage';
import { OrderCompletionPage } from '../pages/orderCompletionPage';

test('test title', async ({ page }) => {
    const BASE_URL = 'https://www.saucedemo.com/'
    const USER_NAME = 'standard_user'
    const PASSWORD = 'secret_sauce'
    const FIRST_NAME = 'John'
    const LAST_NAME = 'Doe'
    const POSTAL_CODE = '12345'

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const navBarComponent = new NavBarComponent(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const orderPreviewPage = new OrderPreviewPage(page)
    const orderCompletionPage = new OrderCompletionPage(page);

    await loginPage.goto(BASE_URL)
    await loginPage.login(USER_NAME, PASSWORD)

    const amountOfItems = await inventoryPage.addAllItemsToCart()
    await navBarComponent.assertAmountOfItems(String(amountOfItems));
});
