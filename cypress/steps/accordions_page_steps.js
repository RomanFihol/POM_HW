/// <reference types = "Cypress"/>
import { AccordionPOM } from "../pages/Accordion_Items_POM";
import { AutomationDesc, CucumberBDDDesc, HeaderText, KeepClickingDesc, ManualTestingDesc, WebDriwerMainPageUrl } from "../test-data/accordion_page_datas";
import 'cypress-wait-until'
export class Accordion_Page_Steps {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html').url().
            should('include', 'Accordion');
    }

    getNavBarStep() {
        AccordionPOM.navBar.should('exist');
    }
    checkNavBarStep() {
        AccordionPOM.navBar.should('have.text', 'WebDriver (Accordion Items & Text Appear)').
            click().url().should('equal', WebDriwerMainPageUrl).go('back');
    }
    getHeaderStep() {
        AccordionPOM.header.should('exist');
    }
    checkHeaderStep() {
        AccordionPOM.header.should('have.text', HeaderText);
    }
    getManualTestingTopicStep() {
        AccordionPOM.manualTestingAccordion.should('exist');
    }
    checkManualTestingAccordionExpandStep() {
        AccordionPOM.manualTestingAccordion.should('have.text', 'Manual Testing').
            click().should('have.class', 'accordion active');
    }
    checkManualTestingAccordionDdescriptionStep() {
        AccordionPOM.manualTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(ManualTestingDesc);
        })
    }
    getCucumberTopicStep() {
        AccordionPOM.cucumberBddAccordion.should('exist');
    }

    checkCucumberBDDTopicExpandStep() {
        AccordionPOM.cucumberBddAccordion.should('have.text', 'Cucumber BDD').
            click().should('have.class', 'accordion active');
    }

    checkCucumberBDDAccordionDdescriptionStep() {
        AccordionPOM.cucumberBddAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(CucumberBDDDesc);
        })
    }
    getAutomationTestingTopicStep() {
        AccordionPOM.cucumberBddAccordion.should('exist');
    }
    checkAutomationTestingTopicExpandStep() {
        AccordionPOM.automationTestingAccordion.should('have.text', 'Automation Testing').
            click().should('have.class', 'accordion active');
    }
    checkAutomationTestingDdescriptionStep() {
        AccordionPOM.automationTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(AutomationDesc);
        })
    }
    getKeepClickingTopicStep() {
        AccordionPOM.keepClickingAccordion.should('exist');
    }
    checkKeepClickingExpandStep() {
        AccordionPOM.LoadingButton.invoke('text').then((currentText) => {
            cy.waitUntil(() =>
                AccordionPOM.LoadingButton.invoke('text').then((expectedText) => {
                    return currentText !== expectedText
                })
            ).then(() => {
                AccordionPOM.keepClickingAccordion.click().should('have.class', 'active')
            })
        })
    }
    checkKeepClickingDescriptionStep(){
        AccordionPOM.keepClickingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(KeepClickingDesc);
        })
    }
    getLoadingButtonStep() {
        AccordionPOM.LoadingButton.should('exist');
    }
    getFooterStep() {
        AccordionPOM.Footer.should('exist');
    }
   
    checkCountOfAccordionStepStep() {
        AccordionPOM.AllTheAccordions.should('have.length', 4);
    }
    checkManualTestingAccordionDdescriptionStep() {
        AccordionPOM.manualTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(ManualTestingDesc);
        })
    }
}

export const accord_page_steps = new Accordion_Page_Steps;
