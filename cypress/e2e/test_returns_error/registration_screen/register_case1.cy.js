describe('Novo cadastro com dados existentes ', () => {

  //DADO que acesso a página de Novo Usuário
  //E digito um nome, senha válidos
  //E digito um email já existente
  //QUANDO clico no botão de Cadastrar
  //ENTÃO deve ser exibida a mensagem de erro

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
    cy.get('#nome').type('Antony')
    cy.get('#email').type('antony@gmail.com')
    cy.get('#senha').type('1234')
    cy.get('.btn').click()

    cy.get('.alert').contains('Endereço de email já utilizado')
  })
})