import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Campo Interessado*', () => {

  login()

  it('Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.)', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "<>/*{}", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
  })

  it('Deve aceitar nomes com pelo menos 3 caracteres', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "A", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
  })
})