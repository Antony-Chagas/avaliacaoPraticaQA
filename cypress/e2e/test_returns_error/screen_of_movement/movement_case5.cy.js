import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Campo valor*', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito valores negativo no campo Data Valor
  //Deve retornar uma mensagem de erro
  it('Deve aceitar apenas valores numéricos positivos', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", -60.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    //O programa falhou, permitiu o cadastro de um valor negativo no campo valor.
  })

  //DADO que acesso a página de Movimentação
  //E digito valor 0 no campo Data Valor
  //Deve retornar uma mensagem de erro
  it('Deve aceitar apenas valores numéricos maior que 0', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", 0.00, "Água")

    cy.get('.alert').contains('Movimentação adicionada com sucesso!')
    //O programa falhou, permitiu o cadastro do valor 0 no campo valor. 
  })

  //DADO que acesso a página de Movimentação
  //E digito valor formmato Real(R$) no campo Data Valor
  //Deve retornar sucesso na criação da movimentação.
  it('Deve formatar corretamente no padrão monetário (R$ 0.000,00)asses', () => {

    movementForm("Despesa", "07/02/2025", "07/02/2025", "Conta de água", "Proprietário", '1.111,00', "Água")

    cy.get('.alert').contains('Valor deve ser um número')
    //O programa falhou, o mesmo não formata os números colocados pelo usuário para o real, mesmo o usuário colocando o número correto, retorna erro. 
  })
})