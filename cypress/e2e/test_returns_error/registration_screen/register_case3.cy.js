describe('Testes com campo nome inválidos', () => {

    //DADO que acesso a página de Novo Usuário
    //E digito um email, senha válidos
    //E digito um nome caracteres proibidos
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro

    it('passes', () => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('##################')
        cy.get('#email').type('antony###@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        //O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas caracteres especiais.
    })

    //DADO que acesso a página de Novo Usuário
    //E digito um email, senha válidos
    //E digito um nome com apenas números
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro

    it('passes', () => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('3333333333333')
        cy.get('#email').type('antony333@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
        //O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas números.
    })
})