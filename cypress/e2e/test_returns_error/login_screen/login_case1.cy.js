import loginForm from '../../testing_functions/function_login.cy';

describe('Login com os dados inválidos', () => {

  //DADO que acesso a página de Login
  //E digito o email recém cadastrado
  //E uma senha inválida
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de erro
  it('Login com uma senha inválida', () => {

    loginForm('antony@gmail.com', '12345')

    cy.get('.alert').contains('Problemas com o login do usuário')
  })

  //DADO que acesso a página de Login
  //E digito o email inválido
  //E uma senha correta
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de erro
  it('Login com um email inválido', () => {

    loginForm('antony.teste@gmail.com', '12345')

    cy.get('.alert').contains('Problemas com o login do usuário')
  })
})