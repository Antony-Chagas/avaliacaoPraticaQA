import registerForm from '../../testing_functions/function_register.cy'

describe('Novo cadastro com dados existentes ', () => {

  it('Novo cadastro com o email já existente', () => {

    registerForm('Antony', 'antony@gmail.com', '1234')

    cy.get('.alert').contains('Endereço de email já utilizado')
  })
})