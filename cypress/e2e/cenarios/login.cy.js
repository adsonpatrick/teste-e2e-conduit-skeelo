
import Login from "../../support/pages/login/login"

const email = Cypress.env("email")
const password = Cypress.env("password")

describe("CENÁRIO DE SUCESSO - LOGIN", () => {
    it("Validação de login com email e senha corretos", () => {
        cy.step('DADO... que eu acesse a plataforma')
        Login.accessLogin()

        cy.step('QUANDO... eu digito o email e a senha')
        Login.insertEmail(email)
        Login.insertPassword(password)

        cy.step('E... clico no botão Sign in')
        Login.clickLogin()

        cy.step('ENTÃO... sou logado a plataforma')
        Login.loginUrlValidation()
    })
})

describe("CENÁRIO DE FALHA - LOGIN", () => {
    it("Espera que não consiga logar com senha incorreta", () => {
        cy.step('DADO... que eu acesse a plataforma')
        Login.accessLogin()

        cy.step('QUANDO... eu digito o email e a senha incorreta')
        Login.insertEmail(email)
        Login.insertPassword("102030")

        cy.step('E... clico no botão Sign in')
        Login.clickLogin()

        cy.step('ENTÃO... irá retornar uma mensagem de login e senha invalidas')
        Login.messageError()
    })

    it("Espera que não consiga logar com email incorreto", () => {
        cy.step('DADO... que eu acesse a plataforma')
        Login.accessLogin()

        cy.step('QUANDO... eu digito um email incorreto com uma senha correta')
        Login.insertEmail("testeautomacao@teste.com")
        Login.insertPassword(password)

        cy.step('E... clico no botão Sign in')
        Login.clickLogin()

        cy.step('ENTÃO... irá retornar uma mensagem de login e senha invalidas')
        Login.messageError()
    })
})
