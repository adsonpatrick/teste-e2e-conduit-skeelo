import { loginElements } from "./loginElements"

class Login {
    static accessLogin() {  
        cy.visit( "/login?_k=jwkgcw")
    }
    static insertEmail(email) {
        cy.get(loginElements.inputEmailLogin).type(email, {delay: 0}).should("have.value", email)
    }
    static insertPassword(password) {
        cy.get(loginElements.inputPasswordLogin).type(password, {delay: 0}).should("have.value", password)
    }
    static clickLogin() {
        cy.intercept({
            url: 'https://api.realworld.io/api/users/login'
        }).as('loginSuccess')
        cy.get(loginElements.buttonLogin).click()
    }
    static loginUrlValidation() {
        cy.wait('@loginSuccess').its('response.statusCode').should('eq', 200)
    }

    static messageError() {
        cy.get(loginElements.spanErrorLogin).should("contain", "email or password")
    }
}
export default Login