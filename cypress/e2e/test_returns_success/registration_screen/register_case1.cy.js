import registerForm from '../../testing_functions/function_register.cy'

describe('Cadastrar um novo usuário com sucesso', () => {

  it('Cadastrar um novo usuário com sucesso', () => {

    registerForm('Antony', 'Teste123@gmail.com', '1234')

    cy.get('.alert').contains('Usuário inserido com sucesso')
  })
})