import { errors } from "../test-data/users-test-data";

class ContactUsPage {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    }

    getFirstName() {
        return cy.get("input[name='first_name']");
    };
    getLastName() {
        return cy.get("input[name='last_name']");
    };
    getEmail() {
        return cy.get("input[name='email']");
    };
    getComment() {
        return cy.get("textarea[name='message']");
    };
    getSubmitButton() {
        return cy.get('#form_buttons').contains('SUBMIT');
    };
    getResetButton() {
        return cy.get('#form_buttons').contains('RESET');
    };
    getTitle() {
        return cy.get('.section_header').contains('CONTACT US');
    };
    getSuccsessSubmitMessage() {
        return cy.get('div#contact_reply > h1').should('have.text','Thank You for your Message!');
    }

    fillContactUsForm(user) {
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

    getAllFieldsAreRequiredError(){
        return cy.contains(errors.invailAllFields);
    }

    getInvalidEmailError(){
        return cy.contains(errors.invalidEmail);
    }


}



export default ContactUsPage;