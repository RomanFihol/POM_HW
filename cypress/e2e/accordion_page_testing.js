import { accord_page_steps } from "../steps/accordions_page_steps"

describe('Veryfing Accordions Items page', () => {
    beforeEach(() => {
        accord_page_steps.visit();
    })

    it('Verify that all the objects are presented on the page', () => {
        accord_page_steps.getNavBarStep();
        accord_page_steps.getHeaderStep();
        accord_page_steps.getManualTestingTopicStep();
        accord_page_steps.getAutomationTestingTopicStep();
        accord_page_steps.getCucumberTopicStep();
        accord_page_steps.getKeepClickingTopicStep();
        accord_page_steps.getLoadingButtonStep();
        accord_page_steps.getFooterStep();
    })

    it('Verify NavBar and Header', () => {
        accord_page_steps.checkNavBarStep();
        accord_page_steps.checkHeaderStep();
    })

    it('Verify Manual Testing Topic',()=>{
        accord_page_steps.checkManualTestingAccordionExpandStep();
        accord_page_steps.checkManualTestingAccordionDdescriptionStep();
    })

    it('Verify Cucumber BDD Topic',()=>{
        accord_page_steps.checkCucumberBDDTopicExpandStep();
        accord_page_steps.checkCucumberBDDAccordionDdescriptionStep();
    })

    it('Verify Automation Testing Topic',()=>{
        accord_page_steps.checkAutomationTestingTopicExpandStep();
        accord_page_steps.checkAutomationTestingDdescriptionStep();
    })

    it('Verify Keep Clicking Topic',()=>{
        accord_page_steps.checkKeepClickingExpandStep();
        accord_page_steps.checkKeepClickingDescriptionStep();
    })
})