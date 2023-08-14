// ***********************************************
import { months } from "../test-data/data_picker_datas"
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.overwrite('waitUntil', (originalFn, subject, callback, options) => {
//   const customOptions = {
//     ...options,
//     timeout: 10000, // Увеличьте это значение на ваше усмотрение (в миллисекундах)
//   };

//   return originalFn(subject, callback, customOptions);
// });

// Cypress.Commands.add('findMonth', function(month) {
//     if(month === months[''])
// })



// function getCountOfdays(month) {
//     if (month === months[3] || month === months[5] || month === months[8] || month === months[10]) {
//         randomDay = Math.floor(Math.random() * 30)
//         cy.log(randomDay)
//         return randomDay
//     }
//     // } else if()
// }