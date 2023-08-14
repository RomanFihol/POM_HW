class GeneralSteps {
    visitDataAndTablesPage() {
        return cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    }
    // getMainTitle(){
    //     return cy.get('div#main-header').find('h1').each(($text)=>{
    //         let a = $text.text();
    //        if(a===mainPageTitle){
    //         cy.url().should('contain', 'Data-Table')
    //        }
    //     })
    // }
}

//export let mainPageTitle = 'Data, Tables & Button States';

export const general_steps = new GeneralSteps();