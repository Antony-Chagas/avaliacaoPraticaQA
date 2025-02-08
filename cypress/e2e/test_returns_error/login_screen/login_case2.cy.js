describe('Login com os dados vazio', () => {

  //DADO que acesso a página de Login
  //E deixo o campo email em branco
  //E uma senha válida
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de erro

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#senha').type('12345')
    cy.get('.btn').click()

    cy.get('.alert').contains('Email é um campo obrigatório')
  })


  //DADO que acesso a página de Login
  //E digito um email válido
  //E deixo o campo senha em branco
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de erro

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('antony.teste@gmail.com')
    cy.get('.btn').click()

    cy.get('.alert').contains('Senha é um campo obrigatório')
  })

})