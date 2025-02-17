import loginForm from '../../testing_functions/function_login.cy';

describe('Login com os dados inválidos', () => {

  it('Login com uma senha inválida', () => {

    loginForm('antony@gmail.com', '12345')

    cy.get('.alert').contains('Problemas com o login do usuário')
  })

  it('Login com um email inválido', () => {

    loginForm('antony.teste@gmail.com', '12345')

    cy.get('.alert').contains('Problemas com o login do usuário')
  })
})