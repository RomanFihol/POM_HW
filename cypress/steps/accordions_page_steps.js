/// <reference types = "Cypress"/>
import { AccordionPOM } from "../pages/Accordion_Items_POM";
import { AutomationDesc, CucumberBDDDesc, HeaderText, ManualTestingDesc, WebDriwerMainPageUrl } from "../test-data/accordion_page_datas";
import 'cypress-wait-until'
export class Accordion_Page_Steps {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html').url().
            should('include', 'Accordion');
    }

    getNavBar() {
        AccordionPOM.navBar.should('exist');
    }
    checkNavBar() {
        AccordionPOM.navBar.should('have.text', 'WebDriver (Accordion Items & Text Appear)').
            click().url().should('equal', WebDriwerMainPageUrl).go('back');
    }
    getHeader() {
        AccordionPOM.header.should('exist');
    }
    checkHeader() {
        AccordionPOM.header.should('have.text', 'Click on One of the Accordian Items Below!');
    }
    getManualTestingTopic() {
        AccordionPOM.manualTestingAccordion.should('exist');
    }
    checkManualTestingAccordionExpand() {
        AccordionPOM.manualTestingAccordion.should('have.text', 'Manual Testing').
            click().should('have.class', 'accordion active');
    }
    checkManualTestingAccordionDdescription() {
        AccordionPOM.manualTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(ManualTestingDesc);
        })
    }
    getCucumberTopic() {
        AccordionPOM.cucumberBddAccordion.should('exist');
    }

    checkCucumberBDDTopicExpand() {
        AccordionPOM.cucumberBddAccordion.should('have.text', 'Cucumber BDD').
            click().should('have.class', 'accordion active');
    }

    checkCucumberBDDAccordionDdescription() {
        AccordionPOM.cucumberBddAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(CucumberBDDDesc);
        })
    }
    getAutomationTestingTopic() {
        AccordionPOM.cucumberBddAccordion.should('exist');
    }
    checkAutomationTestingTopicExpand() {
        AccordionPOM.automationTestingAccordion.should('have.text', 'Automation Testing').
            click().should('have.class', 'accordion active');
    }
    checkAutomationTestingDdescription() {
        AccordionPOM.automationTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(AutomationDesc);
        })
    }
    getKeepClickingTopic() {
        AccordionPOM.keepClickingAccordion.should('exist');
    }
    checkKeepClickingExpand() {
        AccordionPOM.LoadingButton.invoke('text').then((currentText) => {
            cy.waitUntil(() => {
                AccordionPOM.LoadingButton.invoke('text').then((expectedText) => {
                    if(currentText !== expectedText){
                       // AccordionPOM.LoadingButton.click();
                       //cy.get('p#hidden-text').click();
                     return AccordionPOM.cucumberBddAccordion.click().should('have.class', 'active')
                    } 
                })
            }) 
        })
    }

    getLoadingButton() {
        AccordionPOM.LoadingButton.should('exist');
    }
    getFooter() {
        AccordionPOM.Footer.should('exist');
    }
    checkHeaderStep() {
        AccordionPOM.header().should('have.text', HeaderText);
    }
    checkCountOfAccordionStep() {
        AccordionPOM.AllTheAccordions.should('have.length', 4);
    }
    checkManualTestingAccordionDdescription() {
        AccordionPOM.manualTestingAccordionDescription.invoke('text').then((text) => {
            expect(text).to.equal(ManualTestingDesc);
        })
    }
}

export const accord_page_steps = new Accordion_Page_Steps;
