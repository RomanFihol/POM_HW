/// <reference types="Cypress" />
//import { forEach } from "cypress/types/lodash";
import { DropDownPagePOM } from "../pages/Drop_down_pagePOM";
import { MainPageURL, WebDriwerLinkText, checkboxIDs, titles } from "../test-data/data_for_dropdown_page";
// import { dropDown1 } from "../test-data/data_for_dropdown_page";

class DropDownPageSteps {

    checkWebDiwerLinkStep() {
        DropDownPagePOM.WebDriwerLink.should('have.text', WebDriwerLinkText).
            click().url().should('equal', MainPageURL).go('back');
    }
    checkMainTitleStep() {
        DropDownPagePOM.MainTitle.should('exist').and('have.text', 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')
    }
    getTopickByTitleStep() {
        const actualArray = new Array();
        DropDownPagePOM.getTopickByTitle.should('have.length', 4).find('h2').each(($tittle) => {
            const title = $tittle.text();
            actualArray.push(title)
        }).then(() => {
            expect(actualArray).to.deep.equal(titles)
        })
    }
    getAllTheValuesOfDropDownStep(valuesOfArray, id) {
        const factArray = [];
        DropDownPagePOM.getDropDownById(id).find('option').each(($element) => {
            const textValue = $element.text().toLowerCase();
            factArray.push(textValue)
        }).then(() => {
            expect(factArray).to.deep.equal(valuesOfArray);
        })
    }
    checkCheckBoxes() {
        DropDownPagePOM.getAllCheckboxes.find('input').each(($el) => {
            let el = $el;
            cy.wrap(el).check().should('be.checked').uncheck().should('not.be.checked');
        })
    }


    getFooter() {
        DropDownPagePOM.getFooter.should('exist').and('have.text', 'Copyright © www.GianniBruno.com')
    }

    // DropDownPagePOM.getTopickByTitle(arrayOfTitles) {
    //     arrayOfTitles.forEach(title => {
    //         return cy.xpath(`//div[@class="thumbnail"]/h2[contains(text(),"${title}")]`)
    //             .invoke('text').should('eq', title)
    //     });
    // }

}

export const drop_down_page_steps = new DropDownPageSteps;