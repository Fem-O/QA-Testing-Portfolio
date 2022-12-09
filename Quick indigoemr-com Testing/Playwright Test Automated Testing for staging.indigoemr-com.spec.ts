import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // This end-2-end test will verify that a user can successfully book appointments for multiple patients in one login session.

  // Go to https://staging.indigoemr.com/
  await page.goto('https://staging.indigoemr.com/');

  // Worker logging in
  // Go to https://staging.indigoemr.com/login  
  await page.goto('https://staging.indigoemr.com/login');

  // Click [placeholder="johndoe\@gmail\.com"]
  await page.locator('[placeholder="johndoe\\@gmail\\.com"]').click();

  // Fill email address for user [placeholder="johndoe\@gmail\.com"]
  await page.locator('[placeholder="johndoe\\@gmail\\.com"]').fill('test-qa@inboxkitten.com');

  // Click [placeholder="\*\*\*\*\*\*\*\*"]
  await page.locator('[placeholder="\\*\\*\\*\\*\\*\\*\\*\\*"]').click();

  // Fill password for user[placeholder="\*\*\*\*\*\*\*\*"]
  await page.locator('[placeholder="\\*\\*\\*\\*\\*\\*\\*\\*"]').fill('qaV9ult!x');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/select-branch');

  // Click text=Continue
  await page.locator('text=Continue').click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/modules');

  // Click text=Front Desk
  await page.locator('text=Front Desk').click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/frontdesk/dashboard');


  // Click text=Book >> class using xpath  (Verify you can book new appointment for 1st patient with Medical Record Number alt00107)
  await page.locator("(//div[@class='content']/following-sibling::div)[1]").click();

  // Click [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').click();

  // Fill patients MRN [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').fill('alt00107');

  // Click text=alt00107
  await page.locator('text=alt00107').click();

  // Click text=TimeSelect Option >> svg
  await page.locator('text=TimeSelect Option >> svg').click();

  // Click #react-select-6-option-4
  await page.locator('#react-select-6-option-4').click();

  // Click text=Reason For VisitSelect Option >> svg
  await page.locator('text=Reason For VisitSelect Option >> svg').click();

  // Click #react-select-7-option-1
  await page.locator('#react-select-7-option-1').click();

  // Click button:has-text("Book Appointment")
  await page.locator('button:has-text("Book Appointment")').click();



  // Click text=Book >> nth=3 (Verify you can book new appointment for 2nd patient with Medical Record Number alt00108)
  await page.locator('text=Book').nth(3).click();

  // Click [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').click();

  // Fill patients MRN [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').fill('alt00108');

  // Click text=alt00108
  await page.locator('text=alt00108').click();

  // Click text=TimeSelect Option >> svg
  await page.locator('text=TimeSelect Option >> svg').click();

  // Click #react-select-11-option-3
  await page.locator('#react-select-11-option-3').click();

  // Click text=Reason For VisitSelect Option >> svg
  await page.locator('text=Reason For VisitSelect Option >> svg').click();

  // Click #react-select-12-option-2
  await page.locator('#react-select-12-option-2').click();

  // Click button:has-text("Book Appointment")
  await page.locator('button:has-text("Book Appointment")').click();



  // Click text=Book >> nth=4  (Verify you can book new appointment for 3rd patient with Medical Record Number alt00109)
  await page.locator('text=Book').nth(4).click();

  // Click [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').click();

  // Fill patients MRN [placeholder="Enter MRN"]
  await page.locator('[placeholder="Enter MRN"]').fill('alt00109');

  // Click text=alt00109
  await page.locator('text=alt00109').click();

  // Click text=TimeSelect Option >> svg
  await page.locator('text=TimeSelect Option >> svg').click();

  // Click #react-select-16-option-0
  await page.locator('#react-select-16-option-0').click();

  // Click text=Reason For VisitSelect Option >> svg
  await page.locator('text=Reason For VisitSelect Option >> svg').click();

  // Click #react-select-17-option-0
  await page.locator('#react-select-17-option-0').click();

  // Click button:has-text("Book Appointment")
  await page.locator('button:has-text("Book Appointment")').click();


  //Verify that Worker logs out succesfully
  // Click li[role="button"]:has-text("John Doe")
  await page.locator('li[role="button"]:has-text("John Doe")').click();

  // Click li[role="button"]:has-text("John Doe")
  await page.locator('li[role="button"]:has-text("John Doe")').click();

  // hover li[role="button"]:has-text("John Doe")
  await page.locator("//div[@class='navigation-otherlinks']").hover();

  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://staging.indigoemr.com/login');


});