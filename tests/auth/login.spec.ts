import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Показує помилку при вході з неправильними даними', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('invalid@example.com', 'wrong-password');

  await expect(loginPage.errorMessage).toBeVisible();
});