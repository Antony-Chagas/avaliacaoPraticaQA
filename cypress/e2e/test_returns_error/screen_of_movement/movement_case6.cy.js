import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Situação*', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito letras no campo Data da Movimentação
  //Deve retornar uma mensagem de erro
  it('Para conta com situação paga, Deve impedir a criação com uma data do pagamento futuro', () => {

    movementForm("Despesa", "07/02/2025", "10/02/2025", "Conta de água", "Proprietário", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    //O programa falhou, permitiu criar uma conta com status de paga, mas colocando a data que foi paga em um tempo futuro.
  })
})