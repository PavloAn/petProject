import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Головна сторінка відкривається', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle('Automation Exercise');
});