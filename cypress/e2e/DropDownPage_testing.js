/// <reference types = "Cypress"/> 

import DropDownPagePOM from "../pages/Drop_down_pagePOM"
import { drop_down_page_steps } from "../steps/drop_down_page_steps";
import { checkboxIDs, dropDown1, dropDown2, dropDown3, fruits, radionButtonsValues, titles } from "../test-data/data_for_dropdown_page";
import { testData } from "../test-data/data_for_dropdown_page";
import { drop_down_page } from "../pages/Drop_down_pagePOM";

describe('Verify all the values from static dropdown list', () => {
    beforeEach(() => {
        drop_down_page.visit();
    })

    it('Verify that all the objects are present', () => {
        drop_down_page_steps.checkWebDiwerLinkStep();
        drop_down_page_steps.checkMainTitleStep();
        drop_down_page_steps.getTopickByTitleStep();
        drop_down_page_steps.getFooter();
    })

    it('Check DropDown Menu(s) topic', () => {
        testData.forEach((data) => {
            drop_down_page_steps.getAllTheValuesOfDropDownStep(data.array, data.id)
        })
    })
    it.only('Checkboxes test', () => {
        drop_down_page_steps.checkCheckBoxes();
       // drop_down_page.getCheckBoxes(2, checkboxIDs);
    })
    it('Check Radio Buttins', () => {
        drop_down_page.getRadioButtons(radionButtonsValues);
    })

    it('Check Selected & Disabled topic', () => {
        drop_down_page.getSelected$DisabledButtons();
        drop_down_page.getDropDownFromSelect$DisabledTopic();
    })

})