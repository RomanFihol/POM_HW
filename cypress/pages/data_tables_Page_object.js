export class DataTablesPageObject {

    static get getTable1() {
        return cy.get('table#t01 tbody')
    }
    static get getTable2() {
        return cy.get('table#t02 tbody')
    }
    static get getFirstNameForm() {
        return cy.get('form#form-textfield input[name="firstname"]')
    }
    static get getLastNameForm() {
        return cy.get('form#form-textfield input[name="lastname"]')
    }
    static get getCommentAreaForm() {
        return cy.get('form#form-textfield textarea')
    }

    static get CountOfTopics(){
        return cy.xpath('//div[@class="thumbnail"]')
    }
    static get getBreadcrumbTopic(){
        return cy.xpath('//ol[@class="breadcrumb traversal-breadcrumb"]')
    }
    

}

export const data_table_PO = new DataTablesPageObject();