/// <reference types="Cypress" />

export class DropDownPagePOM {
    visit() {
       return cy.visit('www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
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
    static DropDownMenuTopic() {
        return cy.xpath('//div[@class="thumbnail"]//h2[contains(text(),"Dropdown Menu(s)")]/..//div')
    }
    static getDropDownById(id) {
        return cy.get(`select#dropdowm-menu-${id}`);
    }
    static get getAllCheckboxes() {
        return cy.xpath('//div[@id="checkboxes"]/label')
    }
    static get getRadioButtons() {
        return cy.xpath('//form[@id="radio-buttons"]');
    }
    static getSelected$DisabledButtons(vegetable) {
        return cy.get(`#radio-buttons-selected-disabled>input[value="${vegetable}"]`)
    }
    static get getDropDownFromSelect$DisabledTopic() {
        return cy.get('select#fruit-selects')
    }
    static get getFooter() {
        return cy.get('div.col-sm-12>p')
    }
}

export const drop_down_page = new DropDownPagePOM;
