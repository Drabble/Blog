import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const slug = '2026-10-10-alpha-pocket';
test('AlphaPocket article, images and mobile layout render correctly', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/post/' + slug);
  await expect(page.locator('h1')).toContainText('AlphaPocket');
  await expect(page.locator('markdown')).toContainText('55,986');
  await expect(page.locator('markdown')).not.toContainText(/legacy|serialized incorrectly|I also removed|There are some limits/);
  const images = page.locator('markdown img');
  expect(await images.count()).toBeGreaterThanOrEqual(4);
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'tmp/alpha-pocket-' + test.info().project.name + '.png', fullPage: true });
  expect(errors).toEqual([]);
});

test('homepage loads projects and article navigation changes content', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('app-card')).toHaveCount(120);
  await page.locator('app-card').first().click();
  await expect(page).toHaveURL(new RegExp(slug));
  const previous = page.getByRole('link', { name: 'Previous post', exact: true }).first();
  await previous.click();
  await expect(page).not.toHaveURL(new RegExp(slug));
  await expect(page.locator('markdown')).not.toBeEmpty();
});

test('all registered articles include their server-rendered body', async ({ request }) => {
  test.skip(test.info().project.name !== 'desktop');
  const slugs: string[] = JSON.parse(readFileSync('src/assets/posts.json', 'utf8'));
  for (const item of slugs) {
    const response = await request.get('/post/' + item);
    expect(response.status(), item).toBe(200);
    const html = await response.text();
    expect(html, item).toMatch(/<markdown[^>]*>[\s\S]*<(?:p|h[1-6]|div|pre|ul|ol|iframe|img|video)/);
    expect(html, item).not.toContain('The article could not be loaded.');
  }
});

test('theme choice survives reload', async ({ page }) => {
  await page.goto('/post/' + slug);
  const button = page.getByRole('button', { name: 'Switch theme' });
  await button.click();
  await expect(page.locator('body')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('body')).toHaveClass(/dark/);
  await button.click();
  await expect(page.locator('body')).not.toHaveClass(/dark/);
});

test('older math and code posts retain their rendering', async ({ page }) => {
  await page.goto('/post/2024-01-19-electronics');
  await expect(page.locator('markdown .katex').first()).toBeVisible();
  await expect(page.locator('markdown .katex-error')).toHaveCount(0);
  await page.goto('/post/2014-07-10-rss');
  await expect(page.locator('markdown pre code').first()).toBeVisible();
  await expect(page.locator('markdown code .token').first()).toBeVisible();
});

test('SSR rejects an unconfigured host', async ({ request }) => {
  const response = await request.get('/post/' + slug, { headers: { Host: 'untrusted.invalid' } });
  expect(response.status()).toBe(400);
});
