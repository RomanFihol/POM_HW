export class Hidden_elements_Page_Objects {

    static get getNotDisplayedButton() {
        return cy.get('span#button1')
    }
    static get getVisabilityButtonButton() {
        return cy.get('span#button2')
    }
    static get getZeroOpacityButton() {
        return cy.get('span#button3')
    }
    static get getModalClick() {
        return cy.get('#myModalClick')
    }
    static get getmyModalJSClick() {
        return cy.get('#myModalJSClick')
    }
    static get getmyModalMoveClick() {
        return cy.get('#myModalMoveClick')
    }
}