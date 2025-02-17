describe('Login com os dados vazio', () => {

  it('Login com o campo email em vazio', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#senha').type('12345')
    cy.get('.btn').click()
    cy.get('.alert').contains('Email é um campo obrigatório')
  })

  it('Login com o campo senha em vazio', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('antony.teste@gmail.com')
    cy.get('.btn').click()
    cy.get('.alert').contains('Senha é um campo obrigatório')
  })
})