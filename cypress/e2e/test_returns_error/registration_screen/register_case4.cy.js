import registerForm from '../../testing_functions/function_register.cy'

describe('Testes com a senha muito fraca', () => {

    //DADO que acesso a página de Novo Usuário
    //E digito um email, nome válidos
    //E digito uma senha com um caracterer.
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro
    it('Testes com a senha com um caracterer', () => {

        registerForm('Antony', 'antony2255@gmail.com', '1')

        cy.get('.alert').contains('Usuário inserido com sucesso')
        //O Programa falhou, permitiu a criação de um novo cadastro com uma senha fraca, contendo atepnas 1 carater.
    })
})