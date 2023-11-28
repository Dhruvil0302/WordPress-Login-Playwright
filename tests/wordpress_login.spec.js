// Importing necessary modules from Playwright
const { test, expect } = require('@playwright/test');

// Test case for Zongericht WordPress Login
test('Zongericht WordPress Login', async function({ page }) {
  // Navigating to the WordPress login page with an extended timeout
  await page.goto('https://zongericht.wp-site.xyz/wp-admin', { waitUntil: 'load', timeout: 60000 });

  // Filling in the username field with 'Guest'
  await page.getByLabel('Username or Email Address').click();
  await page.getByLabel('Username or Email Address').fill('Guest');

  // Filling in the password field with 'Thessa1472'
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('***');

  // Clicking the 'Log In' button
  await page.getByRole('button', { name: 'Log In' }).click();

  // Navigating to the WordPress admin dashboard and then to the logout page
  await page.goto('https://zongericht.wp-site.xyz/wp-admin/',);
  await page.goto('https://zongericht.wp-site.xyz/wp-login.php?loggedout=true&wp_lang=en_US');
},
// Setting a timeout of 60 seconds for the test case
{ timeout: 60000 });
