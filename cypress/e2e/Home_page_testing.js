/// <reference types="Cypress" />
import { Home_page, home_page } from "../pages/Home_page.js";
import { hp_steps } from "../steps/home_page_steps.js";

// const home_page = new Home_page;

describe("Checking Page-Object-Models", () => {
    beforeEach(() => {
        Home_page.openHomePage();
    });

    it('Verify site navigation', () => {
        hp_steps.checkSiteNavigationNavBarStep();
    })

    it('Verify link to the main page', () => {
        home_page.checkLinkToTheMainPage;
    })

    it('Verify scrolling bottons', () => {
        hp_steps.checkLeftScrollButtonStep()
        hp_steps.checkRigthScrollButtonStep()
    })
    it("Verify carousel indicators", () => {
        hp_steps.checkCarouseleIndicatorStep();
    })

    it('Verify count of topics', () => {
        hp_steps.checkTopisCount();
    });

    it('Verify the Who Are We Topic and modal window', () => {
        hp_steps.checkWhoWeAreTopic();
    });
})
