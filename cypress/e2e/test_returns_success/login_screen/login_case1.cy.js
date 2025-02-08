describe('Realizar um login com sucesso', () => {

  //DADO que acesso a página de Login
  //E digito o email recém cadastrado
  //E a senha válida
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de Bem vindo

  function login(){
    it('passes', () => {
      cy.visit('https://seubarriga.wcaquino.me/login')
      cy.get('#email').type('antony@gmail.com')
      cy.get('#senha').type('1234')
      cy.get('.btn').click()
  
      cy.get('.alert').contains('Bem vindo, Antony!') 
    })
  }

  login()
})

export function login() {};