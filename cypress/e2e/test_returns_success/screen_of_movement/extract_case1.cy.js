import { login } from '../../../support/function_login.cy';
import movementForm from '../../../support/function_moviment.cy'

describe('Cadastrar uma movimentação com sucesso e apresentar as movimentações', () => {

  login()

  it('Cadastrar uma movimentação com sucesso e apresentar as movimentações', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    cy.visit('https://seubarriga.wcaquino.me/extrato')
  })
})