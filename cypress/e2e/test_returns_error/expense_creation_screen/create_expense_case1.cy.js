import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Cadastrar uma nova conta com um nome já existente', () => {

  it('passes', () => {
    login()
  })

  //DADO que acesso a página de Movimentação
  //E cadastro uma movimentação
  //E faço um fluxo completo
  //QUANDO clicar em extrato
  //ENTÃO deve conter toda a movimentação cadastrada

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/addConta')
    cy.get('#nome').type('Água')

    cy.get('.btn').click()

    cy.get('.alert').contains('Já existe uma conta com esse nome!')
  })
})