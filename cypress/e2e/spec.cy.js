describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('antony.tiagor445@gmail.com')
    cy.get('#senha').type('11111')
    cy.get('.btn').click()

    cy.get('.body-index > :nth-child(2)').contains('Problemas com o login do usuário')
  })
})