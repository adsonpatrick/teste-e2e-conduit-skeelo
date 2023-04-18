import Login from "./pages/login/login"

Cypress.Commands.add('login', (email, password) => {
    Login.accessLogin()
    Login.insertEmail(Cypress.env(email))
    Login.insertPassword(Cypress.env(password))
    Login.clickLogin()
    Login.loginUrlValidation()
})