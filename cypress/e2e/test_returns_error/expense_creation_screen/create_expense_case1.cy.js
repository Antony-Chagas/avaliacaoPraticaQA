import { login } from '../../testing_functions/function_login.cy';

describe('Cadastrar uma nova conta', () => {

  login()
  
  it('Cadastrar uma nova conta com um nome já existente', () => {
    cy.visit('https://seubarriga.wcaquino.me/addConta')
    cy.get('#nome').type('Água')
    cy.get('.btn').click()
    cy.get('.alert').contains('Já existe uma conta com esse nome!')
  })
})