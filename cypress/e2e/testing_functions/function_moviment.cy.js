export default function movementForm(despesa, data_transacao, data_pagamento, descricao, interessado, valor, conta) {
    cy.visit('https://seubarriga.wcaquino.me/movimentacao')
    cy.get('#tipo').select(despesa)
    cy.get('#data_transacao').type(data_transacao)
    cy.get('#data_pagamento').type(data_pagamento)
    cy.get('#descricao').type(descricao)
    cy.get('#interessado').type(interessado)
    cy.get('#valor').type(valor)
    cy.get('#conta').select(conta)
    cy.get('[for="status_pago"]').click()
    cy.get('.btn').click()
}