import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Teste campo *Campo Descrição*, Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.)', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito caracteres especiais indevidos no Campo Descrição 
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('<>/*{}')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    // O programa falhou, pedmitiu o cadadastro de uma movimentação com caracteres especiais indevidos no campo descrição, podendo comprometer a segurança da aplicação.
  })
})