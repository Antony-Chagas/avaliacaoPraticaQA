import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Teste campo *Data da Movimentação*, Deve aceitar apenas datas válidas e no formato formato DD/MM/AAAA', () => {

    login()

    //DADO que acesso a página de Movimentação
    //E digito letras no campo Data da Movimentação
    //Deve retornar uma mensagem de erro
    it('passes', () => {
        cy.visit('https://seubarriga.wcaquino.me/movimentacao')

        cy.get('#tipo').select('Despesa')
        cy.get('#data_transacao').type('aa/aa/aaaa')
        cy.get('#data_pagamento').type('07/02/2025')
        cy.get('#descricao').type('Conta de água')
        cy.get('#interessado').type('Proprietário')
        cy.get('#valor').type('60.00')
        cy.get('#conta').select('Água')
        cy.get('[for="status_pago"]').click()

        cy.get('.btn').click()
        cy.get('.alert').contains('Data da Movimentação inválida (DD/MM/YYYY)')
    })

    //DADO que acesso a página de Movimentação
    //E digito uma data futura no campo Data da Movimentação
    //Deve retornar uma mensagem de erro
    it('passes', () => {
        cy.visit('https://seubarriga.wcaquino.me/movimentacao')

        cy.get('#tipo').select('Despesa')
        cy.get('#data_transacao').type('15/12/2030')
        cy.get('#data_pagamento').type('07/02/2025')
        cy.get('#descricao').type('Conta de água')
        cy.get('#interessado').type('Proprietário')
        cy.get('#valor').type('60.00')
        cy.get('#conta').select('Água')
        cy.get('[for="status_pago"]').click()

        cy.get('.btn').click()
        cy.get('.alert').contains('Data da Movimentação deve ser menor ou igual à data atual')
    })

})