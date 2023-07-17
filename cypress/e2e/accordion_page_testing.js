import { accord_page_steps } from "../steps/accordions_page_steps"

describe('Veryfing Accordions Items page', () => {
    beforeEach(() => {
        accord_page_steps.visit();
    })

    it('Verify that all the objects are presented on the page', () => {
        accord_page_steps.getNavBar();
        accord_page_steps.getHeader();
        accord_page_steps.getManualTestingTopic();
        accord_page_steps.getAutomationTestingTopic();
        accord_page_steps.getCucumberTopic();
        accord_page_steps.getKeepClickingTopic();
        accord_page_steps.getLoadingButton();
        accord_page_steps.getFooter();
    })

    it('Verify NavBar and Header', () => {
        accord_page_steps.checkNavBar();
        accord_page_steps.checkHeader();
    })

    it('Verify Manual Testing Topic',()=>{
        accord_page_steps.checkManualTestingAccordionExpand();
        accord_page_steps.checkManualTestingAccordionDdescription();
    })

    it('Verify Cucumber BDD Topic',()=>{
        accord_page_steps.checkCucumberBDDTopicExpand();
        accord_page_steps.checkCucumberBDDAccordionDdescription();
    })

    it('Verify Automation Testing Topic',()=>{
        accord_page_steps.checkAutomationTestingTopicExpand();
        accord_page_steps.checkAutomationTestingDdescription();
    })

    it.only('Verify Keep Clicking Topic',()=>{
       // accord_page_steps.checkKeepClicking();
        accord_page_steps.checkKeepClickingExpand();
    })
})