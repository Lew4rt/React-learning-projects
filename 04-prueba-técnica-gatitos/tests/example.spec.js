// @ts-check
import { test, expect } from '@playwright/test';

const CAT_URL_BASE = 'https://cataas.com';
const LOCALHOST_URL = 'http://localhost:5173/'

test('has image and title', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log(imageSrc)
  
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_URL_BASE)).toBeTruthy
});
