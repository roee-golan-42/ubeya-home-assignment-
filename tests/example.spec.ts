import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('test title', async ({ page }) => {
  const BASE_URL = 'https://www.saucedemo.com/'
  const USER_NAME = 'standard_user'
  const PASSWORD = 'secret_sauce'

  const loginPage = new LoginPage(page);

  await loginPage.goto(BASE_URL)
  await loginPage.login(USER_NAME, PASSWORD)
});
