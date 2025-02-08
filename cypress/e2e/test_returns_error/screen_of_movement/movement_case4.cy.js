import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Teste campo *Campo Interessado*, Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.) e Deve aceitar nomes com pelo menos 3 caracteres.', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito caracteres especiais indevidos no Campo Descrição 
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('<>/*{}')
    cy.get('#valor').type('60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    // O programa falhou, permitiu o cadastro de uma movimentação com caracteres especiais indevidos no campo Interessado, podendo comprometer a segurança da aplicação.
  })

  //DADO que acesso a página de Movimentação
  //E digito caracteres especiais indevidos no Campo Descrição 
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('A')
    cy.get('#valor').type('60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    // O programa falhou, pedmitiu o cadadastro de uma movimentação com o campo Interessado com menos de 3 caracteres
  })


})