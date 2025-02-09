import { login } from '../login_screen/login_case1.cy';

describe('Cadastrar uma nova conta/despesa', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E cadastro uma movimentação
  //E faço um fluxo completo
  //QUANDO clicar em extrato
  //ENTÃO deve conter toda a movimentação cadastrada
  it('Cadastrar uma nova conta/despesa', () => {
    cy.visit('https://seubarriga.wcaquino.me/addConta')
    cy.get('#nome').type('Água')
    cy.get('.btn').click()
    cy.get('.alert').contains('Conta adicionada com sucesso!')
  })
})