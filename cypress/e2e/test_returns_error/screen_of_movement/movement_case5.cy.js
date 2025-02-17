import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Campo valor*', () => {

  login()

  it('Deve aceitar apenas valores numéricos positivos', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", -60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
  })

  it('Deve aceitar apenas valores numéricos maior que 0', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", 0.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
  })

  it('Deve formatar corretamente no padrão monetário (R$ 0.000,00)asses', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", '1.111,00', "Água")

    cy.get('.alert').contains('Valor deve ser um número')
  })
})