import { test, expect } from '@playwright/test';

test('login exitoso en the-internet', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');   // (1) llenar el password

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.flash.success')).toBeVisible();   // (2) assertion: que el flash de éxito sea visible
  await expect(page).toHaveURL(/.*secure/);
});