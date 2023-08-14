/// <reference types="Cypress" />

import { DropDownPagePOM } from "../pages/Drop_down_pagePOM";
import { DisabledFruit, DisabledVeg, MainPageURL, WebDriwerLinkText, fruits, titles } from "../test-data/data_for_dropdown_page";

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
    checkCheckBoxesStep() {
        DropDownPagePOM.getAllCheckboxes.find('input').each(($el) => {
            let el = $el;
            cy.wrap(el).check().should('be.checked').uncheck().should('not.be.checked');
        })
    }
    checkRadioButtonsStep(colors) {
        colors.forEach(colorValue => {
            DropDownPagePOM.getRadioButtons.find('input').check(colorValue).should('be.checked').
                and('have.value', colorValue);
        })
    }
    checkSelectedAndDisabledStep(vegetables) {
        vegetables.forEach(vegValue => {
            if (vegValue === DisabledVeg) {
                DropDownPagePOM.getSelected$DisabledButtons(vegValue).should('be.disabled')
            }
            else {
                DropDownPagePOM.getSelected$DisabledButtons(vegValue).check(vegValue);
            }
        })
    }
    checkSelectedAndDisabledDropDownStep(furits) {
        fruits.forEach(fruit => {
            if (fruit === DisabledFruit) {
                DropDownPagePOM.getDropDownFromSelect$DisabledTopic.find('option').should('be.disabled')
            } else {
                DropDownPagePOM.getDropDownFromSelect$DisabledTopic.select(fruit).should('be.enabled')
            }
        })
    }
    getFooter() {
        DropDownPagePOM.getFooter.should('exist').and('have.text', 'Copyright © www.GianniBruno.com')
    }
}

export const drop_down_page_steps = new DropDownPageSteps;