import  {login} from '../login_screen/login_case1.cy';

describe('Cadastrar uma movimentação com sucesso', () => {

  it('passes', () => {
    login()
  })

  //DADO que acesso a página de Movimentação
  //E cadastro uma movimentação
  //E faço um fluxo completo
  //QUANDO clicar em extrato
  //ENTÃO deve conter toda a movimentação cadastrada

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')

    cy.get('#tipo').select('Despesa')
    cy.get('#data_transacao').type('07/02/2025')
    cy.get('#data_pagamento').type('07/02/2025')
    cy.get('#descricao').type('Conta de água')
    cy.get('#interessado').type('Proprietário')
    cy.get('#valor').type('60.00')
    cy.get('#conta').select('Água')
    cy.get('[for="status_pago"]').click()

    cy.get('.btn').click()
    cy.get('.alert').contains('Movimentação adicionada com sucesso!')

    cy.visit('https://seubarriga.wcaquino.me/extrato')
    
  })

})