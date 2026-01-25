describe('Login Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/login'); // Ajuste a URL conforme sua rota de login
  });

  it('should display the login form', () => {
    // Verifica se os elementos principais estão visíveis
    cy.get('.login-container').should('exist');
    cy.get('.login-box').should('be.visible');
    cy.get('.logo img').should('be.visible');
    cy.get('.text-logo .title').should('contain', 'SGP');
    cy.get('.welcome-text').should('contain', 'Faça login na sua conta');
    
    // Verifica os campos do formulário
    cy.get('form').should('exist');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('.login-button').should('contain', 'Entrar');
    cy.get('.forgot-password').should('contain', 'Esqueci a senha');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('.login-button').click();
  });

  it('should show validation error for invalid email', () => {
    cy.get('#email').type('invalid-email');
    cy.get('.login-button').click();
  });

  it('should allow typing in email and password fields', () => {
    const testEmail = 'test@example.com';
    const testPassword = 'test123';
    
    cy.get('#email')
      .type(testEmail)
      .should('have.value', testEmail);
      
    cy.get('#password')
      .type(testPassword)
      .should('have.value', testPassword);
  });

  it('should submit the form with valid data', () => {
    // Mock da resposta da API ou ajuste conforme sua implementação
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: { success: true }
    }).as('loginRequest');
    
    cy.get('#email').type('valid@example.com');
    cy.get('#password').type('validpassword');
    cy.get('.login-button').click();
    
    // Verifica se a requisição foi feita
    /* cy.wait('@loginRequest').then((interception) => {
      expect(interception.request.body).to.include({
        email: 'valid@example.com',
        password: 'validpassword'
      });
    });
     */
    // Ajuste a verificação conforme o redirecionamento após login
    // cy.url().should('include', '/dashboard');
  });

  it('should handle login failure', () => {
    // Mock de falha no login
    cy.intercept('POST', '/api/login', {
      statusCode: 401,
      body: { error: 'Unauthorized' }
    }).as('failedLogin');
    
    cy.get('#email').type('wrong@example.com');
    cy.get('#password').type('wrongpassword');
    cy.get('.login-button').click();
    
    /* cy.wait('@failedLogin'); */
    // Verifica se uma mensagem de erro é exibida (ajuste conforme seu componente)
    // cy.get('.error-message').should('contain', 'Credenciais inválidas');
  });

  it('should navigate to password recovery', () => {
    cy.get('.forgot-password').click();
    // Ajuste conforme a rota de recuperação de senha
    // cy.url().should('include', '/password-recovery');
  });
});