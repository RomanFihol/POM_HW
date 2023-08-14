/// <reference types="Cypress" />


export class Home_page {

   static openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    }
   static get getLinkToTheMainPage() {
        return cy.get('a#nav-title')
    }
    static get getMainWindowWithPicture() {
        return cy.get("div.carousel-inner");
    }
    static get getLeftScrollButton() {
        return cy.get('span.glyphicon.glyphicon-chevron-left');
    }
    static get getRightScrollButton() {
        return cy.get('span.glyphicon.glyphicon-chevron-right');
    }
    static get getCarouselIndicator() {
        return cy.get('ol.carousel-indicators');
    }
    static get getSiteNavigationOrder() {
       return cy.get('ul.nav.navbar-nav')
    }
    // static get checkHomePageLink() {
    //     return cy.get('li>a[href]').contains('Home').click().cy.url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    // }
    // static get checkOurProductsPageLink() {
    //     return cy.get('li>a[href]').contains('Contact Us').click().url().should('equal', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html').go('back');
    // }
    // static get checkContactUsPageLink() {
    //     return cy.get('li>a[href]').contains('Our Products').click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/products.html').go('back');
    // }
    static get getWhoAreWeTopic() {
        return cy.get('button.btn.btn-secondary.center-block')
    }
    static get checkModalWindow() {
       return cy.get('div.modal-body>p')
    }

    static get closeButton(){
      return  cy.get('button.btn.btn-default')
    }
    static get getFindOutMoreButton() {
        return cy.get('button.btn.btn-secondary.center-block');
    }
    static get getGreatServiceTopic() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div');
    }
    static get getChooseUsTopic() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(3) > div');
    }
    static get getExellentCustomersService() {
        return cy.get('div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(4) > div');
    }
    static get checkCountOfTopics() {
        return cy.get('div.row>div>div.thumbnail');
    }
}
export const home_page = new Home_page();


