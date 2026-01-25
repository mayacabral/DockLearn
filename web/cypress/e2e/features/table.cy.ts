describe('Página pessoal - Tabela de tarefas', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/tasks', {
      statusCode: 200,
      body: [
        { title: 'Tarefa Teste 1', status: 'Não iniciado' },
        { title: 'Tarefa Teste 2', status: 'Concluído' },
      ],
    }).as('getTasks');
  });

  it('deve exibir as tarefas na tabela', () => {
    cy.visit('/pagina-pessoal'); // ajuste a URL se necessário


    cy.get('tbody tr').should('have.length', 3);
    cy.contains('Contribuinte Legal – Regularize Fácil').should('exist');
    cy.contains('Desenvolvimento da Plataforma Digital').should('exist');
    cy.contains('Fofinhos Developer').should('exist');
  });
});
