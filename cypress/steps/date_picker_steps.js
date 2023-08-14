/// <reference types = "cypress"/>

import { DatePicker } from "../pages/Date_picker_PO";
import { months } from "../test-data/data_picker_datas";

const currentDay = new Date();
const currentMonth = new Date();
const currentYear = new Date();
let id = 1;
const currYear = currentYear.getFullYear();
const randomYear = Math.floor(Math.random() * 201) - 100 + currYear;
const randomMonth = Math.floor(Math.random() * 12);
let randomDay;
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}
function getRandomOfdays(month) {
    if (month === months[3] || month === months[5] || month === months[8] || month === months[10]) {
        randomDay = Math.floor(Math.random() * 30) + 1;
        return randomDay
    } else if (month === months[1] && isLeapYear == false) {
        randomDay = Math.floor(Math.random() * 28) + 1;
        return randomDay
    } else if (month === months[1] && isLeapYear) {
        return randomDay = Math.floor(Math.random() * 29) + 1;
    } else {
        return randomDay = Math.floor(Math.random() * 31) + 1;
    }

}

export class DatePickerSteps {

    ExpandCalendar() {
        DatePicker.getCalendarButton.click();
    }

    getChangeMonthOption() {
        DatePicker.getMonthChange.click();
    }

    setRandomDate() {
        getRandomOfdays(months[randomMonth])
        isLeapYear(randomYear)

        if (currYear > randomYear) {
            for (let i = 0; i < (currYear - randomYear); i++) {
                DatePicker.getPrevYear.click()
            }
        } else if (currYear < randomYear) {
            for (let i = 0; i < (randomYear - currYear); i++) {
                DatePicker.getNextYear.click()
            }
        }
        const data = new Date(randomYear, randomMonth, randomDay);
        const day = data.getDate().toString().padStart(2, '0')
        const month = (data.getMonth() + 1).toString().padStart(2, '0');
        const year = data.getFullYear().toString()
        const fullDate = `${month}-${day}-${year}`
        cy.contains(months[randomMonth].substring(0, 3)).click()
        cy.xpath(`//td[@class="day" and text()=${randomDay}]`).click();
        DatePicker.getPickerDate.invoke('val').should('eq', fullDate)
    }
    getCalendar() {
        DatePicker.gatCalendar.should('be.visible')
    }
    typeNeddedDate() {
        function getNextDay() {
            const nextDay = new Date(currentDay);
            nextDay.setDate(currentDay.getDate() + 1);
            return nextDay;
        }
        function getNextMonth() {
            const nextMonth = new Date(currentDay);
            nextMonth.setMonth(currentMonth.getMonth() + 2)
            return nextMonth;
        }
        function getNextYear() {
            const nextYear = new Date(currentDay);
            nextYear.setFullYear(currentYear.getFullYear() + 1);
            return nextYear;
        }
        const neededDay = getNextDay();
        let dayAsString = String(neededDay.getDate());
        if (dayAsString < 10) {
            dayAsString = '0' + dayAsString;
        }
        const neededMonth = getNextMonth();
        let monthAsString = String(neededMonth.getMonth());
        if (monthAsString < 10) {
            monthAsString = '0' + monthAsString;
        }
        const neededYear = getNextYear();
        let yearAsString = String(neededYear.getFullYear());

        let fullDateAsString = monthAsString + '-' + dayAsString + '-' + yearAsString
        DatePicker.getPickerDate.invoke('removeAttr', 'readonly').clear().type(fullDateAsString)
        return fullDateAsString
    }

    setAssertions() {
        const data = new Date();
        const day = (data.getDate() + 1).toString().padStart(2, '0')
        const month = (data.getMonth() + 2).toString().padStart(2, '0');
        const year = (data.getFullYear() + 1).toString()
        const fullDate = `${month}-${day}-${year}`
        DatePicker.getPickerDate.invoke('val').should('eq', fullDate)
    }

}

export const data_picker_step = new DatePickerSteps();