import { data_table_steps } from "../steps/data_table_steps";
import { general_steps, mainPageTitle } from "../steps/general_steps";
import { activeClass, table1, table2, topicsTitle } from "../test-data/data_tables";
//import { hakku2 } from "../test-data/data_tables";
const arrayID = new Array()

describe('Data, Tables & Button States page testing', () => {
    beforeEach(() => {
        general_steps.visitDataAndTablesPage();
    })

    it("Verify column's titles of tables ", () => {
        data_table_steps.checkTable1ColumnTitles();
        data_table_steps.checkTable2ColumnTitles();
    })

    it('Verify content of Tabless', () => {
        for (let i = 1; i <= table1.length; i++) {
            arrayID.push(i)
        }
        arrayID.forEach((ID) => {
            data_table_steps.checkTable1(ID);
        })
        for (let i = 1; i <= table2.length; i++) {
            arrayID.push(i)
        }
        arrayID.forEach((ID) => {
            data_table_steps.checkTable2(ID);
        })
    })

    it('Check Form', () => {
         data_table_steps.checkFirstNameForm('First name');
         data_table_steps.checkLastNameForm('Last name')
        //data_table_steps.checkCommentArea(hakku2);
        data_table_steps.checkCountOfTopics();
    })

    it.only('Check Topics', () => {
       data_table_steps.checkCountOfTopics(topicsTitle);
       data_table_steps.checkBreadcrumbTopic(activeClass);

   })
})