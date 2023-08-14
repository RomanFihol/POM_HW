import { errors } from "../test-data/users-test-data";

class ContactUsPage {

    static get getFirstName() {
        return cy.get("input[name='first_name']");
    };
    static get getLastName() {
        return cy.get("input[name='last_name']");
    };
    static get getEmail() {
        return cy.get("input[name='email']");
    };
    static get getComment() {
        return cy.get("textarea[name='message']");
    };
    static get getSubmitButton() {
        return cy.get('div#form_buttons').contains('SUBMIT');
    };
    static get getResetButton() {
        return cy.get('div#form_buttons').contains('RESET');
    };
    static get getTitle() {
        return cy.get('h2.section_header').contains('CONTACT US');
    };
    static get getSuccsessSubmitMessage() {
        return cy.get('div#contact_reply > h1').should('have.text', 'Thank You for your Message!');
    }

    static fillContactUsForm(user) {
        if (user.first_name) {
            this.getFirstName().type(user.first_name);
        }
        if (user.last_name) {
            this.getLastName().type(user.last_name);
        }
        if (user.email) {
            this.getEmail().type(user.email);
        }
        if (user.comment) {
            this.getComment().type(user.comment);
        }
        this.getSubmitButton().click();
    }
    static get getAllFieldsAreRequiredError() {
        return cy.contains(errors.invailAllFields);
    }
    static get getInvalidEmailError() {
        return cy.contains(errors.invalidEmail);
    }
}

export default ContactUsPage;