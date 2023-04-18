import { signUpElements } from "./signUpElements"

class SignUp {
    static createAccount() {
        cy.get(signUpElements.signUpButton).click()
    }
    static insertUsername(username) {
        cy.get(signUpElements.inputUsername).type(username, {delay: 0}).should("have.value", username)
    }
    static insertEmail(email) {
        cy.get(signUpElements.inputEmail).type(email, {delay: 0}).should("have.value", email)
    }
    static insertPassword(password) {
        cy.get(signUpElements.inputPassword).type(password, {delay: 0}).should("have.value", password)
    }
    static clickCrateAccountButton() {
        cy.intercept({
            url: 'https://api.realworld.io/api/users'
        }).as('accountSuccess')
        cy.get(signUpElements.signInButton).click()
    }

    static accountUrlValidation() {
        cy.wait('@accountSuccess').its('response.statusCode').should('eq', 200)
    }
    static messageError() {
        cy.get(signUpElements.spanErrorSignUp).should("contain", "has already been taken")
    }
}
export default SignUp