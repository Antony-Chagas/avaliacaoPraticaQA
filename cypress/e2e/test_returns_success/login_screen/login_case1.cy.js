import loginForm from '../../testing_functions/function_login.cy';

describe('Realizar um login com sucesso', () => {

  it('Realizar um login com sucesso', () => {
    loginForm('antony@gmail.com', '1234')

    cy.get('.alert').contains('Bem vindo, Antony!')
  })
})