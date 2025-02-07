describe('template spec', () => {

  //DADO que acesso a página de Login
  //E digito o email recém cadastrado
  //E a senha válida
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de Bem vindo

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type('antony@gmail.com')
    cy.get('#senha').type('1234')
    cy.get('.btn').click()

    cy.get('.alert').contains('Bem vindo, Antony!')
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
    cy.get('#conta').select('')
    // Não foi possível seguir com o teste, a tag select de id="conta", exige a seleção de um item, mas não tem nenhuma opção disponível.
  })

})