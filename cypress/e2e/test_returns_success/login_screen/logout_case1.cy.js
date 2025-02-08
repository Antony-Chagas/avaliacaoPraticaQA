import { login } from '../login_screen/login_case1.cy';

describe('Realizar um logout com sucesso', () => {

  login()

  //Quando clico no botão sair
  //ENTÃO deve retornar a tema de sair 
  it('passes', () => {
    cy.get(':nth-child(5) > a').click()
  })

})