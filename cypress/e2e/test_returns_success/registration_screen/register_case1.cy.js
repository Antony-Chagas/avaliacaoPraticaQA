import registerForm from '../../testing_functions/function_register.cy'

describe('Cadastrar um novo usuário com sucesso', () => {

  //DADO que acesso a página de Novo Usuário
  //E digito um nome, email e senha válidos
  //QUANDO clico no botão de Cadastrar
  //ENTÃO deve ser exibida a mensagem de sucesso
  it('Cadastrar um novo usuário com sucesso', () => {

    registerForm('Antony', 'Teste123@gmail.com', '1234')

    cy.get('.alert').contains('Usuário inserido com sucesso')
  })
})