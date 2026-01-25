describe('Perspectiva Objetivos', () => {
  it('should load Lista de objetivos', () => {
    cy.visit('/perspectiva/0000/objetivos');
    cy.get('app-objetivos').should('exist');
    cy.get('.tag-id-perspectiva').should('contain', '#1');
  });
});
