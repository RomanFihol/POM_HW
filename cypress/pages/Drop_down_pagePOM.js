/// <reference types="Cypress" />

export class DropDownPagePOM {
    visit() {
        cy.visit('www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    static get WebDriwerLink() {
        return cy.get('a#nav-title')
    }

    static get MainTitle() {
       return cy.xpath('//div[@id="main-header"]//h1')
    }
    static get getTopickByTitle() {
        return cy.xpath(`//div[@class="thumbnail"]`)
    }

    static DropDownMenuTopic(){
        return cy.xpath('//div[@class="thumbnail"]//h2[contains(text(),"Dropdown Menu(s)")]/..//div')
    }

    static getDropDownById(id) {
        return cy.get(`select#dropdowm-menu-${id}`);
    }

    getCheckBoxes(id, arrayOfID) {
        cy.xpath(`//div[@id='checkboxes']//input[@value='option-3']`).uncheck().should('not.be.checked')
        arrayOfID.forEach(valueOfId => {
            if (id !== valueOfId) {
                cy.xpath(`//div[@id='checkboxes']//input[@value='option-${valueOfId}']`).should('not.be.checked');
            }
            else {
                cy.xpath(`//div[@id='checkboxes']//input[@value='option-${id}']`).check().should('be.checked');
            }
        })
    }
    static get getAllCheckboxes() {
       return cy.xpath('//div[@id="checkboxes"]/label')
    }
    getRadioButtons(colors) {
        colors.forEach(colorValue => {
            cy.xpath('//form[@id="radio-buttons"]').find('input').check(colorValue).
                should('be.checked').should('have.value', colorValue);
        })
    }
    getSelected$DisabledButtons() {
        cy.get('#radio-buttons-selected-disabled>input').each(($el) => {
            cy.wrap($el).invoke('val').then((text) => {
                if (text === 'lettuce') {
                    cy.get('#radio-buttons-selected-disabled>input[value="lettuce"]')
                        .should('not.be.checked').check().should('be.checked');
                }
                else if (text === 'cabbage') {
                    cy.get('#radio-buttons-selected-disabled>input[value="cabbage"]').should('be.disabled');
                }
                else {
                    cy.get('#radio-buttons-selected-disabled>input[value="pumpkin"]').check().should('be.checked');
                }
            })
        })
    }
    getDropDownFromSelect$DisabledTopic() {
        cy.xpath('//select[@id="fruit-selects"]//option').should('have.length', 4);
        cy.xpath('//select[@id="fruit-selects"]//option').each(($fruit) => {
            cy.wrap($fruit).invoke('val').then((fruitName) => {
                if (fruitName !== 'orange') {
                    cy.xpath(`//div[@class="section-title"]//select[@id="fruit-selects"]`)
                        .select(fruitName);
                }
                else {
                    cy.xpath('//select[@id="fruit-selects"]//option[@value="orange"]').should('be.disabled');
                }
            })
        })
    }
    static get getFooter() {
       return cy.get('div.col-sm-12>p')
    }
}

export const drop_down_page = new DropDownPagePOM;
