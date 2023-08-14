/// <reference types="Cypress" />
import { Home_page } from "../pages/Home_page";
import { orderOfNavBar } from "../test-data/home_page_data";

class Home_Page_Steps {
    checkLinkToMainPageStep() {
        Home_page.getLinkToTheMainPage.click().url().should('equal', 'http://www.webdriveruniversity.com/index.html').go('back');
    }
    checkMainWindowWithPictureStep() {
        Home_page.getMainWindowWithPicture.should('exist')
    }
    checkLeftScrollButtonStep() {
        Home_page.getLeftScrollButton.click().should('exist')
    }

    checkRigthScrollButtonStep() {
        Home_page.getRightScrollButton.click().should('be.visible');
    }
    checkCarouseleIndicatorStep() {
        Home_page.getCarouselIndicator.find('li').should('have.length', 3).each(($list) => {
            cy.wrap($list).click().should('have.class', 'active');
        })
    }
    checkSiteNavigationNavBarStep() {
        let orderNavBar = new Array();
        Home_page.getSiteNavigationOrder.find('li').should('have.length', 3).each(($navText) => {
            let LinkText = $navText.text();
            orderNavBar.push(LinkText)
        }).then(() => {
            expect(orderNavBar).to.deep.equal(orderOfNavBar);
        })
    }
    checkTopisCount() {
        Home_page.checkCountOfTopics.should('have.length', 4)
    }
    checkWhoWeAreTopic() {
        Home_page.getWhoAreWeTopic.should('have.text', 'Find Out More!').click();
        Home_page.checkModalWindow.should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        Home_page.closeButton.contains('Close').click();
        Home_page.checkModalWindow.should('not.be.visible')
    }
}

export const hp_steps = new Home_Page_Steps;