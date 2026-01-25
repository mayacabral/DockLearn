// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session(
    email,
    () => {
      cy.visit('/');
      cy.get('input[data-cy=email]').type(email);
      cy.get('input[data-cy=password]').type(`${password}{enter}`, {
        log: false,
      });
      cy.url().should('include', '/pagina-pessoal');
      cy.get('span.subtitle-user').should('contain', email);
    },
    {
      validate: () => {
        cy.window().then((window) => {
          expect(window.sessionStorage.getItem('token')).to.exist;
        });
      },
    }
  );
});

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable;
  }
}