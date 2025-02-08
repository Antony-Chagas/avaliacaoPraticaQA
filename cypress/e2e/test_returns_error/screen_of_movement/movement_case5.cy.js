import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Teste campo *Campo valor*, Deve aceitar apenas valores numéricos positivos e Deve formatar corretamente no padrão monetário (R$ 0.000,00)', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito valores negativo no campo Data Valor
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('-60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    //O programa falhou, permitiu o cadastro de um valor negativo no campo valor.
  })

  //DADO que acesso a página de Movimentação
  //E digito valor 0 no campo Data Valor
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('0')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    //O programa falhou, permitiu o cadastro do valor 0 no campo valor. 
  })

  //DADO que acesso a página de Movimentação
  //E digito valor formmato Real(R$) no campo Data Valor
  //Deve retornar sucesso na criação da movimentação.
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('1.111,00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    //O programa falhou, o mesmo não formata os números colocados pelo usuário para o real, mesmo o usuário colocando o número correto, retorna erro. 
  })

})