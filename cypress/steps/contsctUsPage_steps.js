/// <reference types = "Cypress"/>


import ContactUsPage from "../pages/contact_us_page";
import { errors } from "../test-data/users-test-data";

export class ContactUsPageSteps {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'contactus');
    }

    FillTheForm(user) {
        if (user.first_name) {
            ContactUsPage.getFirstName.type(user.first_name).should('have.value', user.first_name)
        }
        if (user.last_name) {
            ContactUsPage.getLastName.type(user.last_name).should('have.value', user.last_name)
        }
        if (user.email) {
            ContactUsPage.getEmail.type(user.email).should('have.value', user.email)
        }
        if (user.comment) {
            ContactUsPage.getComment.type(user.comment).should('have.value', user.comment)
        }
    }
    subitnButtonClick(){
        ContactUsPage.getSubmitButton.click();
    }

    verifySuccessMessages(){
        ContactUsPage.getSuccsessSubmitMessage.should('exist');
    }

    verifyInvalidEmailError(){
            ContactUsPage.getInvalidEmailError.should('exist').contains(errors.invalidEmail);
    }

    verifyAllFieldsAreRequiredError(){
        ContactUsPage.getAllFieldsAreRequiredError.should('exist').contains(errors.invailAllFields);
    }
}

export const contact_page_steps = new ContactUsPageSteps;