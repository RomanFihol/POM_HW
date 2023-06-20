/// <reference types="Cypress" />

import Our_Products from "../pages/our_products_page";

const our_product = new Our_Products;

describe('Our Products Page testing', () => {
    beforeEach(() => {
        our_product.visit();
    })

    it('Verify site navigation buttons', () => {
        our_product.checkSiteNavigationOrder();
        our_product.checkHomePageLink();
        our_product.checkContactUsPageLink();
        our_product.checkOurProductsPageLink();

    });

    it('Verify count and names of topics', () => {
        our_product.getSpecialOffersTopic();
        our_product.getCamerasTopic();
        our_product.getNewLaptopsTopic();
        our_product.getUsedLaptopsTopic();
        our_product.getGameConsoleTopic();
        our_product.getDesktopSystemsTopic();
        our_product.getComponentsTopic();
        our_product.getAudioTopic();
        our_product.checkCountOfTopics();
    });

    

    it('Check modal window for random topics', () => {
        our_product.CheckModalWindowForRandomTopics();
    });
})