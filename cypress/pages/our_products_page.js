export default class Our_Products {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html#')
    }

    checkSiteNavigationOrder() {
        cy.get('ul.nav.navbar-nav > li').should('have.length', 3).then(($el) => {
            return Cypress.$.makeArray($el).map((el) => el.innerText)
        }).should('deep.equal', ['Home', 'Our Products', 'Contact Us'])
    }

    checkOurProductsPageLink() {
        return cy.get('li>a[href]').contains('Our Products').click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/products.html');
    }

    checkContactUsPageLink() {
        return cy.get('li>a[href]').contains('Contact Us').click().url().should('equal', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html').go('back');
    }

    checkHomePageLink() {
        return cy.get('li>a[href]').contains('Home').click().url().should('equal', 'http://www.webdriveruniversity.com/Page-Object-Model/index.html').go('back');
    }

    getSpecialOffersTopic() {
        return cy.get('div#container-special-offers>div>p').should('have.text', 'Special Offers');
    }

    getCamerasTopic() {
        return cy.get('div#container-product1>div>p').should('have.text', 'Cameras');
    }


    getNewLaptopsTopic() {
        return cy.get('div#container-product2>div>p').should('have.text', 'New Laptops');
    }

    getUsedLaptopsTopic() {
        return cy.get('div#container-product3>div>p').should('have.text', 'Used Laptops');
    }

    getGameConsoleTopic() {
        return cy.get('div#container-product4>div>p').should('have.text', 'Game Consoles');
    }

    getComponentsTopic() {
        return cy.get('div#container-product5>div>p').should('have.text', 'Components');
    }

    getDesktopSystemsTopic() {
        return cy.get('div#container-product6>div>p').should('have.text', 'Desktop Systems');
    }

    getAudioTopic() {
        return cy.get('div#container-product7>div>p').should('have.text', 'Audio');
    }

    checkCountOfTopics() {
        return cy.get('div.row>div[data-target="#myModal"]').should('have.length', 8);
    }


    CheckModalWindowForRandomTopics() {
        const AllValues = new Array();
        return cy.get('div[data-toggle="modal"]>a>div').each(($el) => {
            const attrValue = $el.attr('id');
            AllValues.push(attrValue)

            for (let i = 0; i < 1; i++) {
                let MaxInt = 8; // -1
                function getRandomInt() {
                    return Math.floor(Math.random() * MaxInt)
                }
                const id_number = getRandomInt();
                let attrId = `div#` + AllValues[id_number];
                if (attrId == 'div#undefined') {
                    i = 2;
                    continue;
                } else {
                    cy.get(attrId).click().get('div.modal-content>div>h4').should('be.visible').get('div.modal-footer>button').contains('Close').click();
                }
            }
        })
    };
}
