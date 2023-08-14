import { general_steps } from "../steps/general_steps";
import { hidden_elements_steps } from "../steps/hidden_elements_steps";

describe('Verifying Hidden Elements Page', () => {

    beforeEach(() => {
        general_steps.visitHiddenElementsPage;
        cy.once('uncaught:exception', () => false)
    })

    it('Check "Not Displayed Button"', () => {
        hidden_elements_steps.changeDisplyedStatusByHTML();
    })
    it('Check "Visability Hidden Button"', () => {
        hidden_elements_steps.clickVisabilityHiddenButton();
    })
    it('Check "Zero Capacity Button"', () => {
        hidden_elements_steps.clickZeroCapacityButton();
    })
    it.only('Test', () => {
        // hidden_elements_steps.triggerEvent({name: 'Ivan', age: 23})
        //cy.task('openFileIfExist','"C:\\Users\\Roman\\approach.txt"')
        cy.task('checkCountOfFilesInFolder', 'C:\\Users\\Roman\\Courses').then((count)=>{
            cy.log(count);
           })
       // hidden_elements_steps.triggerEvent('C:\\Users\\Roman\\Downloads\\file_example_XLS_10.xls')
    })
})