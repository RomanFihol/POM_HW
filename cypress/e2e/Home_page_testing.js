/// <reference types="Cypress" />
import Home_page from "../pages/Home_page.js";

const home_page = new Home_page;

describe("Checking Page-Object-Models", () => {
    beforeEach(() => {
        home_page.openHomePage();
    });

    it('Verify link to the main page', () => {
        home_page.checkLinkToTheMainPage();
    })

    it('Verify scrolling bottons', () => {
        home_page.getLeftScrollButton().click().should('be.visible');
        home_page.getRightScrollButton().click().should('be.visible');
    })
    it("Verify carousel indicators", () => {
        home_page.getFirstElementOfCarousel();
        home_page.getSecondElementOfCarousel();
        home_page.getThirdElementOfCarousel();
    })

    it('Verify site navigation buttons', () => {
        home_page.checkSiteNavigationOrder();
        home_page.checkLinkToTheMainPage();
        home_page.checkOurProductsPageLink();
        home_page.checkContactUsPageLink();
    })

    it('Verify count of topics', () => {
        home_page.checkCountOfTopics();
    });

    it('Verify the Who Are We Topic and modal window', () => {
        home_page.getWhoAreWeTopic();
        home_page.checkModalWindow();
    });
})
