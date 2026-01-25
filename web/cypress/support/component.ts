import { mount } from 'cypress/angular';
import '@angular/compiler'; 

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
