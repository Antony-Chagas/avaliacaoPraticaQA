export function login() {
    it('Realizar um login com sucesso', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').type('antony@gmail.com')
        cy.get('#senha').type('1234')
        cy.get('.btn').click()
    })
}

export default function loginForm(email, senha) {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').type(email)
    cy.get('#senha').type(senha)
    cy.get('.btn').click()
}