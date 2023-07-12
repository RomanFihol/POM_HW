/// <reference types="Cypress" />


export default class Home_page {

    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
      
    }

    checkLinkToTheMainPage() {
        return cy.get('#nav-title').click().url().should('equal', 'http://www.webdriveruniversity.com/index.html').go('back');

    }

    getMainWindowWithPicture() {
        return cy.get("div.carousel-inner");
    }

    getLeftScrollButton() {
        return cy.get('span.glyphicon.glyphicon-chevron-left');
    }

    getRightScrollButton() {
        return cy.get('span.glyphicon.glyphicon-chevron-right');
    }

    getCarouselIndicator() {
        return cy.get('ol.carousel-indicators');
    }

    getFirstElementOfCarousel() {
        return cy.get('li[data-slide-to="0"]').click().should('have.class', 'active');
    }

    getSecondElementOfCarousel() {
        return cy.get('li[data-slide-to="1"]').click().should('have.class', 'active');
    }

    getThirdElementOfCarousel() {
        return cy.get('li[data-slide-to="2"]').click().should('have.class', 'active');
    }

    checkSiteNavigationOrder() {
        cy.get('ul.nav.navbar-nav > li').should('have.length', 3).then(($el) => {
            return Cypress.$.makeArray($el).map((el) => el.innerText)
        }).should('deep.equal', ['Home', 'Our Products', 'Contact Us'])
    }

    checkHomePageLink() {
        return cy.get('li>a[href]').contains('Home').click().cy.url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    }

    checkOurProductsPageLink() {
        return cy.get('li>a[href]').contains('Contact Us').click().url().should('equal', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html').go('back');
    }

    checkContactUsPageLink() {
        return cy.get('li>a[href]').contains('Our Products').click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/products.html').go('back');
    }

    getWhoAreWeTopic() {
        return cy.get('button.btn.btn-secondary.center-block').should('have.text', 'Find Out More!').click();
    }

    checkModalWindow() {
        cy.get('div.modal-body>p').should('be.visible');
        cy.get('div.modal-body>p').should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        cy.get('button.btn.btn-default').contains('Close').click();
        return cy.get('div.modal-body>p').should('not.be.visible');
    }

    getFindOutMoreButton() {
        return cy.get('button.btn.btn-secondary.center-block');
    }

    getGreatServiceTopic() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div');
    }

    getChooseUsTopic() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(3) > div');
    }

    getExellentCustomersService() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(4) > div');
    }

    checkCountOfTopics() {
        return cy.get('div.row>div>div.thumbnail').should('have.length', 4);
    }

}


