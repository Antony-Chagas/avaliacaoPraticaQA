import { login } from '../../../support/function_login.cy';

describe('Cadastrar uma nova conta/despesa', () => {

  login()

  it('Cadastrar uma nova conta/despesa', () => {
    cy.visit('https://seubarriga.wcaquino.me/addConta')
    cy.get('#nome').type('Luz')
    cy.get('.btn').click()
    cy.get('.alert').contains('Conta adicionada com sucesso!')
  })
})