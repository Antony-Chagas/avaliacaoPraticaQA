describe(
  'template spec', () => {

    //DADO que acesso a página de Login
    //E digito o email recém cadastrado
    //E uma senha inválida
    //QUANDO clico no botão de Entrar
    //ENTÃO deve ser exibida a mensagem de erro

    it('passes', () => {
      cy.visit('https://seubarriga.wcaquino.me/login')
      cy.get('#email').type('antony@gmail.com')
      cy.get('#senha').type('12345')
      cy.get('.btn').click()

      cy.get('.alert').contains('Problemas com o login do usuário')
    })


  })