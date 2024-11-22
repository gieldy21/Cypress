// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

Cypress.Commands.add('login', () => {
    cy.visit('https://www.saucedemo.com/'); // URL aplikasi Anda
    cy.get('#user-name').type('standard_user'); // Masukkan username
    cy.get('#password').type('secret_sauce'); // Masukkan password
    cy.get('#login-button').click(); // Klik tombol login
    cy.url().should('include', '/inventory.html'); // Verifikasi login berhasil
});


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