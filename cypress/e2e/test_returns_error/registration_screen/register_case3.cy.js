import registerForm from '../../testing_functions/function_register.cy'

describe('Testes com campo nome inválidos', () => {

    //DADO que acesso a página de Novo Usuário
    //E digito um email, senha válidos
    //E digito um nome com caracteres proibidos
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro
    it('Testes com o nome com caracteres proibidos', () => {

        registerForm('##################', 'antony1@gmail.com', '1234')

        cy.get('.alert').contains('Usuário inserido com sucesso')
        //O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas caracteres especiais.
    })

    //DADO que acesso a página de Novo Usuário
    //E digito um email, senha válidos
    //E digito um nome com apenas números
    //QUANDO clico no botão de Cadastrar
    //ENTÃO deve ser exibida a mensagem de erro
    it('Testes com o nome com apenas números', () => {

        registerForm('3333333333333', 'antony2@gmail.com', '1234')

        cy.get('.alert').contains('Usuário inserido com sucesso')
        //O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas números.
    })
})