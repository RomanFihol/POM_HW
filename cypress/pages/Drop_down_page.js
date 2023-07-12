/// <reference types="Cypress" />

export class DropDownPage {
    visit() {
        cy.visit('www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    getTopickByTitle(arrayOfTitles) {
        arrayOfTitles.forEach(title => {
            return cy.xpath(`//div[@class="thumbnail"]/h2[contains(text(),"${title}")]`)
                .invoke('text').should('eq', title)
        });
    }

    getCountOfTopics() {
        return cy.xpath('//div[@class="thumbnail"]').should('have.length', 4);
    }

    getDropDownById(id) {
        return cy.get(`select#dropdowm-menu-${id}`);
    }
    getAllTheValuesOfDropDown(arrayOfValues, idOfDropDown) {
        arrayOfValues.forEach(value => {
            let element = value.toLowerCase().trim();
            this.getDropDownById(idOfDropDown).should('exist').select(element).invoke('val').should('eq', value);
        })
    }


    getCheckBoxesByID(id) {
        cy.xpath(`//div[@id='checkboxes']//input[@value='option-${id}']`).uncheck().should('not.be.checked')
        cy.xpath(`//div[@id='checkboxes']//input[@value='option-${id}']`).check().should('be.checked')
    }
    getCheckBoxes(id, arrayOfID) {
        cy.xpath(`//div[@id='checkboxes']//input[@value='option-3']`).uncheck().should('not.be.checked')
        arrayOfID.forEach(valueOfId => { 
            if (id !== valueOfId) { 
                cy.xpath(`//div[@id='checkboxes']//input[@value='option-${valueOfId}']`).should('not.be.checked');
            }
            else {
                cy.xpath(`//div[@id='checkboxes']//input[@value='option-${id}']`).check().should('be.checked');
            }
        })
    }



    getAllCheckboxes() {
        cy.get('input[type="checkbox"]').each($el => {
            let el = $el;
            cy.wrap(el).check().should('be.checked').uncheck().should('not.be.checked');
        })
    }

    getRadioButtons(colors) {
        colors.forEach(colorValue => {
            cy.xpath('//form[@id="radio-buttons"]').find('input').check(colorValue).
                should('be.checked').should('have.value', colorValue);
        })
    }

    getSelected$DisabledButtons() {
        cy.get('#radio-buttons-selected-disabled>input').each(($el) => {
            cy.wrap($el).invoke('val').then((text) => {
                if (text === 'lettuce') {
                    cy.get('#radio-buttons-selected-disabled>input[value="lettuce"]')
                        .should('not.be.checked').check().should('be.checked').uncheck();
                }
                else if (text === 'cabbage') {
                    cy.get('#radio-buttons-selected-disabled>input[value="cabbage"]').should('be.disabled');
                }
                else {
                    cy.get('#radio-buttons-selected-disabled>input[value="pumpkin"]').should('be.checked');
                }
            })
        })
    }
}
