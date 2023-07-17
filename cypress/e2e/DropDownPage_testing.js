/// <reference types = "Cypress"/> 

import { DropDownPage } from "../pages/Drop_down_page"
import { checkboxIDs, dropDown1, fruits, radionButtonsValues, titles } from "../test-data/data_for_dropdown_page";
import { testData } from "../test-data/data_for_dropdown_page";
const drop_down_page = new DropDownPage;

describe('Verify all the values from static dropdown list', () => {
    beforeEach(() => {
        drop_down_page.visit();
    })

    it('Check if all the topics are presented', () => {
        drop_down_page.getCountOfTopics();
        drop_down_page.getTopickByTitle(titles);

    })

    it('Check DropDown Menu(s) topic', () => {
        testData.forEach((data => {
            drop_down_page.getAllTheValuesOfDropDown(data.array, data.id);
        }))
    })

    it('Checkboxes test', () => {
        drop_down_page.getAllCheckboxes();
        drop_down_page.getCheckBoxes(2, checkboxIDs);
    })
    it('Check Radio Buttins', () => {
        drop_down_page.getRadioButtons(radionButtonsValues);
    })

    it.only('Check Selected & Disabled topic', () => {
        drop_down_page.getSelected$DisabledButtons();
        drop_down_page.getDropDownFromSelect$DisabledTopic();
    })

})