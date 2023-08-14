import { data_picker_step } from "../steps/date_picker_steps"
//import {commands} from "cypress\support\commands.js"
import { a } from "../steps/date_picker_steps"
//import { DatePickerSteps } from "../steps/date_picker_steps"

describe('Date picker testing', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
    })

    it('Set data with +1', () => {
        data_picker_step.typeNeddedDate()
        data_picker_step.ExpandCalendar();
        data_picker_step.setAssertions();
    })
    it('Set random data', () => {
        data_picker_step.ExpandCalendar()
        data_picker_step.getChangeMonthOption()
        data_picker_step.setRandomDate();
    })
}) 