describe('Novo cadastro com campo vazio', () => {

  //DADO que acesso a página de Novo Usuário
  //E deixe os campos senha, email e nome vazio
  //QUANDO clico no botão de Cadastrar
  //ENTÃO deve ser exibida a mensagem de erro

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
    cy.get('.btn').click()

    cy.get('.alert').contains('Senha é um campo obrigatório')
    cy.get('.alert').contains('Nome é um campo obrigatório')
    cy.get('.alert').contains('Email é um campo obrigatório')
  })
})