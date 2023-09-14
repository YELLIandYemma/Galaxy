import { test, expect } from '@playwright/test';

test('Navbar should contain Home, About, Invest, and Contact links', async ({ page }) => {
  // Navigate to your React app's URL (replace with your app's URL)
  await page.goto('http://localhost:3000'); // Update the URL accordingly

  // Check if the navigation links exist
  const homeLink = await page.$('a[href="/"]');
  const aboutLink = await page.$('a[href="/about"]');
  const investLink = await page.$('a[href="/invest"]');
  const contactLink = await page.$('a[href="/contact"]');

  // Assert that the links exist
  expect(homeLink).not.toBeNull();
  expect(aboutLink).not.toBeNull();
  expect(investLink).not.toBeNull();
  expect(contactLink).not.toBeNull();

  // Check the text of each link
  expect(await homeLink!.textContent()).toBe('Home');
  expect(await aboutLink!.textContent()).toBe('About');
  expect(await investLink!.textContent()).toBe('Invest');
  expect(await contactLink!.textContent()).toBe('Contact');

