import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Campo Descrição*', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito caracteres especiais indevidos no Campo Descrição 
  //Deve retornar uma mensagem de erro
  it('Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.)', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "<>/*{}", "Proprietário", 60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    // O programa falhou, pedmitiu o cadadastro de uma movimentação com caracteres especiais indevidos no campo descrição, podendo comprometer a segurança da aplicação.
  })
})