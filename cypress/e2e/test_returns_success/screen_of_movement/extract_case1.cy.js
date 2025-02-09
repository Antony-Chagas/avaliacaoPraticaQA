import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Cadastrar uma movimentação com sucesso e apresentar as movimentações', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E cadastro uma movimentação
  //E faço um fluxo completo
  //QUANDO clicar em extrato
  //ENTÃO deve conter toda a movimentação cadastrada
  it('Cadastrar uma movimentação com sucesso e apresentar as movimentações', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    cy.visit('https://seubarriga.wcaquino.me/extrato')
  })
})