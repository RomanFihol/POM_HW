
export class AccordionPOM {

    static get navBar(){
        return cy.get('a#nav-title')
    }

    static get header() {
        return cy.get('div#main-header>h1');
    }

    static get AllTheAccordions() {
        return cy.xpath('//div[@class="col-lg-12"]//button');
    }

    static get manualTestingAccordion() {
        return cy.get('button#manual-testing-accordion');
    }

    static get manualTestingAccordionDescription() {
        return cy.get('div#manual-testing-description>p');
    }

    static get cucumberBddAccordion() {
        return cy.get('button#cucumber-accordion');
    }

    static get cucumberBddAccordionDescription() {
        return cy.get('#cucumber-testing-description>p');
    }

    static get automationTestingAccordion() {
        return cy.get('button#automation-accordion');
    }

    static get automationTestingAccordionDescription() {
        return cy.get('div#automation-testing-description>p');
    }

    static get keepClickingAccordion() {
        return cy.get('button#click-accordion');
    }

    static get LoadingButton (){
       return cy.get('div#text-appear-box > p');
    }

    static get Footer (){
       return cy.xpath('//footer//div//div[@class="col-lg-12"]');
    }

}