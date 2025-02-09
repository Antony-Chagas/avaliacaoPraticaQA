import registerForm from '../../testing_functions/function_register.cy'

describe('Novo cadastro com dados existentes ', () => {

  //DADO que acesso a página de Novo Usuário
  //E digito um nome, senha válidos
  //E digito um email já existente
  //QUANDO clico no botão de Cadastrar
  //ENTÃO deve ser exibida a mensagem de erro
  it('Novo cadastro com o email já existente', () => {

    registerForm('Antony', 'antony@gmail.com', '1234')

    cy.get('.alert').contains('Endereço de email já utilizado')
  })
})