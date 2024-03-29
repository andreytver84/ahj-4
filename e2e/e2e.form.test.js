import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Testing validate functionality', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: true, // show gui
      slowMo: 250,
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Testing validate card', () => {
    test('form should render', async () => {
      await page.goto(baseUrl);
  
      await page.waitForSelector('body');
    });
  
    test('form should add class valid if valid', async () => {
      await page.goto(baseUrl);
  
      await page.waitForSelector('.wrap-validate-form');
  
      const form = await page.$('.wrap-validate-form');
      const input = await form.$('.validate-input');
      const submit = await form.$('.validate-btn');
      await input.type('4485461772024212');
      await submit.click();
  
      await page.waitForSelector('.wrap-validate-form .validate-input.valid');
    });
  });
});