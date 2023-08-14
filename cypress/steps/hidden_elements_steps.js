import { Hidden_elements_Page_Objects } from "../pages/Hidden_elements_Page_Object.js";

export class HiddenElementsSteps{

    visti(){
        cy.visit('http://www.webdriveruniversity.com/Hidden-Elements/index.html')
    }
    clickNoteDisplayedButton(){
        Hidden_elements_Page_Objects.getNotDisplayedButton.should('not.be.visible')
        Hidden_elements_Page_Objects.getNotDisplayedButton.click({force: true}).should('be.not.visible');
    }

    changeDisplyedStatusByHTML(){
        cy.xpath('//div[@id="not-displayed"]').invoke('css', 'display', 'block')
        Hidden_elements_Page_Objects.getNotDisplayedButton.click();
    }
    clickVisabilityHiddenButton(){
        Hidden_elements_Page_Objects.getVisabilityButtonButton.click();
    }
    clickZeroCapacityButton(){
        Hidden_elements_Page_Objects.getZeroOpacityButton
    }
    triggerEvent(FolderPath){
        cy.task('checkCountOfFilesInFolder',`${FolderPath}`).then((count) => {
            cy.log(count)
         })
       // cy.task('testXLSfile', `${FolderPath}`)
    }
}

export const hidden_elements_steps = new HiddenElementsSteps();