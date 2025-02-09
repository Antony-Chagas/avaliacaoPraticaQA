import loginForm from '../../testing_functions/function_login.cy';

describe('Realizar um login com sucesso', () => {

  //DADO que acesso a página de Login
  //E digito o email recém cadastrado
  //E a senha válida
  //QUANDO clico no botão de Entrar
  //ENTÃO deve ser exibida a mensagem de Bem vindo
  it('Realizar um login com sucesso', () => {
    loginForm('antony@gmail.com', '1234')

    cy.get('.alert').contains('Bem vindo, Antony!')
  })
})