export class DatePicker {

    static get getPickerDate() {
        return cy.get('input.form-control')
    }

    static get getCalendarButton() {
        return cy.get('span.input-group-addon')
    }

    static get getMonthChange(){
        return cy.xpath('//table[@class=" table-condensed"]//th[@class="datepicker-switch"]');
    }

    static get getPrevYear(){
        return cy.get('div[style = "display: block;"] th.prev');
    }

    static get getNextYear(){
       return cy.get('div[style = "display: block;"] th.next')
    }

    static get getAllYears(){
        return cy.get('div[style="display: block;"]');
    }

    static get getYearChange (){
        return cy.get('div.datepicker-months table.table-condensed thead tr th.datepicker-switch:nth-child(2)')
    }

    static get gatCalendar() {
        return cy.xpath('//div[@class="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-top"]')
    }
    
    static get getShwonYear() {
        return cy.xpath('//div[@class="datepicker-days"]//table//thead//tr//th[@class="datepicker-switch"]')
    }

    static get getActiveDate(){
        return cy.xpath('//td[@class="active day"]')
    }
}

export const data_picker_po = new DatePicker();
