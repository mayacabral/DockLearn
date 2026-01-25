describe('Perspectiva', () => {
  it('should load Lista de perspectivas', () => {
    cy.visit('/perspectiva');
    cy.get('app-perspectiva').should('exist');
    cy.get('.tag-id').should('contain', '#1');
  });
});
