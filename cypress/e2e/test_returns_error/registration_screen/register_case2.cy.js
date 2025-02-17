describe('Novo cadastro com campo vazio', () => {

  it('Novo cadastro com todos os campos vazio', () => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
    cy.get('.btn').click()
    cy.get('.alert').contains('Senha é um campo obrigatório')
    cy.get('.alert').contains('Nome é um campo obrigatório')
    cy.get('.alert').contains('Email é um campo obrigatório')
  })
})