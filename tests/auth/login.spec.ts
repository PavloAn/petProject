import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Перехід на сторінку входу', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.goToLogin();

  await expect(page).toHaveURL(/\/login$/);
  await expect(
    page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();
});
