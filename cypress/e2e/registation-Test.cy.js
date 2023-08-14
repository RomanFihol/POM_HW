/// <reference types="Cypress" />

import { users } from "../test-data/users-test-data";
//import ContactUsPage from "../pages/contact_us_page";
import { contact_page_steps } from "../steps/contsctUsPage_steps";


//const contactUsPage = new ContactUsPage();
const userWithAlldata = users[0];
const userWithEmptyEmail = users[1];
const userWithEmptyFirstName = users[2];

describe('Contact us form', () => {
  beforeEach(() => {
    contact_page_steps.visit();
  })

  it(`Fill fields ${userWithAlldata.testName}`, () => {
    contact_page_steps.FillTheForm(userWithAlldata);
    contact_page_steps.subitnButtonClick();
    contact_page_steps.verifySuccessMessages();

  })


  it(`Fill fields with ${userWithEmptyEmail.testName}`, () => {
    contact_page_steps.FillTheForm(userWithEmptyEmail);
    contact_page_steps.subitnButtonClick();
    contact_page_steps.verifyInvalidEmailError();
  });

  it(`Fill fields with ${userWithEmptyFirstName.testName}`, () => {
    contact_page_steps.FillTheForm(userWithEmptyFirstName);
    contact_page_steps.subitnButtonClick();
    contact_page_steps.verifyInvalidEmailError();
    contact_page_steps.verifyAllFieldsAreRequiredError();
    

  })
})