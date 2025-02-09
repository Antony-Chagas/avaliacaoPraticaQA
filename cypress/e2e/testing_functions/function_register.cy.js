export default function registerForm(nome, email, senha) {
    cy.visit('https://seubarriga.wcaquino.me/cadastro')
    cy.get('#nome').type(nome)
    cy.get('#email').type(email)
    cy.get('#senha').type(senha)
    cy.get('.btn').click()
}