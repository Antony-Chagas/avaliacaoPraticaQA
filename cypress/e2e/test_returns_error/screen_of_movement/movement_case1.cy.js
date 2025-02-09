import { login } from '../../testing_functions/function_login.cy';
import movementForm from '../../testing_functions/function_moviment.cy'

describe('Teste campo *Data da Movimentação*', () => {

    login()

    //DADO que acesso a página de Movimentação
    //E digito letras no campo Data da Movimentação
    //Deve retornar uma mensagem de erro
    it('Deve aceitar apenas datas válidas e no formato formato DD/MM/AAAA', () => {

        movementForm("Despesa", "aa/aa/aaaa", "07/02/2025", "Conta de água", "Proprietário", 60.00, "Água")

        cy.get('.alert').contains('Data da Movimentação inválida (DD/MM/YYYY)')
        cy.get('.alert').contains('Data da Movimentação deve ser menor ou igual à data atual')
    })

    //DADO que acesso a página de Movimentação
    //E digito uma data futura no campo Data da Movimentação
    //Deve retornar uma mensagem de erro
    it('Data da Movimentação deve ser menor ou igual à data atual', () => {

        movementForm("Despesa", "15/12/2030", "07/02/2025", "Conta de água", "Proprietário", 60.00, "Água")

        cy.get('.alert').contains('Data da Movimentação deve ser menor ou igual à data atual')
    })
})