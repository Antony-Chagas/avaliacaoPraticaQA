import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Data do Pagamento*', () => {

  login()

  it('Deve aceitar apenas datas válidas e no formato formato DD/MM/AAAA', () => {

    movementForm("Despesa", "07/02/2025", "aa/aa/aaaa", "Conta de água", "Proprietário", 60.00, "Água")

    cy.get('.alert').contains('Data do pagamento inválida (DD/MM/YYYY)')
  })
})