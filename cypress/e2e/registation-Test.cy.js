/// <reference types="Cypress" />

import { users } from "../test-data/users-test-data";
import ContactUsPage from "../pages/contact_us_page";


const contactUsPage = new ContactUsPage();
const userWithAlldata = users[0];
const userWithEmptyEmail = users[1];
const userWithEmptyFirstName = users[2];

describe('Contact us form', () => {
  beforeEach(() => {
    contactUsPage.visit();
  })

  it(`Fill fields with all data ${userWithAlldata.testName}`, () => {
    contactUsPage.fillContactUsForm(userWithAlldata);
    contactUsPage.getSuccsessSubmitMessage().should('exist');
    contactUsPage.getInvalidEmailError().should("not.exist");
    contactUsPage.getAllFieldsAreRequiredError().should('not.exist');
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