
import Logout from "../../support/pages/logout/logout"

describe("CENÁRIO DE SUCESSO - LOGOUT", () => {
    it("Validação de logout da plataforma", () => {
        cy.step('DADO... que eu acesse a plataforma')
        cy.login('email', 'password')

        cy.step('QUANDO... clico nas configurações')
        Logout.clickOnSettings()

        cy.step('E... clico no botão de logout')
        Logout.exitPlataform()

        cy.step('ENTÃO... deverá sair da plataforma')
        Logout.logoutUrlValidation()
    })
})
