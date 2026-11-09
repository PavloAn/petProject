import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signupLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', {
      name: 'Signup / Login',
    });
  }

  async open() {
    await this.page.goto('/');
  }

  async goToLogin() {
    await this.signupLoginLink.click();
  }
}
