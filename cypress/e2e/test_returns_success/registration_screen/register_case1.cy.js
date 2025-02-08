describe('Cadastrar um novo usuário com sucesso ', () => {

  //DADO que acesso a página de Novo Usuário
  //E digito um nome, email e senha válidos
  //QUANDO clico no botão de Cadastrar
  //ENTÃO deve ser exibida a mensagem de sucesso

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
    cy.get('#nome').type('Antony')
    cy.get('#email').type('antony@gmail.com')
    cy.get('#senha').type('1234')
    cy.get('.btn').click()

    cy.get('.alert').contains('Usuário inserido com sucesso')
  })
})