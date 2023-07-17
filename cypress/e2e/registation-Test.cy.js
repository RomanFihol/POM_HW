/// <reference types="Cypress" />

import { users } from "../test-data/users-test-data";
import ContactUsPage from "../pages/contact_us_page";
import { contact_page_steps } from "../steps/contsctUsPage_steps";


const contactUsPage = new ContactUsPage();
const userWithAlldata = users[0];
const userWithEmptyEmail = users[1];
const userWithEmptyFirstName = users[2];

describe('Contact us form', () => {
  beforeEach(() => {
    contact_page_steps.visit();
  })

  it(`Fill fields with all data ${userWithAlldata.testName}`, () => {
    contact_page_steps.FillTheForm(userWithAlldata);
    contact_page_steps.subitnButtonClick();
    contact_page_steps.verifySuccessMessages();
    //ContactUsPage.getInvalidEmailError.should("not.exist");
  })


  it(`Fill fields without email ${userWithEmptyEmail.testName}`, () => {
    contactUsPage.fillContactUsForm(userWithEmptyEmail)
    contactUsPage.getInvalidEmailError().should("exist");
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
  });

  it(`Fill fields without first name ${userWithEmptyFirstName.testName}`, () => {
    contactUsPage.fillContactUsForm(userWithEmptyFirstName);
    contactUsPage.getAllFieldsAreRequiredError().should('exist');
    contactUsPage.getInvalidEmailError().should("not.exist");

  })
})