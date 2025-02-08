import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Teste campo *Situação*, Para conta com situação paga, Deve impedir a criação com uma data do pagamento futuro', () => {

  login()

  //DADO que acesso a página de Movimentação
  //E digito letras no campo Data da Movimentação
  //Deve retornar uma mensagem de erro
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('10/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    //O programa falhou, permitiu criar uma conta com status de paga, mas colocando a data que foi paga em um tempo futuro.
  })

})