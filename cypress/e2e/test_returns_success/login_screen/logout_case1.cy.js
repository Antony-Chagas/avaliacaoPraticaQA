import { login } from '../../testing_functions/function_login.cy';

describe('Realizar um logout com sucesso', () => {

  login()

  //Quando clico no botão sair
  //ENTÃO deve retornar a tema de sair 
  it('Realizar um logout com sucesso', () => {
    cy.get(':nth-child(5) > a').click()
  })
})