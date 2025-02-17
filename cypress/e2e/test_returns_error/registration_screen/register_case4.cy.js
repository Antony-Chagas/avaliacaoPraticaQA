import registerForm from '../../testing_functions/function_register.cy'

describe('Testes com a senha muito fraca', () => {

    it('Testes com a senha com um caracterer', () => {

        registerForm('Antony', 'antony2255@gmail.com', '1')

        cy.get('.alert').contains('Usuário inserido com sucesso')
    })
})