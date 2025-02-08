describe('Testes com a senha muito fraca', () => {

    //DADO que acesso a página de Novo Usuário
    //E digito um email, nome válidos
    //E digito uma senha com um caracterer.
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro

    it('passes', () => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro')
        cy.get('#nome').type('Antony')
        cy.get('#email').type('antony22@gmail.com')
        cy.get('#senha').type('1')
        cy.get('.btn').click()
        //O Programa falhou, permitiu a criação de um novo cadastro com uma senha fraca, contendo atepnas 1 carater.
    })
})