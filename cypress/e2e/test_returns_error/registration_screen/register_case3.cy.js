import registerForm from '../../testing_functions/function_register.cy'

describe('Testes com campo nome inválidos', () => {

    it('Testes com o nome com caracteres proibidos', () => {

        registerForm('##################', 'antony55555@gmail.com', '1234')

        cy.get('.alert').contains('Usuário inserido com sucesso')
    })

    it('Testes com o nome com apenas números', () => {

        registerForm('3333333333333', 'antony255555@gmail.com', '1234')

        cy.get('.alert').contains('Usuário inserido com sucesso')
    })
})