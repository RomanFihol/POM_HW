
//import { find } from "cypress/types/lodash";
//import { invoke } from "cypress/types/lodash";
//import { invoke } from "cypress/types/lodash";
import { DataTablesPageObject} from "../pages/data_tables_Page_object";
import { columnsTitle, table1, table2 } from "../test-data/data_tables";

export class DataTableSteps {

    checkTable1ColumnTitles() {
        const columns = new Array();
        DataTablesPageObject.getTable1.find('tr').find('th').each(($el) => {
            let title = $el.text();
            columns.push(title)
        }).then(() => {
            expect(columns).to.deep.equal(columnsTitle)
        })
    }
    checkTable2ColumnTitles() {
        const columns = new Array();
        DataTablesPageObject.getTable2.find('tr').find('th').each(($el) => {
            let title = $el.text();
            columns.push(title)
        }).then(() => {
            expect(columns).to.deep.equal(columnsTitle)
        })
    }

    checkTable1(id) { //check table 1
        DataTablesPageObject.getTable1.find('tr').each((row, rowIndex) => {
            if (rowIndex == id) {
                cy.wrap(row).find('td').then((cells) => {
                    const name = cells.eq(0).text();
                    expect(name).to.equal(table1[id - 1].First_name)
                    const surname = cells.eq(1).text();
                    expect(surname).to.equal(table1[id - 1].Last_name)
                    const age = cells.eq(2).text();
                    const ageAsInt = Number(age);
                    expect(ageAsInt).to.equal(table1[id - 1].Age)
                })
            }
        })
    }

    checkTable2(id) { //check table 2
        DataTablesPageObject.getTable2.find('tr').each((row, rowIndex) => {
            if (rowIndex == id) {
                cy.wrap(row).find('td').then((cells) => {
                    const name = cells.eq(0).text();
                    expect(name).to.equal(table2[id - 1].First_name)
                    const surname = cells.eq(1).text();
                    expect(surname).to.equal(table2[id - 1].Last_name)
                    const age = cells.eq(2).text();
                    const ageAsInt = Number(age);
                    expect(ageAsInt).to.equal(table2[id - 1].Age)
                })
            }
        })
    }
    checkFirstNameForm(someText) {
        DataTablesPageObject.getFirstNameForm.should('exist').type(someText).
            should('have.value', someText).clear().should('have.value', '');
    }
    checkLastNameForm(someText) {
        DataTablesPageObject.getLastNameForm.should('exist').type(someText).
            should('have.value', someText).clear().should('have.value', '');
    }
    checkCommentArea(hakku) {
        DataTablesPageObject.getCommentAreaForm.should('exist').type(hakku).
            should('have.value', hakku).clear().should('have.value', '');
    }

    checkCountOfTopics(topicArray) {
        const arrayOfTopics = new Array();
        DataTablesPageObject.CountOfTopics.should('have.length', 8).find('h2').should('have.length', 7).
            each(($topicName) => {
                let title = $topicName.text();
                arrayOfTopics.push(title)
            }).then(() => {
                expect(arrayOfTopics).to.deep.equal(topicArray)
            })
    }
    checkBreadcrumbTopic(activeClass) {
        DataTablesPageObject.getBreadcrumbTopic.find('li').should('have.length', 3).each(($el) => {
           let a = $el.text()
           if (a === activeClass){
            cy.wrap($el).should('have.class','breadcrumb-item active')
           }
        })
    }
}

export const data_table_steps = new DataTableSteps();