import puppeteer from 'puppeteer';

describe('Form test', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('form should render', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('validate-card');
  });

  test('form should add class valid if valid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.wrap-validate-form');

    const form = await page.$('#validate-card');
    const input = await form.$('.validate-input');
    const submit = await form.$('.validate-btn');
    await input.type('4485461772024212');
    await submit.click();

    await page.waitForSelector('.wrap-validate-form .validate-input.valid');
  });


  afterEach(async () => {
    await browser.close();
  });
});