import { login } from '../../test_returns_success/login_screen/login_case1.cy';

describe('Cadastrar uma nova conta com um nome já existente', () => {

  it('passes', () => {
    login()
  })

  //DADO que acesso a página de adicionar conta
  //E no campo nome coloco um nome ja existente
  //QUANDO clico no botão salvar retorar uma mensage de erro

  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/addConta')
    cy.get('#nome').type('Água')

    cy.get('.btn').click()

    cy.get('.alert').contains('Já existe uma conta com esse nome!')
  })
})